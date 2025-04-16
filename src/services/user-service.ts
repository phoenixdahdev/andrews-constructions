import { z } from 'zod'
import prisma from '~/lib/primsa'
import { user_role } from '@prisma/client'
import { hash_password } from '~/lib/utils'
import { signupSchema } from '~/schemas/auth'

const db = prisma

export async function create_new_user(data: Partial<z.infer<typeof signupSchema>>) {
  const hashedPassword = data.password ? await hash_password(data.password) : undefined
  return db.user.create({
    data: {
      email: data.email!,
      password: hashedPassword ? hashedPassword : undefined,
      name: data.name!,
      role: data.role as user_role,
    },
  })
}

export async function get_user_by_id(id: string) {
  return db.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      created_at: true,
      is_active: true,
    },
  })
}

export async function get_user_by_email(email: string) {
  return db.user.findUnique({
    where: { email },
  })
}

export async function get_all_members() {
  return db.user.findMany({
    where: { role: user_role.USER },
    select: {
      id: true,
      email: true,
      name: true,
      created_at: true,
      is_active: true,
    },
    orderBy: { name: 'asc' },
  })
}

export async function update_user(
  id: string,
  data: {
    email?: string
    name?: string
  }
) {
  return db.user.update({
    where: { id },
    data,
  })
}

export async function change_password(id: string, newPassword: string) {
  const hashedPassword = await hash_password(newPassword)
  return db.user.update({
    where: { id },
    data: { password: hashedPassword },
  })
}

