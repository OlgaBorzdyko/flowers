import Cookies from 'js-cookie'
import { create } from 'zustand'

interface CartItem {
  id: number
  productName: string
  price: number
  quantity: number
  img: string
}

interface CartState {
  items: CartItem[]
  allProducts: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (item: CartItem) => void
  decrementItem: (item: CartItem) => void
  clearCart: (items: CartItem[]) => void
  cookiesLoading: () => void
  setAllProducts: (items: CartItem[]) => void
}

const CART_COOKIE_KEY = 'cart_items'
const ALL_PRODUCTS_COOKIE_KEY = 'all_products_cache'
const CACHE_TIME = 5 * 60 * 1000 // 5m
const saveToCookie = (items: CartItem[]) => {
  Cookies.set(CART_COOKIE_KEY, JSON.stringify(items), {
    expires: 7
  })
}
const saveAllProductsToCookie = (items: CartItem[]) => {
  Cookies.set(
    ALL_PRODUCTS_COOKIE_KEY,
    JSON.stringify({ items, timestamp: Date.now() }),
    { expires: 7 }
  )
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  allProducts: [],
  setAllProducts: (items) => {
    set({ allProducts: items })
    saveAllProductsToCookie(items)
  },
  addItem: (item) => {
    set((state) => {
      const addedItem = state.items.find((i) => i.id === item.id)
      if (addedItem) {
        const updatedItems = state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
        saveToCookie(updatedItems)
        return {
          items: updatedItems
        }
      }
      const newItems = [...state.items, { ...item, quantity: 1 }]
      saveToCookie(newItems)
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
      saveToCookie(updatedItems)
      return {
        items: updatedItems
      }
    })
  },
  removeItem: (item) => {
    set((state) => {
      const updatedItems = state.items.filter((i) => i.id !== item.id)
      saveToCookie(updatedItems)
      return {
        items: updatedItems
      }
    })
  },
  clearCart: () => {
    set(() => {
      saveToCookie([])
      return {
        items: []
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
  },
  loadAllProducts: () => {
    const cache = Cookies.get(ALL_PRODUCTS_COOKIE_KEY)
    if (cache) {
      try {
        const parsed = JSON.parse(cache)
        if (
          Array.isArray(parsed.items) &&
          Date.now() - parsed.timestamp < CACHE_TIME
        ) {
          set({ allProducts: parsed.items })
        }
      } catch (e) {
        console.error('Failed to parse', e)
      }
    }
  }
}))
