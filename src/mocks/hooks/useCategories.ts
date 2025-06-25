import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await axios.get('/categories')
      if (response.status !== 200) throw new Error('Failed to get categories')
      return response.data
    }
  })
}
