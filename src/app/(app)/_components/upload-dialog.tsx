/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { ArrowRight, FileIcon } from 'lucide-react'
import { useState } from 'react'
import { useUploadDialogStore } from '~/hooks/use-upload-dialog-store'
import BlurImage from '~/components/miscellaneous/blur-image'
import { cn } from '~/lib/utils'

export function UploadDialog() {
  const {
    isOpen,
    fileState,
    openDialog,
    closeDialog,
    setTitle,
    setFile,
    setProgress,
    removeFile,
    reset,
  } = useUploadDialogStore()
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
      simulateUpload()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      simulateUpload()
    }
  }

  const handleOpenChange = (open: boolean) => {
    if (open) {
      openDialog()
    } else {
      closeDialog()
    }
  }

  const handleSubmit = () => {
    // Handle the file upload logic here
    console.log('Uploading file:', fileState)

    // Close the dialog and reset the form
    closeDialog()
    reset()
  }

  // Simulate file upload progress
  const simulateUpload = () => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 5
      setProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
      }
    }, 200)
  }

  // Get file icon based on file type
  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase()

    if (extension === 'pdf') {
      return <FileIcon className="h-5 w-5 text-red-500" />
    } else if (
      ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension || '')
    ) {
      return <FileIcon className="h-5 w-5 text-blue-500" />
    } else if (['dwg', 'dxf'].includes(extension || '')) {
      return <FileIcon className="h-5 w-5 text-green-500" />
    }

    return <FileIcon className="h-5 w-5 text-gray-500" />
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="rounded-xl sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Upload file to get started
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-base font-medium">
              Enter title<span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              placeholder="Enter a title for your CAD drawing..."
              value={fileState.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="file" className="text-base font-medium">
              Upload CAD drawing<span className="text-red-500">*</span>
            </Label>
            <div
              className={cn(
                'rounded-md border-2 border-dashed p-8 text-center',
                isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center gap-2">
                <label
                  htmlFor="file-upload"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-blue-800 px-6 py-2 text-blue-500 hover:bg-blue-50"
                  style={{
                    gap: 'var(--Spacing-Gap-XS, 8px)',
                    borderRadius: 'var(--Radius-4, 8px)',
                    border: '1.5px solid var(--Colors-Primary-800, #1C99FF)',
                    padding: '8px 24px',
                  }}
                >
                  <BlurImage
                    src="/cloud-upload.png"
                    alt=""
                    height={20}
                    width={20}
                  />
                  Upload
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".dwg,.dxf,.pdf,image/png,image/jpeg,image/jpg,image/webp,image/svg+xml"
                    onChange={handleFileChange}
                  />
                </label>

                <p className="text-base font-medium text-gray-700">
                  Choose image or drag & drop here
                </p>
                <p className="text-sm text-gray-500">
                  DWG, DXF, or PDF. Max 20MB
                </p>

                {fileState.uploadFile && (
                  <p className="mt-2 text-sm text-blue-600">
                    Selected: {fileState.title}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#8ECCFF] bg-[#1C99FF] px-6 py-3 text-white hover:bg-blue-600 disabled:opacity-50"
            disabled={!fileState.title || !fileState.uploadFile}
            onClick={handleSubmit}
          >
            Proceed <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
