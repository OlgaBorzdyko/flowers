import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import QuantityChanging from '../cart/cart-components/QuantityChanging'
import AddToCartWithSnackBar from '../cart/snackbar/AddToCartWithSnackBar'
import { useCart } from '../cart/useCart'
import SearchField from '../components/SearchField'
import { useCategories } from '../mocks/hooks/useCategories'
import { useProducts } from '../mocks/hooks/useProducts'
import { Category, Product } from '../types/ApiDataTypes'

const MainPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1)
  const [count, setCount] = useState(8)
  const { data: categories, isLoading } = useCategories()
  const { data: products } = useProducts()
  const { addItem, items, setAllProducts } = useCart()

  useEffect(() => {
    if (products?.products) {
      setAllProducts(products.products)
    }
  }, [products, setAllProducts])
  if (isLoading || !products || !products.products) {
    return <div>Загрузка...</div>
  }
  const filteredProducts = products?.products.filter(
    (product) => product.categoryId === selectedCategoryId
  )

  const currentProducts = filteredProducts.slice(0, count)

  return (
    <Box m={10}>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        padding={10}
      >
        <SearchField />
        <IconButton aria-label="Cart" component={Link} to="/cart">
          <ShoppingCartIcon />
        </IconButton>
      </Box>
      <Grid
        alignItems="center"
        border="1px solid black"
        container
        gap={6}
        justifyContent="center"
        spacing={2}
      >
        <Grid container justifyContent="center" spacing={2}>
          {categories.map((category: Category) => (
            <Grid item key={category.id} md={2} xs={6}>
              <Box
                border="1px solid #ccc"
                onClick={() => setSelectedCategoryId(category.id)}
                padding={2}
              >
                {category.categoryName}
                <Box>
                  <img
                    alt={category.categoryName}
                    src={category.img}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid>
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
                    alignItems="center"
                    border="1px solid #ccc"
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    height="auto"
                    padding={2}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        overflow: 'hidden',
                        '&:hover img': {
                          filter: 'blur(5px)'
                        },
                        '&:hover .overlayButton': {
                          opacity: 1
                        }
                      }}
                    >
                      <Box
                        alt={product.productName}
                        component="img"
                        src={product.img}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                          transition: 'filter 0.5s ease-in-out'
                        }}
                      />

                      <Box
                        className="overlayButton"
                        sx={{
                          width: '50%',
                          height: '100%',
                          position: 'absolute',
                          top: '80%',
                          left: '25%',
                          zIndex: 2,
                          opacity: 0,
                          transition: 'opacity 0.3s ease-in-out'
                        }}
                      >
                        <QuantityChanging
                          item={product}
                          itemQuantity={quantityInCart}
                        />
                      </Box>
                    </Box>
                    <Typography variant="h1">{product.productName}</Typography>
                    <Typography variant="h2">{product.price} ₽</Typography>
                    <AddToCartWithSnackBar
                      onClick={() => addItem({ ...product, quantity: 1 })}
                      productId={product.id}
                    />
                    <Box
                      className="overlayButton"
                      sx={{ opacity: 0, zIndex: 2 }}
                    >
                      <QuantityChanging
                        item={product}
                        itemQuantity={quantityInCart}
                      />
                    </Box>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        {count < filteredProducts.length && (
          <Button onClick={() => setCount((prev) => prev + 8)}>
            Показать еще
          </Button>
        )}
      </Grid>
    </Box>
  )
}
export default MainPage
