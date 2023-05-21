import { createContext, useContext, ReactNode } from "react";

// initially ShoppingCartContext context val is an empty obj
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
