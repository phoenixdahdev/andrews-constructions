'use server'
import { compare_password, hash_password } from './utils'
import {
  get_user_security_settings,
  update_user,
} from '~/services/user-service'

export async function confirm_current_password(
  current_password: string,
  id: string
) {
  const user = await get_user_security_settings(id)

  if (!user) {
    return { success: false, error: "Error getting user's details" }
  }
  if (!user.password) {
    return {
      success: false,
      error: 'User created with Google authentication',
    }
  }
  const is_password_matched = await compare_password(
    current_password,
    user.password
  )
  if (!is_password_matched) {
    return {
      success: false,
      error: 'Invalid password',
    }
  }
  return { success: true }
}

export async function change_password(new_password: string, id: string) {
  const hashed_password = await hash_password(new_password)
  try {
    await update_user(id, { password: hashed_password })
  } catch (err) {
    console.error('Pasword update Error:', err)
    return {
      success: false,
      error: 'Error updating password',
    }
  }
  return {
    success: true,
  }
}
