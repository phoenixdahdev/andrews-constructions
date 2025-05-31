'use client'

import type React from 'react'
import { Input } from 'ui/input'
import { Button } from 'ui/button'
import { Markdown } from './markdown'
import { useChat } from '@ai-sdk/react'
import { cn, sanitizeText } from '~/lib/utils'
import { useState, useRef, useEffect } from 'react'
import { uploadS3File } from '~/actions/file-upload'
import { Paperclip, ArrowUp, X, Loader2 } from 'lucide-react'
import BlurImage from '~/components/miscellaneous/blur-image'
import { useAIDrawerStore } from '~/hooks/use-ai-drawer-store'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from 'ui/sheet'

interface ImagePreview {
  file: File
  url: string
  base64: string
}

export interface UploadedFile {
  name: string
  url: string
  type: string
}

export function AIOptimizer() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isUploading, setIsUploading] = useState(false)
  const { isOpen, openDrawer, closeDrawer } = useAIDrawerStore()
  const [selectedImages, setSelectedImages] = useState<ImagePreview[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const {
    input,
    handleInputChange,
    setInput,
    status,
    append,
    messages,
    setMessages,
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleFormSubmit()
    }
  }

  const handleOpenChange = async (open: boolean) => {
    if (open) {
      openDrawer()
    } else {
      setMessages([])
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

  const handleFormSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!input.trim() && selectedImages.length === 0) return
    setIsUploading(true)
    const uploadedData: UploadedFile[] = []
    try {
      for (const [index, img] of selectedImages.entries()) {
        const formData = new FormData()
        const timestamp = Date.now()
        const file = img.file
        formData.append('folder_name', 'uploads')
        formData.append('file', file)
        formData.append('file_type', file.type)
        formData.append('name', `file_${file.name}`)
        formData.append('file_id', `file_${timestamp}_${index}`)

        const result = await uploadS3File(formData)
        if (result?.status === 'success') {
          uploadedData.push(result.response as UploadedFile)
        }
      }
      const messageContent = input.trim()
      const attachments =
        uploadedData.length > 0
          ? uploadedData.map((img) => ({
              name: img.name,
              contentType: img.type,
              url: img.url,
            }))
          : undefined

      setSelectedImages([])
      await append({
        role: 'user',
        content: messageContent || 'Please analyze this image',
        experimental_attachments: attachments,
      })
      setInput('')
    } catch (error) {
      console.error('Upload failed:', error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent className="right-2 my-auto h-[95dvh] w-full rounded-2xl border-l p-0 sm:max-w-md md:max-w-lg">
        <div className="flex h-full flex-col">
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
                    className={cn(
                      'flex',
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    <div
                      className={cn(
                        'max-w-[80%] rounded-lg px-3 py-2',
                        message.role === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      )}
                    >
                      {/* {message.experimental_attachments &&
                        message.experimental_attachments.length > 0 && (
                          <div className="mb-2 space-y-2">
                            {message.experimental_attachments.map(
                              (attachment, index) => (
                                <div
                                  key={index}
                                  className="overflow-hidden rounded"
                                >
                                  <BlurImage
                                    src={attachment.url || '/placeholder.svg'}
                                    alt={attachment.name || 'Uploaded image'}
                                    width={300}
                                    height={200}
                                    className="h-auto max-w-full rounded object-cover"
                                  />
                                </div>
                              )
                            )}
                          </div>
                        )} */}

                      {message.experimental_attachments &&
                        message.experimental_attachments.length > 0 && (
                          <div className="mb-2 space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                              {message.experimental_attachments
                                ?.slice(0, 3)
                                .map((attachment, index) => (
                                  <div
                                    key={index}
                                    className={cn(
                                      'relative overflow-hidden rounded',
                                      index === 2 &&
                                        message.experimental_attachments &&
                                        message.experimental_attachments
                                          .length > 4
                                        ? 'col-span-1'
                                        : message.experimental_attachments &&
                                            message.experimental_attachments
                                              .length === 1
                                          ? 'col-span-2'
                                          : 'col-span-1'
                                    )}
                                  >
                                    <BlurImage
                                      src={attachment.url || '/placeholder.svg'}
                                      alt={attachment.name || 'Uploaded image'}
                                      width={300}
                                      height={200}
                                      className="h-auto max-w-full rounded object-cover"
                                    />

                                    {index === 2 &&
                                      message.experimental_attachments &&
                                      message.experimental_attachments.length >
                                        4 && (
                                        <div className="bg-opacity-50 absolute inset-0 flex items-center justify-center rounded bg-black">
                                          <span className="text-lg font-semibold text-white">
                                            +
                                            {message.experimental_attachments
                                              .length - 3}
                                          </span>
                                        </div>
                                      )}
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}
                      <Markdown>{sanitizeText(message.content)}</Markdown>
                    </div>
                  </div>
                ))}
                {status === 'submitted' && (
                  <div className="flex justify-start">
                    <div className="rounded-lg bg-gray-100 px-3 py-2 text-gray-900">
                      <div className="flex items-center space-x-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                          style={{ animationDelay: '0.1s' }}
                        />
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                          style={{ animationDelay: '0.2s' }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          <div className="flex-shrink-0 border-t p-4">
            {selectedImages.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative">
                    <BlurImage
                      src={image.url || '/placeholder.svg'}
                      alt={`Preview ${index + 1}`}
                      width={64}
                      height={64}
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
                  className="py-6 pr-24"
                  disabled={isUploading}
                  onKeyDown={handleKeyDown}
                  onChange={handleInputChange}
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
                    {isUploading ? (
                      <Loader2 className="ml-2 h-4 w-4 animate-spin text-white" />
                    ) : (
                      <ArrowUp className="h-4 w-4 text-white" />
                    )}
                  </Button>
                </div>
              </div>
            </form>

            <input
              multiple
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              disabled={isUploading}
              onChange={(e) => handleImageSelect(e.target.files)}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
