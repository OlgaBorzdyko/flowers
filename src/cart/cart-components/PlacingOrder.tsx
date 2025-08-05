import { Box, Button, Card, Typography } from '@mui/material'

const PlacingOrder = () => {
  return (
    <Box>
      <Card sx={{ backgroundColor: 'background.default' }}>
        <Typography>Перейти к оформлению</Typography>
        <Typography>Ваш заказ</Typography>
        <Typography>Товары на сумму</Typography>
        <Typography>Всего к оплате</Typography>
        <Button>Перейти к оформлению</Button>
      </Card>
    </Box>
  )
}

export default PlacingOrder
