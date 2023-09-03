import { create } from "zustand"

const initialItems = [
  {
    id: 1,
    name: "Camiseta Polo",
    price: 35.50
  },
  {
    id: 2,
    name: "Calça Jeans",
    price: 50.00
  },
  {
    id: 3,
    name: "Tênis Esportivo",
    price: 72.00
  },
  {
    id: 4,
    name: "Relógio de Pulso",
    price: 100.00
  }
]

export type Item = {
  id: number
  name: string
  price: number
}

export type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartState {
  isCartOpen: boolean
  toggleCart: () => void
  availableItems: Item[]
  cart: CartItem[]
  addToCart: (item: Item) => void
  removeFromCart: (itemId: number) => void
}

export const useCartStore = create<CartState>((set) => ({
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  availableItems: initialItems,
  cart: [],
  addToCart: (item) => set((state) => {
    const itemExists = state.cart.find((cartItem) => cartItem.id === item.id)

    if(!itemExists) {
      return {
        cart: [...state.cart, { ...item, quantity: 1 }]
      }
    }

    return {
      cart: state.cart.map((cartItem) => {
        if(cartItem.id == itemExists.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        }

        return cartItem
      })
    }
  }),
  removeFromCart: (itemId) => set((state) => {
    const item = state.cart.find((cartItem) => cartItem.id === itemId)!

    if(item.quantity <= 1) {
      return { cart: state.cart.filter((item) => item.id !== itemId) }
    }

    return {
      cart: state.cart.map((cartItem) => {
        if(cartItem.id == item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 }
        }

        return cartItem
      })
    }
  })
}))