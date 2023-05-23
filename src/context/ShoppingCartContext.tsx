import { createContext, useContext, ReactNode } from "react";


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

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  return(
    <ShoppingCartContext.Provider value={{}}>
      { children }
    </ShoppingCartContext.Provider>
  )
  }
