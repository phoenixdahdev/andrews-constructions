import type React from 'react'
import PathView from './path-preview'
import Header from '~/components/navigation/header'
import Sidebar from '~/components/navigation/sidebar'
import { ConversationToggle } from './_components/conversation-button'
import { ConversationHistory } from './_components/history-dailog'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="h-full w-full">
        <Header />
        <main className="flex h-[calc(100vh-5rem)] gap-5 overflow-auto rounded-md p-8">
          <Sidebar />
          <PathView>{children}</PathView>
          <ConversationToggle />
          <ConversationHistory />
        </main>
      </div>
    </div>
  )
}
