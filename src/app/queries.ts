import { useQuery } from '@tanstack/react-query'
import { get_cad_details, get_card, get_cards } from '~/actions/cad'

export const useCadDrawings = () => {
  return useQuery({
    queryKey: ['cad_drawings'],
    queryFn: async () => {
      return await get_cards()
    },
  })
}

export const useCadDrawingById = () => {
  return useQuery({
    queryKey: ['cad_drawing_by_id'],
    queryFn: async () => {
      return await get_card()
    },
  })
}

export const useCadDrawingDetails = (id?: string) => {
  return useQuery({
    queryKey: ['cad_drawing_details', id],
    queryFn: async () => {
      return await get_cad_details()
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: 0, // Data is immediately stale
    gcTime: 0, // Garbage collect immediately
  })
}
