import { useCartStore } from './cartStore'

export const useCart = () => {
  const addItem = useCartStore((state) => state.addItem)
  const items = useCartStore((state) => state.items)
  const decrementItem = useCartStore((state) => state.decrementItem)
  const removeItem = useCartStore((state) => state.removeItem)
  return {
    addItem,
    items,
    removeItem,
    decrementItem
  }
}
