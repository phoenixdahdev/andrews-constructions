'use client'

import type React from 'react'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '~/components/ui/sheet'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { MessageSquare, Camera, Paperclip, ArrowUp, X } from 'lucide-react'
import { useAIDrawerStore } from '~/hooks/use-ai-drawer-store'

export function AIOptimizer() {
  const {
    isOpen,
    messages,
    inputValue,
    openDrawer,
    closeDrawer,
    setInputValue,
    addMessage,
  } = useAIDrawerStore()

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    addMessage({
      role: 'user',
      content: inputValue,
    })

    // Simulate AI response
    setTimeout(() => {
      addMessage({
        role: 'assistant',
        content:
          "I'll help you optimize that. Let me analyze your CAD drawing...",
      })
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleOpenChange = (open: boolean) => {
    if (open) {
      openDrawer()
    } else {
      closeDrawer()
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent className="right-2 my-auto h-[95dvh] w-full rounded-2xl border-l p-0 sm:max-w-md md:max-w-lg">
        <div className="flex h-full flex-col">
          {/* Header */}
          <SheetHeader className="border-b p-4">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-lg font-semibold">
                AI Optimization
              </SheetTitle>
              <SheetClose className="flex h-6 w-6 items-center justify-center rounded-full">
                <X className="h-4 w-4" />
              </SheetClose>
            </div>
          </SheetHeader>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="flex items-start space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 p-2 text-white">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.isOptimization
                          ? 'bg-blue-50 text-gray-800'
                          : 'bg-blue-50 text-gray-800'
                      }`}
                    >
                      <div className="whitespace-pre-line">
                        {message.content}
                      </div>

                      {message.isOptimization && (
                        <div className="mt-4 flex gap-2">
                          <Button className="bg-blue-500 text-sm hover:bg-blue-600">
                            Yes, apply changes
                          </Button>
                          <Button variant="outline" className="text-sm">
                            No, don&apos;t apply changes
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {message.role === 'user' && (
                  <div className="flex items-start space-x-2">
                    <div className="max-w-[80%] rounded-lg bg-gray-100 p-4">
                      <div>{message.content}</div>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 p-2 text-white">
                      <span className="text-xs">👤</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="relative">
              <Input
                placeholder="Ask AI to optimize CAD, materials, or measurement..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="py-6 pr-24"
              />
              <div className="absolute top-1/2 right-2 flex -translate-y-1/2 transform items-center space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <Camera className="h-5 w-5 text-gray-500" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <Paperclip className="h-5 w-5 text-gray-500" />
                </Button>
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  size="icon"
                  className="h-8 w-8 rounded-full bg-blue-500 hover:bg-blue-600"
                >
                  <ArrowUp className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
