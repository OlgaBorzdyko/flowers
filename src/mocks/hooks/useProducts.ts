import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get(`/categories/products`)
      if (response.status !== 200) throw new Error('Failed to get products')
      return response.data
    }
  })
}
