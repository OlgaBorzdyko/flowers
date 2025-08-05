import { useCartStore } from './cartStore'

export const useCart = () => {
  const addItem = useCartStore((state) => state.addItem)
  const items = useCartStore((state) => state.items)
  const decrementItem = useCartStore((state) => state.decrementItem)
  const cookiesLoading = useCartStore((state) => state.cookiesLoading)
  const setAllProducts = useCartStore((state) => state.setAllProducts)
  const allProducts = useCartStore((state) => state.allProducts)
  return {
    addItem,
    items,
    decrementItem,
    cookiesLoading,
    setAllProducts,
    allProducts
  }
}
