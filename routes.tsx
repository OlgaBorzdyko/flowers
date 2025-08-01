import { Route, Routes } from 'react-router-dom'

import CartPage from './src/cart/CartPage'
import Main from './src/Main'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Main />} path="/" />
      <Route element={<CartPage />} path="/cart" />
    </Routes>
  )
}

export default AppRoutes
