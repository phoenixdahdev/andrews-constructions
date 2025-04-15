"use server";

import { z } from "zod";
import { loginSchema, signupSchema } from "~/schemas/auth";
import { compare_password } from "~/lib/utils";
import { notification_type } from "prisma-client";
import { create_notification } from "~/services/notification-service";
import { create_new_user, get_user_by_email, get_user_by_id } from "~/services/user-service";


export async function login(data: z.infer<typeof loginSchema>) {
    const user = await get_user_by_email(data.email)
    if (!user) {
        return {
            error: 'Invalid email or password',
            success: false,
        }
    }
    if (!user.password) {
        return {
            error: 'User created with Google authentication',
            success: false,
        }
    }
    const is_password_matched = await compare_password(
        data.password,
        user.password
    )
    if (!is_password_matched) {
        return {
            error: 'Invalid email or password',
            success: false,
        }
    }
    await create_notification({
        user_id: user.id,
        type: notification_type.SYSTEM_NOTIFICATION,
        message: 'Login succesfully',
        title: 'Account Login',
    })
    return {
        success: true,
        user: await get_user_by_id(user.id),
    }
}

export async function create_user(data: z.infer<typeof signupSchema>) {
    let user
    user = await get_user_by_email(data.email)
    if (user) {
        return {
            error: 'User Already exist',
            success: false,
        }
    }
    user = await create_new_user(data)
    await create_notification({
        user_id: user.id,
        type: notification_type.SYSTEM_NOTIFICATION,
        message: 'account created succesfully',
        title: 'Account Creation',
    })
    return {
        success: true,
        user: user,
    }
}


export async function google_login(data: z.infer<typeof signupSchema>) {
    let user
    user = await get_user_by_email(data.email)
    if (user) {
        return {
            error: 'User Already exist',
            success: false,
        }
    }
    user = await create_new_user(data)
    await create_notification({
        user_id: user.id,
        type: notification_type.SYSTEM_NOTIFICATION,
        message: 'account created succesfully',
        title: 'Account Creation',
    })
    return {
        success: true,
        user: user,
    }
}