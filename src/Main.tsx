import { useEffect, useState } from 'react'

import { useCategories } from './mocks/hooks/useCategories'
import { useProducts } from './mocks/hooks/useProducts'
import { Category } from './types/Category'

const Main = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1)
  const { data: categories, isLoading } = useCategories()
  const { data: products, refetch } = useProducts(selectedCategoryId)
  useEffect(() => {
    if (selectedCategoryId !== null) {
      refetch()
    }
  }, [selectedCategoryId, refetch])

  useEffect(() => {
    if (products) {
      console.log('Товары:', products)
    }
  }, [products])

  if (isLoading) return <div>Загрузка...</div>

  return (
    <div>
      {categories.map((category: Category) => (
        <div key={category.id}>
          <button
            key={category.id}
            onClick={() => setSelectedCategoryId(category.id)}
          >
            {category.categoryName}
          </button>
        </div>
      ))}
    </div>
  )
}
export default Main
