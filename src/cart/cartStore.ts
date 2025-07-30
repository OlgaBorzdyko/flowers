import { create } from 'zustand'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
  addItem: (item) => void
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => {
    set((state) => {
      const addedItem = state.items.find((i) => i.id === item.id)
      if (addedItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        }
      }
      return [...state.items, { ...item, quantity: 1 }]
    })
  }
}))
