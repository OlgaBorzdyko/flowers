import { Box, Table, Typography } from '@mui/material'

import { useCart } from './useCart'

const CartPage = () => {
  const { items } = useCart()
  return (
    <Box>
      <Typography>Корзина</Typography>
      <Box>
        {items.map((item, index) => (
          <Table key={index}>
            <Typography>{item.name}</Typography>
          </Table>
        ))}
      </Box>
    </Box>
  )
}
export default CartPage
