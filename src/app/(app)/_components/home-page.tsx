'use client'

import React from 'react'
import EmptyState from './empty-state'
import { useCadDrawings } from '~/app/queries'
import LoadingScreen from './cad-loader'

const HomePage = () => {
  const { isPending, isLoading, data, isError } = useCadDrawings()

  return isLoading || isPending ? (
    <LoadingScreen />
  ) : !data?.success || !data?.data?.length || isError ? (
    <EmptyState />
  ) : (
    <div>{/* TODO: Render CAD data here */}</div>
  )
}

export default HomePage
