import React from 'react'
import HomePage from './_components/home-page'
import { getQueryClient } from '~/lib/get-query-client'
import { get_cards } from '~/actions/cad'

const Home = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['cad_drawings'],
    queryFn: get_cards,
  })

  return <HomePage />
}

export default Home
