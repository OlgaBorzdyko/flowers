import { Box, Table, Typography } from '@mui/material'

import QuantityChanging from '../cart/QuantityChanging'
import { useCart } from '../cart/useCart'

const CartPage = () => {
  const { items } = useCart()
  console.log('items', items)
  return (
    <Box>
      <Typography>{items.length > 0 ? 'Корзина' : 'Корзина пуста'}</Typography>
      <Box>
        {items.map((item, index) => (
          <Table key={index}>
            <Typography>{item.name}</Typography>
            <Box>
              <QuantityChanging item={item} itemQuantity={item.quantity} />
            </Box>
          </Table>
        ))}
      </Box>
    </Box>
  )
}
export default CartPage
