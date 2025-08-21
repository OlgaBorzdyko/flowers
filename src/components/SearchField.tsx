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
    inputValue.length >= 3
      ? allProducts.filter((product) =>
          product.productName.toLowerCase().includes(inputValue.toLowerCase())
        )
      : []
  return (
    <Box sx={{ flex: 1 }}>
      <TextField fullWidth label="Поиск" onChange={onHandleChange} />

      {inputValue.length >= 3 && filtered.length === 0 && (
        <Typography>Совпадения не найдены</Typography>
      )}

      <Box sx={{ maxHeight: 300, overflowY: 'auto' }}>
        {filtered.map((product) => (
          <List key={product.id}>{product.productName}</List>
        ))}
      </Box>
    </Box>
  )
}
export default SearchField
