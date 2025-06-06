import React, { Suspense } from 'react'
import { get_cards } from '~/actions/cad'
import HomePage from './_components/home-page'
import { getQueryClient } from '~/lib/get-query-client'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

export const dynamic = 'force-dynamic'
const Home = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['cad_drawings'],
    queryFn: get_cards,
  })

  return (
    <Suspense>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HomePage />
      </HydrationBoundary>
    </Suspense>
  )
}

export default Home
