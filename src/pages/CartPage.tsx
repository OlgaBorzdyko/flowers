import { Box, Card, Grid, Typography } from '@mui/material'

import QuantityChanging from '../cart/QuantityChanging'
import { useCart } from '../cart/useCart'

const CartPage = () => {
  const { items } = useCart()
  return (
    <Box>
      <Typography>{items.length > 0 ? 'Корзина' : 'Корзина пуста'}</Typography>
      <Box
        alignItems="center"
        gap={5}
        px={2}
        sx={{ backgroundColor: 'background.paper' }}
      >
        <Grid container justifyContent="space-between" spacing={5} width="100%">
          <Grid item md={7} xs={12}>
            {items.map((item, index) => (
              <Box key={index}>
                <Card sx={{ backgroundColor: 'background.default' }}>
                  <img alt={item.name} src={item.img} />
                  <Typography>{item.name}</Typography>
                  <Box>
                    <QuantityChanging
                      item={item}
                      itemQuantity={item.quantity}
                    />
                  </Box>
                </Card>
              </Box>
            ))}
          </Grid>
          <Grid item md={5} xs={12}>
            <Card sx={{ backgroundColor: 'background.default' }}>
              <Typography>Перейти к оформлению</Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
export default CartPage
