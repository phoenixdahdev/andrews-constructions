import React from 'react'
import CadPreview from '../../_components/cad-preview'
import { getQueryClient } from '~/lib/get-query-client'
import { get_card } from '~/actions/cad'

const CardPage = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['cad_drawing_by_id'],
    queryFn: get_card,
  })
  return (
    <div className="flex h-full w-full items-center justify-between gap-4">
      <CadPreview />
      <section className="h-full w-full rounded-2xl bg-white p-6 shadow-2xl dark:bg-black/70">
        image
      </section>
    </div>
  )
}

export default CardPage
