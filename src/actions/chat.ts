'use server'
import { cookies } from 'next/headers'
import { inDevEnvironment } from '~/lib/utils'

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
