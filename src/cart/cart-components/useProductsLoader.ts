import { useCart } from 'cart/useCart'
import { useEffect } from 'react'

import { useProducts } from '../../mocks/hooks/useProducts'

export const useProductsLoader = () => {
  const { cookiesLoading, loadAllProductsFromCache, setAllProducts } = useCart()
  const { data: products } = useProducts()

  useEffect(() => {
    cookiesLoading()
    loadAllProductsFromCache()
  }, [cookiesLoading, loadAllProductsFromCache])
  useEffect(() => {
    if (products && Array.isArray(products)) {
      setAllProducts(products)
    }
  }, [products, setAllProducts])

  return null
}
