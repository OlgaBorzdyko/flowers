import { Box, Button, Typography } from '@mui/material'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import { useCart } from 'cart/useCart'
import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import AddToCartButton from '../cart-components/AddToCartButton'

const AddToCartWithSnackBar = ({
  onClick,
  productId
}: {
  onClick: () => void
  productId: number
}) => {
  const [open, setOpen] = useState(false)
  const { items } = useCart()
  const item = items.find((item) => item.id === productId)

  const handleClick = () => {
    setOpen(true)
    onClick()
  }

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Box color="white" height="auto" width="auto">
      <AddToCartButton onClick={handleClick} />
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={5000}
        onClose={handleClose}
        open={open}
      >
        {item && (
          <Box
            alignItems="center"
            bgcolor="primary.main"
            borderRadius="15px"
            display="flex"
            flexDirection="column"
            gap={5}
            minWidth="400px"
            p={5}
          >
            <Typography variant="h2">Добавлено в корзину</Typography>
            <Box
              display="flex"
              flexDirection="row"
              gap={5}
              justifyContent="space-between"
              width="100%"
            >
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography variant="h1">{item.productName}</Typography>
                <Typography>{item.price}</Typography>
              </Box>
              <img
                alt={item.productName}
                src={item.img}
                style={{
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'cover',
                  maxWidth: 100,
                  maxHeight: 100,
                  borderRadius: 5
                }}
              />
            </Box>
            <Button color="inherit" component={Link} to="/cart">
              Перейти в корзину
            </Button>
          </Box>
        )}
      </Snackbar>
    </Box>
  )
}

export default AddToCartWithSnackBar
