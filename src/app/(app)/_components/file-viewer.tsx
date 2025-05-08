'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { Skeleton } from 'ui/skeleton'

type Props = {
  mimeType: string | null
  url: string
  maxWidth?: number
}

const DynamicPdfViewer = dynamic(
  () => import('./pdf-viewer').then((mod) => mod.PdfViewer),
  { loading: () => <Skeleton className="h-full w-full" /> }
)

const DynamicImageViewer = dynamic(
  () => import('./image-viewer').then((mod) => mod.ImageViewer),
  { loading: () => <Skeleton className="h-full w-full" /> }
)

export function FileViewer({ mimeType, url, maxWidth }: Props) {
  if (
    mimeType === 'application/pdf' ||
    mimeType === 'application/octet-stream'
  ) {
    return <DynamicPdfViewer url={url} key={url} maxWidth={maxWidth} />
  }

  if (mimeType?.startsWith('image/')) {
    return <DynamicImageViewer url={url} />
  }
  return null
}
