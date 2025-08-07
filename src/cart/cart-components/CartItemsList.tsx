import { Box, Button, Card, Stack, Typography } from '@mui/material'

import { useCart } from '../useCart'
import QuantityChanging from './QuantityChanging'

const CartItemsList = () => {
  const { items, removeItem } = useCart()
  return (
    <>
      {items.map((item, index) => (
        <Card
          key={index}
          sx={{
            backgroundColor: 'background.default',
            padding: 2
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            spacing={2}
          >
            <img
              alt={item.productName}
              src={item.img}
              style={{
                width: 'auto',
                height: 'auto',
                objectFit: 'cover',
                maxWidth: 200,
                maxHeight: 200
              }}
            />
            <Typography>{item.productName}</Typography>
            <Box>
              <QuantityChanging item={item} itemQuantity={item.quantity} />
              <Button
                onClick={() => {
                  removeItem(item)
                }}
              >
                X
              </Button>
            </Box>
          </Stack>
        </Card>
      ))}
    </>
  )
}

export default CartItemsList
