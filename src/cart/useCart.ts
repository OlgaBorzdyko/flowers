import { useCartStore } from './cartStore'

export const useCart = () => {
  const addItem = useCartStore((state) => ({
    items: state.addItem
  }))

  return {
    addItem
  }
}
