import prisma from '~/lib/primsa'
import type { notification_type } from 'prisma-client'

const db = prisma

export async function create_notification(data: {
  user_id: string
  type: notification_type
  title: string
  message: string
  created_by?: string
  related_id?: string
}) {
  return db.notification.create({
    data: {
      user_id: data.user_id,
      type: data.type,
      title: data.title,
      message: data.message,
      created_by: data.created_by,
    },
  })
}

export async function get_user_notifications(user_id: string) {
  return db.notification.findMany({
    where: { user_id },
    orderBy: { created_at: 'desc' },
  })
}

export async function get_user_unread_notifications(user_id: string) {
  return db.notification.findMany({
    where: {
      user_id,
      is_read: false,
    },
    orderBy: { created_at: 'desc' },
  })
}

export async function mark_notification_as_read(id: string) {
  return db.notification.update({
    where: { id },
    data: { is_read: true },
  })
}

export async function mark_all_notifications_as_read(user_id: string) {
  return db.notification.updateMany({
    where: {
      user_id,
      is_read: false,
    },
    data: { is_read: true },
  })
}

export async function delete_notification(id: string) {
  return db.notification.delete({
    where: { id },
  })
}
