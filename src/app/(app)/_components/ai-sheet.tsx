/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import type React from 'react'
import { useState, useRef } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from 'ui/sheet'
import { Button } from 'ui/button'
import { Input } from 'ui/input'
import { useChat } from '@ai-sdk/react'
import { Camera, Paperclip, ArrowUp, X } from 'lucide-react'
import { useAIDrawerStore } from '~/hooks/use-ai-drawer-store'

interface ImagePreview {
  file: File
  url: string
  base64: string
}

export function AIOptimizer() {
  const { isOpen, openDrawer, closeDrawer } = useAIDrawerStore()
  const [selectedImages, setSelectedImages] = useState<ImagePreview[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const {
    input,
    handleInputChange,
    setInput,
    status,
    append,
    handleSubmit,
    messages,
  } = useChat({
    api: '/api/ai/chat',
    experimental_prepareRequestBody: ({ messages }) => {
      return {
        messages: messages.map((message) => ({
          role: message.role,
          content: message.content,
          ...(message.experimental_attachments && {
            experimental_attachments: message.experimental_attachments,
          }),
        })),
      }
    },
  })

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleFormSubmit()
    }
  }

  const handleOpenChange = (open: boolean) => {
    if (open) {
      openDrawer()
    } else {
      closeDrawer()
    }
  }

  const handleImageSelect = async (files: FileList | null) => {
    if (!files) return

    const newImages: ImagePreview[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file)
        const base64 = await convertToBase64(file)
        newImages.push({ file, url, base64 })
      }
    }

    setSelectedImages((prev) => [...prev, ...newImages])
  }

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })
  }

  const removeImage = (index: number) => {
    setSelectedImages((prev) => {
      const newImages = [...prev]
      URL.revokeObjectURL(newImages[index].url)
      newImages.splice(index, 1)
      return newImages
    })
  }

  const handleCameraClick = () => {
    fileInputRef.current?.click()
  }

  const handleFormSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!input.trim() && selectedImages.length === 0) return
    const messageContent = input.trim()
    const attachments = selectedImages.map((img) => ({
      name: img.file.name,
      contentType: img.file.type,
      url: img.base64,
    }))
    append({
      role: 'user',
      content: messageContent || 'Please analyze this image',
      experimental_attachments:
        attachments.length > 0 ? attachments : undefined,
    })
    setInput('')
    setSelectedImages([])
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent className="right-2 my-auto h-[95dvh] w-full rounded-2xl border-l p-0 sm:max-w-md md:max-w-lg">
        <div className="flex h-full flex-col">
          {/* Header */}
          <SheetHeader className="flex-shrink-0 border-b p-4">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-lg font-semibold">
                AI Optimization
              </SheetTitle>
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto p-4">
            {messages.length === 0 ? (
              <div className="flex h-full items-center justify-center text-gray-500">
                <p className="text-center">
                  Ask AI to optimize your CAD designs, materials, or
                  measurements
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 ${
                        message.role === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      {/* Display images if present */}
                      {message.experimental_attachments &&
                        message.experimental_attachments.length > 0 && (
                          <div className="mb-2 space-y-2">
                            {message.experimental_attachments.map(
                              (attachment, index) => (
                                <div
                                  key={index}
                                  className="overflow-hidden rounded"
                                >
                                  <img
                                    src={attachment.url || '/placeholder.svg'}
                                    alt={attachment.name || 'Uploaded image'}
                                    className="h-auto max-w-full rounded"
                                  />
                                </div>
                              )
                            )}
                          </div>
                        )}
                      {message.content}
                    </div>
                  </div>
                ))}
                {status === 'submitted' && (
                  <div className="flex justify-start">
                    <div className="rounded-lg bg-gray-100 px-3 py-2 text-gray-900">
                      <div className="flex items-center space-x-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                          style={{ animationDelay: '0.1s' }}
                        ></div>
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                          style={{ animationDelay: '0.2s' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input Area - Fixed at bottom */}
          <div className="flex-shrink-0 border-t p-4">
            {/* Image Previews */}
            {selectedImages.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image.url || '/placeholder.svg'}
                      alt={`Preview ${index + 1}`}
                      className="h-16 w-16 rounded-lg border object-cover"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white hover:bg-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <form onSubmit={handleFormSubmit}>
              <div className="relative">
                <Input
                  placeholder="Ask AI to optimize CAD, materials, or measurement..."
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  className="py-6 pr-24"
                />
                <div className="absolute top-1/2 right-2 flex -translate-y-1/2 transform items-center space-x-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={handleCameraClick}
                  >
                    <Paperclip className="h-5 w-5 text-gray-500" />
                  </Button>
                  <Button
                    type="submit"
                    disabled={!input.trim() && selectedImages.length === 0}
                    size="icon"
                    className="h-8 w-8 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
                  >
                    <ArrowUp className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
            </form>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => handleImageSelect(e.target.files)}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
