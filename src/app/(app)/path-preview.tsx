'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '~/lib/utils'

const PathView = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const path = usePathname()
  return (
    <main
      className={cn(
        'flex-1 overflow-auto',
        path.includes('cad')
          ? ''
          : 'rounded-2xl bg-white p-6 shadow-2xl dark:bg-black/70'
      )}
    >
      {children}
    </main>
  )
}

export default PathView
