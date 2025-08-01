import { Box, Button, Table, Typography } from '@mui/material'

import { useCart } from './useCart'

const CartPage = () => {
  const { items, addItem, decrementItem } = useCart()
  return (
    <Box>
      <Typography>Корзина</Typography>
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
