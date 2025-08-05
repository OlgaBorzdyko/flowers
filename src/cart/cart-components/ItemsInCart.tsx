import { Box, Card, Typography } from '@mui/material'

import { useCart } from '../useCart'
import QuantityChanging from './QuantityChanging'

const ItemsInCart = () => {
  const { items } = useCart()
  return (
    <Box display="flex" flexDirection="column">
      {items.map((item, index) => (
        <Box key={index}>
          <Card
            sx={{
              backgroundColor: 'background.default',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              width: '100%',
              gap: 2,
              padding: 2
            }}
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
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  )
}

export default ItemsInCart
