import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

import AppRoutes from './routes'
import { useCart } from './src/cart/useCart'
import Footer from './src/Footer'
import Header from './src/Header'

const App = () => {
  const { cookiesLoading } = useCart()

  useEffect(() => {
    cookiesLoading()
  }, [cookiesLoading])
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <AppRoutes />
        <Footer />
      </Wrapper>
    </BrowserRouter>
  )
}
export default App

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`
