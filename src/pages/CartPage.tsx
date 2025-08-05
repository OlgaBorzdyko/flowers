import { Box, Card, Grid, Typography } from '@mui/material'

import QuantityChanging from '../cart/QuantityChanging'
import { useCart } from '../cart/useCart'

const CartPage = () => {
  const { items } = useCart()
  console.log(items)
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
                      <QuantityChanging
                        item={item}
                        itemQuantity={item.quantity}
                      />
                    </Box>
                  </Card>
                </Box>
              ))}
            </Box>
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
