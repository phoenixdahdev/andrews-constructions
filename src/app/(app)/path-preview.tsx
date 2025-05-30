'use client'
import { cn } from '~/lib/utils'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { delete_current_cad } from '~/actions/cad'

const PathView = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const path = usePathname()
  useEffect(() => {
    const maybeDeleteCad = async () => {
      if (!path.includes('cad')) {
        await delete_current_cad()
      }
    }
    maybeDeleteCad()
  }, [path])

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
