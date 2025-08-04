import { Box, Button, Typography } from '@mui/material'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import { useCart } from 'cart/useCart'
import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import AddToCartButton from '../AddToCartButton'

const AddToCartWithSnackBar = ({
  onClick,
  productId
}: {
  onClick: () => void
  productId: number
}) => {
  const [open, setOpen] = useState(false)
  const { items } = useCart()
  const name = items.find((item) => item.id === productId)?.name

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
    <Box width="100%">
      <AddToCartButton onClick={handleClick} />
      <Snackbar autoHideDuration={5000} onClose={handleClose} open={open}>
        <Box>
          <Typography>Товар добавлен в корзину</Typography>
          <Typography>{name}</Typography>
          <Button component={Link} to="/cart">
            Перейти в корзину
          </Button>
        </Box>
      </Snackbar>
    </Box>
  )
}

export default AddToCartWithSnackBar
