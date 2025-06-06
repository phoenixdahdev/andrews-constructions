'use server'
import { auth } from '~/auth'
import { cookies } from 'next/headers'
import { inDevEnvironment } from '~/lib/utils'
import { ConversationService } from '~/services/conversation.service'

export async function set_current_chat(chat_id: string) {
  const cookie = await cookies()
  cookie.set('current_chat', chat_id, {
    httpOnly: true,
    secure: !inDevEnvironment,
    maxAge: 60 * 60 * 24,
    path: '/',
  })
  return chat_id
}

export async function get_current_chat() {
  const cookie = await cookies()
  const current_chat_id = cookie.get('current_chat')
  return current_chat_id?.value ?? null
}

export async function delete_current_chat() {
  const cookie = await cookies()
  cookie.delete('current_chat')
  return null
}

export async function get_conversations() {
  const session = await auth()
  return await ConversationService.getConversations(session?.user.id as string)
}

export async function get_conversation_by_id() {
  const session = await auth()
  const current_chat_id = await get_current_chat()
  if (!current_chat_id) {
    return null
  }
  return await ConversationService.getConversation(
    current_chat_id as string,
    session?.user.id as string
  )
}
