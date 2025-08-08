import { Box, List, TextField, Typography } from '@mui/material'
import { useState } from 'react'

import { useCart } from '../cart/useCart'

const SearchField = () => {
  const [inputValue, setInputValue] = useState('')
  const { allProducts } = useCart()
  const onHandleChange = (e) => {
    setInputValue(e.target.value)
  }
  const filtered =
    inputValue.length >= 1
      ? allProducts.filter((product) =>
          product.productName.toLowerCase().includes(inputValue.toLowerCase())
        )
      : []
  return (
    <Box>
      <TextField onChange={onHandleChange} />

      {inputValue.length >= 1 && filtered.length === 0 && (
        <Typography>Совпадения не найдены</Typography>
      )}

      {filtered.map((product) => (
        <List key={product.id}>{product.productName}</List>
      ))}
    </Box>
  )
}
export default SearchField
