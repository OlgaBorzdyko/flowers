import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useCart } from './cart/useCart'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRoutes from './routes'
import theme from './theme'

const App = () => {
  const { cookiesLoading } = useCart()

  useEffect(() => {
    cookiesLoading()
  }, [cookiesLoading])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Header />

          <Box component="main" flexGrow={1}>
            <AppRoutes />
          </Box>

          <Box component="footer">
            <Footer />
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App
