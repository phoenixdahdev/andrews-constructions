'use server'
import {
  update_user,
  update_user_notification_preference,
  get_user_security_settings,
  get_user_by_id,
} from '~/services/user-service'
interface Data {
  name?: string
  email?: string
  profile_image?: string
  two_step_enabled?: boolean
}
interface NotificationPreferences {
  enable_notifications: boolean
  notify_material_changes: boolean
  notify_system_updates: boolean
}
export async function update_profile(userId: string, data: Data) {
  try {
    await update_user(userId, data)
  } catch (err) {
    return {
      success: false,
      error: err,
    }
  }

  return { success: true }
}

export async function update_notification_preferences(
  userId: string,
  data: NotificationPreferences
) {
  try {
    await update_user_notification_preference(userId, data)
  } catch (err) {
    return {
      success: false,
      error: err,
    }
  }

  return { success: true }
}

export async function get_security_settings(userId: string) {
  const user = await get_user_security_settings(userId)
  if (!user)
    return {
      success: false,
      error: "Error fetching user's settings",
    }
  return {
    success: true,
    user: user,
  }
}
export async function get_user_info(id: string) {
  const user = await get_user_by_id(id)
  if (!user)
    return {
      success: false,
      error: "Error fetching user's settings",
    }
  return {
    success: true,
    user: user,
  }
}
