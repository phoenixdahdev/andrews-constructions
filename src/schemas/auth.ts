import { user_role } from '@prisma/client'
import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
  remember_me: z.boolean().default(false).optional(),
})

export const signupSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  role: z
    .enum([user_role.ADMIN, user_role.USER, user_role.CONTRACTOR], {
      errorMap: () => ({ message: 'Please select a role' }),
    })
    .default(user_role.USER)
    .optional(),
  terms_accepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and privacy policy',
  }),
})
