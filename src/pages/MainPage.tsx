import {Box, Grid, Typography} from '@mui/material'
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
  console.log(products)
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
    <Box m={10}>
      <Grid
        alignItems="center"
        border="1px solid black"
        container
        justifyContent="space-between"
        spacing={2}
      >
        {categories.map((category: Category) => (
          <Grid item key={category.id} md={3} xs={12}>
            <Box
              border="1px solid #ccc"
              onClick={() => setSelectedCategoryId(category.id)}
              padding={2}
            >
              {category.categoryName}
            </Box>
          </Grid>
        ))}
        <Box>
          <Grid
            alignItems="center"
            border="1px solid black"
            container
            spacing={2}
          >
            {currentProducts.map((product: Product) => {
              const quantityInCart =
                items.find((i) => i.id === product.id)?.quantity || 0
              return (
                <Grid item key={product.id} md={3} xs={6}>
                  <Box
                    border="1px solid #ccc"
                    display="flex"
                    flexDirection="column"
                    height="auto"
                    padding={2}
                  >
                    <img
                      alt={product.productName}
                      src={product.img}
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover'
                      }}
                    />
                    <Typography>{product.productName}</Typography>
                    <Typography>{product.price}</Typography>
                    <AddToCartWithSnackBar
                      onClick={() =>
                        addItem({ id: product.id, name: product.productName })
                      }
                      productId={product.id}
                    />
                    <QuantityChanging
                      item={product}
                      itemQuantity={quantityInCart}
                    />
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Box>
        {products?.totalCount && (
          <PaginationComponent
            count={products?.totalCount}
            limit={products?.limit}
            onChange={(newPage: number) => setPage(newPage)}
            page={page}
          />
        )}
      </Grid>
    </Box>
  )
}
export default MainPage
