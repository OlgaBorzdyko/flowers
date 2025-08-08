import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import CartItemsList from '../cart/cart-components/CartItemsList'
import { getNoun } from '../cart/cart-components/getNoun'
import Offering from '../cart/cart-components/Offering'
import OrderSummaryCard from '../cart/cart-components/OrderSummaryCard'
import { useCart } from '../cart/useCart'

const CartPage = () => {
  const { items, clearCart } = useCart()
  const quantity = items.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  )
  const word = getNoun(quantity, 'товар', 'товара', 'товаров')
  return (
    <Box>
      <Box
        alignItems="center"
        justifyContent="space-between"
        p={10}
        sx={{ backgroundColor: 'background.paper', width: '100%' }}
      >
        {items.length > 0 ? (
          <Grid container justifyContent="space-between" spacing={5}>
            <Grid item md={12} xs={12}>
              <Box
                alignItems="center"
                display="flex"
                justifyContent="space-between"
              >
                <Typography variant="h4">
                  {`В корзине ${quantity} ${word}`}
                </Typography>
                <Button onClick={() => clearCart(items)}>
                  Очистить корзину
                </Button>
              </Box>
            </Grid>

            {/* Items in the cart */}
            <Grid item md={7} xs={12}>
              <CartItemsList />
            </Grid>

            {/* Placing an order */}
            <Grid item md={5} xs={12}>
              <OrderSummaryCard />
            </Grid>
          </Grid>
        ) : (
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            minHeight="300px"
            sx={{ gap: 4, mb: 5 }}
          >
            <Typography variant="h1">В корзине пусто</Typography>
            <Typography variant="h1">
              Перейдите в каталог, чтобы выбрать товар и оформить заказ
            </Typography>
            <Link to="/">
              <Button variant="contained">В каталог</Button>
            </Link>
          </Box>
        )}
        <Box mt={5}>
          <Card sx={{ backgroundColor: 'background.default', p: 5 }}>
            <Offering />
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
export default CartPage
