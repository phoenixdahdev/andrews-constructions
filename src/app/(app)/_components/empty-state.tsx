'use client'

import React from 'react'
import { Button } from '~/components/ui/button'
import BlurImage from '~/components/miscellaneous/blur-image'
import { useUploadDialogStore } from '~/hooks/use-upload-dialog-store'

export default function EmptyState() {
  const { openDialog } = useUploadDialogStore()

  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center text-center">
        <div className="relative mx-auto mb-8">
          <BlurImage
            src="/surprise.png"
            alt="Empty box with confetti"
            className="h-full w-full object-contain"
            width={444}
            height={350}
          />
        </div>
        <h1 className="mb-3 text-3xl font-bold text-gray-800">
          Oops! There&apos;s nothing here yet.
        </h1>
        <p className="mx-auto mb-8 max-w-sm text-gray-500">
          No data is available yet. Please upload your first CAD drawing to
          showcase the AI-extracted measurements and architectural features,
          enhancing your experience.
        </p>
        <label htmlFor="file-upload">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 rounded-md border-2 border-[#1C99FF] px-6 py-4 text-[#1C99FF] hover:bg-blue-50"
            onClick={() => openDialog()}
          >
            <BlurImage src="/cloud-upload.png" alt="" height={20} width={20} />
            Upload File to Get Started
          </Button>
        </label>
      </div>
    </div>
  )
}
