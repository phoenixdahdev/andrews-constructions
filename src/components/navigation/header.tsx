'use client'
import React from 'react'

import { Input } from 'ui/input'
import { Button } from 'ui/button'
import { useTheme } from '~/context/theme-context'
import UserDropdown from '../miscellaneous/user-dropdown'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import BlurImage from '~/components/miscellaneous/blur-image'
import { Search, Bell, Sparkles, Moon, Sun } from 'lucide-react'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleTheme({ x: e.clientX, y: e.clientY })
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D0D0D0] bg-[#FDFDFD] px-[16px] py-[24px] dark:border-gray-900 dark:bg-black">
      <div className="flex items-center justify-between px-5">
        <div className="flex flex-1 items-center gap-2">
          <BlurImage src="/logo.png" alt="Logo" width={40} height={40} />
          <div className="flex flex-col">
            <h1 className="font-roboto-condensed text-2xl leading-[30px] font-semibold">
              Andrew
            </h1>
            <h2 className="text-base leading-6 font-medium">
              Construction Solution
            </h2>
          </div>
        </div>

        <div className="mx-4 w-full max-w-xl">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search CAD drawings..."
              className="w-full rounded-md border py-2 pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative cursor-pointer rounded-full bg-[#E3F2FF] p-2">
            <Bell className="h-5 w-5 text-gray-500" />
          </button>
          <Button className="flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600">
            <span>Chat AI</span>
            <Sparkles className="h-4 w-4" />
          </Button>
          <SwitchPrimitives.Root
            checked={theme === 'dark'}
            onClick={handleThemeToggle}
            className="peer focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-accent data-[state=unchecked]:bg-input inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
          >
            <SwitchPrimitives.Thumb className="bg-background pointer-events-none flex h-5 w-5 items-center justify-center rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0">
              {theme === 'dark' ? (
                <Moon className="size-3" />
              ) : (
                <Sun className="size-3" />
              )}
            </SwitchPrimitives.Thumb>
          </SwitchPrimitives.Root>
          <UserDropdown />
        </div>
      </div>
    </header>
  )
}

export default Header
