import { Box, Grid } from '@mui/material'

import { useCart } from './useCart'

const Offering = () => {
  const { allProducts, items } = useCart()
  const offeringProducts = allProducts.filter(
    (product) => !items.find((item) => item.id === product.id)
  )
  return (
    <Grid container justifyContent="space-between" spacing={5} width="100%">
      {offeringProducts.map((product) => (
        <Grid item key={product.id} md={3} xs={6}>
          <Box
            alignItems="center"
            border="1px solid #ccc"
            display="flex"
            flexDirection="column"
            gap={2}
            height="auto"
            padding={2}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                '&:hover img': {
                  filter: 'blur(5px)'
                },
                '&:hover .overlayButton': {
                  opacity: 1
                }
              }}
            >
              <Box
                alt={product.productName}
                component="img"
                src={product.img}
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  transition: 'filter 0.5s ease-in-out'
                }}
              />
              <Box
                className="overlayButton"
                sx={{
                  width: '50%',
                  height: '100%',
                  position: 'absolute',
                  top: '80%',
                  left: '25%',
                  zIndex: 2,
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              ></Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default Offering
