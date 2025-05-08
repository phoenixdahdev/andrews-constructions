/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { cn } from '~/lib/utils'
import { Skeleton } from 'ui/skeleton'
import { MdOutlineBrokenImage } from 'react-icons/md'

function ErrorImage() {
  return (
    <div className="bg-primary/10 absolute inset-0 h-full w-full items-center justify-center">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <MdOutlineBrokenImage className="h-6" />
      </div>
    </div>
  )
}

export function ImageViewer({ url }: { url: string }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  if (!url) return <ErrorImage />

  return (
    <div className="bg-primary/10 relative flex h-full w-full items-center justify-center">
      {isLoading && !isError && (
        <Skeleton className="absolute inset-0 h-full w-full" />
      )}

      {isError && <ErrorImage />}

      <img
        src={url}
        alt="Viewer content"
        className={cn(
          'max-h-full max-w-full object-contain',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsError(true)}
      />
    </div>
  )
}
