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
      <Card sx={{ backgroundColor: 'background.default' }}>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Ваш заказ</Typography>
            <Typography>
              {quantity} {word}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography>Товары на сумму</Typography>
            <Typography>{totalPrice} ₽</Typography>
          </Stack>

          <Stack
            direction="row"
            fontWeight={600}
            justifyContent="space-between"
          >
            <Typography>Всего к оплате</Typography>
            <Typography>{totalPrice} ₽</Typography>
          </Stack>
        </Stack>
        <Button>Перейти к оформлению</Button>
      </Card>
    </Box>
  )
}

export default OrderSummaryCard
