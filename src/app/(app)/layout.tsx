import type React from 'react'
import Header from '~/components/navigation/header'
import Sidebar from '~/components/navigation/sidebar'

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
          <main className="flex-1 overflow-auto rounded-2xl bg-white shadow-2xl dark:bg-black/70">
            {children}
          </main>
        </main>
      </div>
    </div>
  )
}
