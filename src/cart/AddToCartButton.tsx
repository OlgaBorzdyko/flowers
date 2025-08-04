import { Box, Button, Typography } from '@mui/material'

const AddToCartButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box>
      <Button
        color="primary"
        onClick={onClick}
        sx={{ width: '100%', height: 'auto', minHeight: '50px' }}
        variant="contained"
      >
        <Typography>Добавить в корзину</Typography>
      </Button>
    </Box>
  )
}

export default AddToCartButton
