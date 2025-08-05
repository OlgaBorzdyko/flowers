import Cookies from 'js-cookie'
import { create } from 'zustand'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  img: string
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  decrementItem: (item: CartItem) => void
  cookiesLoading: () => void
}

const CART_COOKIE_KEY = 'cart_items'

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => {
    set((state) => {
      const addedItem = state.items.find((i) => i.id === item.id)
      if (addedItem) {
        const updatedItems = state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
        Cookies.set(CART_COOKIE_KEY, JSON.stringify(updatedItems), {
          expires: 7
        })
        return {
          items: updatedItems
        }
      }
      const newItems = [...state.items, { ...item, quantity: 1 }]
      Cookies.set(CART_COOKIE_KEY, JSON.stringify(newItems), {
        expires: 7
      })
      return {
        items: newItems
      }
    })
  },
  decrementItem: (item: CartItem) => {
    set((state) => {
      const selectedItem = state.items.find((i) => i.id === item.id)
      if (!selectedItem) return state

      const newQuantity = selectedItem.quantity - 1
      let updatedItems

      if (newQuantity <= 0) {
        updatedItems = state.items.filter((i) => i.id !== item.id)
      } else {
        updatedItems = state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: newQuantity } : i
        )
      }
      Cookies.set(CART_COOKIE_KEY, JSON.stringify(updatedItems), {
        expires: 7
      })

      return {
        items: updatedItems
      }
    })
  },
  cookiesLoading: () => {
    const cookiesData = Cookies.get(CART_COOKIE_KEY)
    if (cookiesData) {
      try {
        const parsed = JSON.parse(cookiesData)
        if (Array.isArray(parsed)) {
          set({ items: parsed })
        }
      } catch (e) {
        console.error('Failed to parse', e)
      }
    }
  }
}))
