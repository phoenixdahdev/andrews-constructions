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


export const useCadDrawingDetails = () => {
    return useQuery({
        queryKey: ['cad_drawing_details'],
        queryFn: async () => {
            return await get_cad_details()
        }
    })
}