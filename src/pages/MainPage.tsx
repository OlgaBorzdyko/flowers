import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

import QuantityChanging from '../cart/QuantityChanging'
import AddToCartWithSnackBar from '../cart/snackbar/AddToCartWithSnackBar'
import { useCart } from '../cart/useCart'
import PaginationComponent from '../components/PaginationComponent'
import { useCategories } from '../mocks/hooks/useCategories'
import { useProducts } from '../mocks/hooks/useProducts'
import { Category, Product } from '../types/ApiDataTypes'

const MainPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1)
  const [page, setPage] = useState<number>(1)
  const { data: categories, isLoading } = useCategories()
  const { data: products, refetch } = useProducts(selectedCategoryId)
  const { addItem, items } = useCart()
  useEffect(() => {
    if (selectedCategoryId !== null) {
      setPage(1)
      refetch()
    }
  }, [selectedCategoryId, refetch])
  if (isLoading || !products || !products.products) {
    return <div>Загрузка...</div>
  }

  const start = (page - 1) * products?.limit
  const end = start + products?.limit
  const currentProducts = products.products.slice(start, end)

  return (
    <Box>
      <Box>
        {categories.map((category: Category) => (
          <div key={category.id}>
            <Box
              key={category.id}
              onClick={() => setSelectedCategoryId(category.id)}
            >
              {category.categoryName}
            </Box>
          </div>
        ))}
      </Box>
      <Box>
        {currentProducts.map((product: Product) => {
          const quantityInCart =
            items.find((i) => i.id === product.id)?.quantity || 0
          return (
            <Box key={product.id}>
              {product.productName}
              <AddToCartWithSnackBar
                onClick={() =>
                  addItem({ id: product.id, name: product.productName })
                }
                productId={product.id}
              />
              <QuantityChanging item={product} itemQuantity={quantityInCart} />
            </Box>
          )
        })}
      </Box>
      {products?.totalCount && (
        <PaginationComponent
          count={products?.totalCount}
          limit={products?.limit}
          onChange={(newPage: number) => setPage(newPage)}
          page={page}
        />
      )}
    </Box>
  )
}
export default MainPage
