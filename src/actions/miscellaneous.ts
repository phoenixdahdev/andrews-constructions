'use server'

import { ThemeState } from 'types'
import { cookies } from 'next/headers'
import { inDevEnvironment } from 'utils'

export const set_onboarding = async () => {
  const maxAge = 60 * 60 * 24 * 400
  const cookieStore = await cookies()

  cookieStore.set('onboarded', 'true', {
    httpOnly: true,
    secure: !inDevEnvironment,
    maxAge,
    path: '/',
  })

  return true
}

export const retrive_onboarding = async () => {
  const cookieStore = await cookies()
  const storedData = cookieStore.get('onboarded')?.value
  return storedData ? (JSON.parse(storedData as string) as ThemeState) : false
}
