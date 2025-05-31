import { auth } from 'auth'
import { openai } from '@ai-sdk/openai'
import { MessageRole, } from '@prisma/client';
import { NextResponse, type NextRequest, } from 'next/server'
import { get_current_chat, set_current_chat } from '~/actions/chat'
import { ConversationService } from '~/services/conversation.service'
import { Attachment, Message, streamText, smoothStream, UIMessage, } from 'ai'

// export const maxDuration = 60
// export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { messages, }: { messages: UIMessage[] } =
      await req.json()
    let conversationId
    const session = await auth()
    if (!session) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
    conversationId = await get_current_chat()
    if (!conversationId) {
      const conversation = await ConversationService.createConversation(
        session.user.id,
        'AI Optimizer',
        'This conversation is for optimizing CAD drawings and construction plans.'
      )
      conversationId = conversation.id
      await set_current_chat(conversationId)
    }

    if (!messages || messages.length === 0) {
      return new Response('No messages provided', { status: 400 })
    }
    if (conversationId) {
      const lastMessage = messages[messages.length - 1]
      if (lastMessage.role === 'user') {
        await ConversationService.addMessage(
          conversationId as string,
          MessageRole.USER,
          lastMessage.content,
          lastMessage.experimental_attachments?.map(
            (attachment: Attachment) => attachment.url
          )
        )
      }
    }

    const result = streamText({
      model: openai('gpt-4o'),
      // @ts-expect-error next line
      messages: messages.map((message: Message) => ({
        role: message.role,
        content: [
          { type: "text", text: message.content },
          ...(message.experimental_attachments || []).map((attachment: Attachment) => ({
            type: "image",
            image: attachment.url,
          })),
        ],
      })),
      onFinish: async (result) => {
        if (conversationId) {
          await ConversationService.addMessage(
            conversationId,
            MessageRole.ASSISTANT,
            result.text
          )
        }
      },
      experimental_transform: smoothStream({
        delayInMs: 20,
        chunking: 'line',
      }),
    })
    return result.toDataStreamResponse()
  } catch (error) {
    console.error('Error in chat API:', error)
    return new Response('An error occurred during the request', { status: 500 })
  }
}
