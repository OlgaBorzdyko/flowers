import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

import { useProductsLoader } from './cart/cart-components/useProductsLoader'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRoutes from './routes'
import theme from './theme'

const App = () => {
  useProductsLoader()
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
