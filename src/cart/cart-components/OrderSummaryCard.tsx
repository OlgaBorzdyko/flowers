import { Box, Button, Card, Stack, Typography } from '@mui/material'

import { useCart } from '../useCart'
import { getNoun } from './getNoun'

const OrderSummaryCard = () => {
  const { items } = useCart()
  const quantity = items.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  )
  const totalPrice = items.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  )
  const word = getNoun(quantity, 'товар', 'товара', 'товаров')
  return (
    <Box>
      <Card sx={{ backgroundColor: 'background.default', p: 5 }}>
        <Stack spacing={6}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h1">Ваш заказ</Typography>
            <Typography variant="h1">
              {quantity} {word}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h1">Товары на сумму</Typography>
            <Typography variant="h1">{totalPrice} ₽</Typography>
          </Stack>

          <Stack
            direction="row"
            fontWeight={600}
            justifyContent="space-between"
          >
            <Typography variant="h2">Всего к оплате</Typography>
            <Typography variant="h2">{totalPrice} ₽</Typography>
          </Stack>
          <Button color="primary" variant="contained">
            Перейти к оформлению
          </Button>
        </Stack>
      </Card>
    </Box>
  )
}

export default OrderSummaryCard
