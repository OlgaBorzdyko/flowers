import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import * as React from 'react'

import AddToCartButton from '../AddToCartButton'

const AddToCartWithSnackBar = ({ onClick }: { onClick: () => void }) => {
  const [open, setOpen] = React.useState(false)

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
    <div>
      <AddToCartButton onClick={handleClick} />
      <Snackbar
        autoHideDuration={5000}
        message="Товар добавлен в корзину"
        onClose={handleClose}
        open={open}
      />
    </div>
  )
}

export default AddToCartWithSnackBar
