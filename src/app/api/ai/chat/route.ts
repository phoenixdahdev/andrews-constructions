import { streamText } from 'ai'
import { openai } from '@ai-sdk/openai'
import { NextResponse, type NextRequest } from 'next/server'
import { message, MessageRole } from '@prisma/client'
import { ConversationService } from '~/services/conversation.service'

export const maxDuration = 60

export async function POST(req: NextRequest) {
  try {
    const { messages, conversationId, imageUrl, imageFilename } =
      await req.json()

    console.dir(messages, { depth: null, colors: true })


    return NextResponse.json({
      data: "messages received",
    })


    if (!messages || messages.length === 0) {
      return new Response('No messages provided', { status: 400 })
    }
    if (conversationId) {
      const lastMessage = messages[messages.length - 1]
      if (lastMessage.role === 'user') {
        await ConversationService.addMessage(
          conversationId,
          MessageRole.USER,
          lastMessage.content,
          imageUrl,
          imageFilename
        )
      }
    }
    const formattedMessages = messages.map((message: message) => {
      if (message.role === MessageRole.USER && message.image_url) {
        return {
          role: 'user',
          content: [
            {
              type: 'text',
              text: message.content || 'Analyze this CAD drawing',
            },
            {
              type: 'image_url',
              image_url: {
                url: message.image_url,
              },
            },
          ],
        }
      }
      return {
        role: message.role,
        content: message.content,
      }
    })
    if (
      !formattedMessages.some((m: message) => m.role === MessageRole.SYSTEM)
    ) {
      formattedMessages.unshift({
        role: 'system',
        content:
          'You are a helpful CAD and construction expert. Analyze CAD drawings, suggest optimizations, and answer questions about construction plans. Be specific and technical when appropriate.',
      })
    }
    const result = streamText({
      model: openai('gpt-4o'),
      messages: formattedMessages,
      maxTokens: 2000,
      onFinish: async (result) => {
        if (conversationId) {
          await ConversationService.addMessage(
            conversationId,
            MessageRole.ASSISTANT,
            result.text
          )
        }
      },
    })
    return result.toDataStreamResponse()
  } catch (error) {
    console.error('Error in chat API:', error)
    return new Response('An error occurred during the request', { status: 500 })
  }
}
