import { useQuery } from '@tanstack/react-query'
import { get_cards } from '~/actions/cad'


export const useCadDrawings = () => {
    return useQuery({
        queryKey: ['cad_drawings'],
        queryFn: async () => {
            return await get_cards()
        },
    })
}