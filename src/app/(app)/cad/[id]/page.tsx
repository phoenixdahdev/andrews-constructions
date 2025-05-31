import React from 'react'
import { get_card } from '~/actions/cad'
import CadPreview from '../../_components/cad-preview'
import { getQueryClient } from '~/lib/get-query-client'
import Measurement from '../../_components/measurement'

const CardPage = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['cad_drawing_by_id'],
    queryFn: get_card,
  })
  return (
    <div className="flex h-full w-full items-center justify-between gap-4">
      <CadPreview />
      <Measurement />
    </div>
  )
}

export default CardPage
