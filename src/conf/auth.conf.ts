import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import type { NextAuthConfig } from 'next-auth'
import { loginSchema } from '~/schemas/auth'
import { google_login, login } from '~/actions/auth'
import { inDevEnvironment } from '~/lib/utils'

const authConfig: NextAuthConfig = {
  providers: [
    Google({
      checks: ['none'],
    }),
    Credentials({
      async authorize(credentials) {
        const validdata = loginSchema.safeParse(credentials)
        if (!validdata.success) {
          return null
        }
        const res = await login(validdata.data)
        if (!res.success || !res.user) {
          return null
        }
        const user = res.user

        if (!user) {
          return null
        }
        return {
          ...user,
        }
      },
    }),
  ],
  basePath: '/api/auth',
  session: {
    strategy: 'jwt',
  },
  debug: inDevEnvironment,
  trustHost: true,
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account?.provider === 'google' && profile?.email) {
        return true
      }
      return !!user
    },
    async jwt({ token, user, account, trigger, session, profile }) {
      if (trigger === 'update') {
        token = { ...token, ...session }
        return token
      }
      if (account && account.provider !== 'google') {
        return { ...token, ...user }
      }

      if (account && account.provider === 'google') {
        if (!profile?.email) {
          return null
        }
        const res = await google_login({
          email: profile.email,
          name: profile?.name as string,
        })
        if (!res.success) {
          return null
        }
        const user = {
          ...res.user,
          email: profile.email,
          name: profile?.name,
          profile_image: profile.picture
            ? profile.picture
            : res.user?.profile_image,
        }
        return { ...token, ...user, ...res }
      }
      return { ...token, ...user }
    },
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session.user = token as any
      const pic = (token.profile_image as string) || null
      session.user.profile_image = pic
      return session
    },
  },
} satisfies NextAuthConfig

export default authConfig
