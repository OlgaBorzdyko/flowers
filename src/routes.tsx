import { Route, Routes } from 'react-router-dom'

import CartPage from './pages/CartPage'
import MainPage from './pages/MainPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<CartPage />} path="/cart" />
    </Routes>
  )
}

export default AppRoutes
