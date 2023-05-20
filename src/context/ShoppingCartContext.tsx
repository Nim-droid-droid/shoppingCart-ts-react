import { createContext, useContext } from "react";

// initially ShoppingCartContext is an empty obj
const ShoppingCartContext = createContext({});

export function useShoppingCart(){
  return(
    useContext(ShoppingCartContext)
  )
}