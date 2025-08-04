import { Box, Button } from '@mui/material'

import { useCart } from './useCart'

const QuantityChanging = ({
  item,
  itemQuantity
}: {
  item
  itemQuantity: number
}) => {
  const { decrementItem, addItem } = useCart()
  return (
    <Box>
      <Button
        onClick={() => {
          decrementItem(item)
        }}
      >
        -
      </Button>
      {itemQuantity}
      <Button
        onClick={() => {
          addItem(item)
        }}
      >
        +
      </Button>
    </Box>
  )
}

export default QuantityChanging
