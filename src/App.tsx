import { ThemeProvider } from '@mui/material'
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
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App
