import { useCartStore } from './cartStore'

export const useCart = () => {
  const addItem = useCartStore((state) => state.addItem)
  const items = useCartStore((state) => state.items)
  const decrementItem = useCartStore((state) => state.decrementItem)
  const cookiesLoading = useCartStore((state) => state.cookiesLoading)
  return {
    addItem,
    items,
    decrementItem,
    cookiesLoading
  }
}
