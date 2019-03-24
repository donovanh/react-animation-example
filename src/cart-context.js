import { createContext } from 'react'

export const CartContext = createContext({
  total: 0,
  addToCart: () => {}
})
