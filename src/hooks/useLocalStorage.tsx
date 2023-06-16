// Custom Hook
// Even if user refreshes the page, items stay in the cart

import { useState } from "react"

// make this custom hook work with custom generic types (in this case <T>) & different props



// <T> has a key which is of str data type, the initial val of the key will be whatever is the type of T or a funct that retruns this type of T
  // What is the type of T? Whatever i pass (i passed an arr of cart items) into useLocalStorage <> ShoppingCartContext.tsx
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)){
  // use state logic
  // useState is going to be of this generic type T
  const [value, setValue] = useState<T>( () => {
    
  })

  return(
    <>
    </>
  )
}
