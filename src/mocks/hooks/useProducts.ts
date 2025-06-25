import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useProducts = (categoryId?: number) => {
  return useQuery({
    queryKey: ['products', categoryId],
    queryFn: async () => {
      if (categoryId == null) throw new Error('No categoryId provided')
      const response = await axios.get(`/categories/${categoryId}/products`)
      if (response.status !== 200) throw new Error('Failed to get products')
      console.log('categoryId query', categoryId)
      return response.data
    },
    enabled: false
  })
}
