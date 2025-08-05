import { Box, Grid, Typography } from '@mui/material'

import { getNoun } from '../cart/cart-components/getNoun'
import ItemsInCart from '../cart/cart-components/ItemsInCart'
import Offering from '../cart/cart-components/Offering'
import PlacingOrder from '../cart/cart-components/PlacingOrder'
import { useCart } from '../cart/useCart'

const CartPage = () => {
  const { items } = useCart()
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
      <Box
        alignItems="center"
        gap={5}
        height="100vh"
        px={2}
        sx={{ backgroundColor: 'background.paper' }}
      >
        <Grid container justifyContent="space-between" spacing={5} width="100%">
          <Grid item md={7} xs={12}>
            <ItemsInCart />
          </Grid>
          <Grid item md={5} xs={12}>
            <PlacingOrder />
          </Grid>
        </Grid>
        <Offering />
      </Box>
    </Box>
  )
}
export default CartPage
