import { Box, Button, Typography, useTheme } from '@mui/material'

import { useCart } from '../useCart'

const QuantityChanging = ({
  item,
  itemQuantity
}: {
  item
  itemQuantity: number
}) => {
  const theme = useTheme()
  const { decrementItem, addItem } = useCart()
  return (
    <Box
      bgcolor={theme.palette.primary.main}
      borderRadius={2}
      color={theme.palette.text.secondary}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Button
        onClick={() => {
          decrementItem(item)
        }}
        variant="quantity"
      >
        -
      </Button>
      <Typography variant="h1">{itemQuantity}</Typography>
      <Button
        onClick={() => {
          addItem(item)
        }}
        variant="quantity"
      >
        +
      </Button>
    </Box>
  )
}

export default QuantityChanging
