import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Box>
        <Link to="/">Flowers</Link>
      </Box>
      <Box>
        <Typography>Tbilisi</Typography>
        <Typography>+9955555555</Typography>
      </Box>
    </>
  )
}

export default Header
