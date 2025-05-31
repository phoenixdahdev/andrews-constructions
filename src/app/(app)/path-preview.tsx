'use client'
import { cn } from '~/lib/utils'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { delete_current_cad } from '~/actions/cad'
import { useAIDrawerStore } from '~/hooks/use-ai-drawer-store'
import { delete_current_chat } from '~/actions/chat'

const PathView = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const path = usePathname()
  const { isOpen } = useAIDrawerStore()
  useEffect(() => {
    const maybeDeleteCad = async () => {
      if (!path.includes('cad')) {
        await delete_current_cad()
      }
    }
    maybeDeleteCad()
  }, [path])

  useEffect(() => {
    const delete_current_chat_from_ai_drawer = async () => {
      if (!isOpen) {
        await delete_current_chat()
      }
    }
    delete_current_chat_from_ai_drawer()
  }, [isOpen])

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
