import { Box, Button, Typography } from '@mui/material'

const AddToCartButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box width="100%">
      <Button
        color="primary"
        fullWidth
        onClick={onClick}
        sx={{ height: 'auto', minHeight: '50px', width: '100%' }}
        variant="contained"
      >
        <Typography>Добавить в корзину</Typography>
      </Button>
    </Box>
  )
}

export default AddToCartButton
