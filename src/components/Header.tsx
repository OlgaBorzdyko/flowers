import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      ml={10}
      mr={10}
      p={2}
    >
      <Box width="10%" />
      <Box>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
          <Typography variant="h3">Flourish</Typography>
        </Link>
      </Box>
      <Box>
        <Typography variant="h1">Tbilisi</Typography>
        <Typography variant="h1">+9955555555</Typography>
      </Box>
    </Box>
  )
}

export default Header
