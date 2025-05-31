import prisma from '~/lib/primsa'
import type { MessageRole } from '@prisma/client'

export type ConversationWithMessages = {
  id: string
  title: string
  description: string | null
  created_at: Date
  updated_at: Date
  messages: {
    id: string
    role: MessageRole
    content: string
    image_urls: string[] | null
    created_at: Date
  }[]
}

export class ConversationService {
  static async createConversation(
    userId: string,
    title: string,
    description?: string
  ) {
    return await prisma.conversation.create({
      data: {
        title,
        description,
        user_id: userId,
      },
      include: {
        messages: {
          orderBy: { created_at: 'asc' },
        },
      },
    })
  }

  static async getConversations(userId: string) {
    return await prisma.conversation.findMany({
      where: { user_id: userId },
      include: {
        messages: {
          orderBy: { created_at: 'asc' },
          take: 1,
        },
      },
      orderBy: { updated_at: 'desc' },
    })
  }

  static async getConversation(
    conversationId: string,
    userId: string
  ): Promise<ConversationWithMessages | null> {
    return await prisma.conversation.findFirst({
      where: {
        id: conversationId,
        user_id: userId,
      },
      include: {
        messages: {
          orderBy: { created_at: 'asc' },
        },
      },
    })
  }

  static async addMessage(
    conversationId: string,
    role: MessageRole,
    content: string,
    imageUrls?: string[] | null,
  ) {
    const message = await prisma.message.create({
      data: {
        conversationId,
        role,
        content,
        image_urls: imageUrls ?? undefined,
      },
    })

    await prisma.conversation.update({
      where: { id: conversationId },
      data: { updated_at: new Date() },
    })

    return message
  }

  static async updateConversationTitle(conversationId: string, title: string) {
    return await prisma.conversation.update({
      where: { id: conversationId },
      data: { title },
    })
  }

  static async deleteConversation(conversationId: string, userId: string) {
    return await prisma.conversation.deleteMany({
      where: {
        id: conversationId,
        user_id: userId,
      },
    })
  }

  static async generateConversationTitle(
    firstMessage: string
  ): Promise<string> {
    const words = firstMessage.split(' ').slice(0, 6)
    let title = words.join(' ')
    if (title.length > 50) {
      title = title.substring(0, 47) + '...'
    }
    return title || 'New CAD Analysis'
  }
}
