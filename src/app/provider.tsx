'use client'

import { ThemeState } from '~/types/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from '~/context/theme-context'
import { getQueryClient } from '~/lib/get-query-client'

export function Providers({
  children,
  defaultTheme,
}: {
  children: React.ReactNode
  defaultTheme?: ThemeState
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
    </QueryClientProvider>
  )
}
