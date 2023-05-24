import { createContext, useContext, ReactNode, useState } from "react";

// TO DETAILED NOTES DESCRIBING EXACTLY HOW CONTEXT & PROVIDER HEE ARE WORKING

// initially ShoppingCartContext context val is an empty obj
type ShoppingCartContext = {
  // this type needs the ability/funct to add/remove items increment/decrement its quantity
  // returns a number
  getItemQuantity: (id: number) => number
  // doesnt return anything
  removeItemQuantity: (id: number) => void
  // no addToCart func cuz its the same thing as incrementCartQuantity
  incrementCartQuantity: (id: number) => void
  decrementCartQuantity: (id: number) => void
}
const ShoppingCartContext = createContext({});

export function useShoppingCart(){
  return(
    useContext(ShoppingCartContext)
  )
}

// Provider for ShoppingCartContext & rendering out the shpping card so users can view whats inside their cart
type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  // id has the type number. With this i can look up all the info like items price, title etc. Using title name as id isnt good cuz what if the items name/title changes in the future
  id: number
  // with quantity i can calculate what the total price is going to be cuz: price X quantity
  quantity: number
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  // storage place for cart items
  // cartItems state has an empty arr as its useState & type CartItem array 
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  return(
    <ShoppingCartContext.Provider value={{}}>
      { children }
    </ShoppingCartContext.Provider>
  )
  }
