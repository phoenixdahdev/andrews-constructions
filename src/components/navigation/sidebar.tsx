'use client'

import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'ui/tooltip'
import Link from 'next/link'
import { Button } from 'ui/button'
import { Home, Timer, Settings, LayoutGrid } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="flex h-full w-[4rem] flex-col items-center rounded-2xl bg-white py-6 shadow-2xl dark:bg-black/70">
      <TooltipProvider delayDuration={300}>
        <div className="flex h-full flex-col items-center justify-between">
          <div className="flex flex-col items-center gap-8">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost">
                  <Link href="/">
                    <Home className="h-5 w-5 text-blue-500" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost">
                  <Link href="/activity">
                    <Timer className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Activity</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost">
                  <Link href="/settings">
                    <Settings className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                <LayoutGrid className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Dashboard</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  )
}

export default Sidebar
