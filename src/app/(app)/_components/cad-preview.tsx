'use client'
import React from 'react'
import { useCadDrawingById } from '~/app/queries'
import { Skeleton } from '~/components/ui/skeleton'
import { FileViewer } from './file-viewer'

const CadPreview = () => {
  const { data, isPending } = useCadDrawingById()
  return (
    <section className="h-full w-full rounded-2xl bg-white p-6 shadow-2xl dark:bg-black/70">
      {isPending ? (
        <div className="flex h-full flex-col space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <div className="relative flex h-full rounded-lg">
            <Skeleton className="h-full w-full rounded-[8px]" />
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col space-y-4">
          <h3 className="text-xl font-medium">
            {data?.data?.name || 'CAD Drawing'}
          </h3>
          <div className="relative flex h-full rounded-lg">
            <FileViewer
              mimeType={data?.data?.file_type as string}
              url={`/api/proxy?url=${encodeURIComponent(data?.data?.file_path as string)}`}
              maxWidth={700}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default CadPreview
