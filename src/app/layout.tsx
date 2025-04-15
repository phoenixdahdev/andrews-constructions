import 'styles'
import type { Metadata } from 'next'
import { Roboto, Roboto_Condensed } from 'next/font/google'
import { retrive_theme } from '~/actions/theme'
import { Providers } from './provider'
import { cn } from '~/lib/utils'

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
  return (
    <html lang="en">
      <body
        className={cn('antialiased', roboto.variable, robotoCondensed.variable)}
      >
        <Providers defaultTheme={theme}>
          <main className="bg-background font-inter font-roboto relative mx-auto min-h-dvh w-full max-w-[1500px]">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
