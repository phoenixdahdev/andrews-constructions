import 'styles'
import { cn } from 'utils'
import { auth } from 'auth'
import type { Metadata } from 'next'
import { Providers } from './provider'
import { retrive_theme } from '~/actions/theme'
import { Toaster } from '~/components/ui/sonner'
import { SessionProvider } from 'next-auth/react'
import { Roboto, Roboto_Condensed } from 'next/font/google'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

const robotoCondensed = Roboto_Condensed({
  variable: '--font-roboto-condensed',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Andrew Constructions',
  description:
    'Andrew Construction Solution helps users get accurate measurements and material needs from their CAD drawings.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = await retrive_theme()
  const session = await auth()
  return (
    <html lang="en">
      <body
        className={cn('antialiased', roboto.variable, robotoCondensed.variable)}
      >
        <SessionProvider session={session}>
          <Providers defaultTheme={theme} session={session}>
            <main className="font-inter font-roboto relative mx-auto min-h-dvh w-full max-w-[1500px] bg-[#F5FAFF] dark:bg-gray-900">
              {children}
            </main>
            <Toaster richColors position="top-center" />
          </Providers>
        </SessionProvider>
      </body>
    </html>
  )
}
