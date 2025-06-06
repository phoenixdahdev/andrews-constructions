import React, { Suspense } from 'react'
import CadPreview from '../../_components/cad-preview'
import { getQueryClient } from '~/lib/get-query-client'
import Measurement from '../../_components/measurement'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

type Params = Promise<{ id: string }>

const CardPage = async ({ params }: { params: Params }) => {
  const { id } = await params
  const queryClient = getQueryClient()

  return (
    <Suspense>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="flex h-full w-full items-center justify-between gap-4">
          <CadPreview />
          <Measurement id={id} />
        </div>
      </HydrationBoundary>
    </Suspense>
  )
}

export default CardPage
