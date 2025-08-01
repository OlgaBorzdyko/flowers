import { Box, Button, Table, Typography } from '@mui/material'

import { useCart } from './useCart'

const CartPage = () => {
  const { items, addItem, decrementItem } = useCart()
    console.log('items', items)
  return (
    <Box>
      <Typography>{items.length > 0 ? 'Корзина' : 'Корзина пуста'}</Typography>
      <Box>
        {items.map((item, index) => (
          <Table key={index}>
            <Typography>{item.name}</Typography>
            <Box>
              <Button
                onClick={() => {
                  decrementItem(item)
                }}
              >
                -
              </Button>
              {item.quantity}
              <Button
                onClick={() => {
                  addItem(item)
                }}
              >
                +
              </Button>
            </Box>
          </Table>
        ))}
      </Box>
    </Box>
  )
}
export default CartPage
