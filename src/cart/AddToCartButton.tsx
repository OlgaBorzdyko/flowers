import { Box, Button, Typography } from '@mui/material'

const AddToCartButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box>
      <Button onClick={onClick}>
        <Typography>Добавить в корзину</Typography>
      </Button>
    </Box>
  )
}

export default AddToCartButton
