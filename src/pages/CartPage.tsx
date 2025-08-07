import { Box, Button, Grid, Typography } from '@mui/material'

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
      <Typography>
        {items.length > 0
          ? 'В корзине' + `${quantity} ${word}`
          : 'В корзине пусто\n' +
            '\n' +
            'Перейдите в каталог, чтобы выбрать товар и оформить заказ'}
      </Typography>
      <Typography>
        <Button onClick={() => clearCart(items)}>Очистить корзину</Button>
      </Typography>
      <Box
        alignItems="center"
        justifyContent="space-between"
        p={10}
        sx={{ backgroundColor: 'background.paper' }}
      >
        <Grid container justifyContent="space-between" spacing={5} width="auto">
          {/* Items in the cart */}
          <Grid item md={7} xs={12}>
            <CartItemsList />
          </Grid>
          {/* Placing an order */}
          <Grid item md={5} xs={12}>
            <OrderSummaryCard />
          </Grid>
        </Grid>
        {/* Offering section */}
        <Offering />
      </Box>
    </Box>
  )
}
export default CartPage
