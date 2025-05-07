'use client'

import { ThemeState } from '~/types/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from '~/context/theme-context'
import { getQueryClient } from '~/lib/get-query-client'
import { Session } from 'next-auth'
import WelcomeModal from '~/components/miscellaneous/get-started-modal'
import { UploadDialog } from './(app)/_components/upload-dialog'
import { AIOptimizer } from './(app)/_components/ai-sheet'

export function Providers({
  children,
  defaultTheme,
  session,
}: {
  children: React.ReactNode
  defaultTheme?: ThemeState
  session?: Session | null
}) {
  const queryClient = getQueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme={defaultTheme}>{children}</ThemeProvider>
      <ReactQueryDevtools
        initialIsOpen={false}
        position="left"
        buttonPosition="top-left"
      />
      {session && <WelcomeModal />}

      <UploadDialog />
      <AIOptimizer />
    </QueryClientProvider>
  )
}
