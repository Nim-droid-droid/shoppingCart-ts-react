// Custom Hook
// Even if user refreshes the page, items stay in the cart

import { useState } from "react"

// make this custom hook work with custom generic types (in this case <T>) & different props


// <T> has a key which is of str data type, the initial val of the key will be whatever is the type of T or a funct that retruns this type of T
  // What is the type of T? Whatever i pass (i passed an arr of cart items) into useLocalStorage <> ShoppingCartContext.tsx

// useLocalStorage funct Gets the val from local storage or get the initial val i passed in
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)){

  // use state logic
  // useState is going to be of this generic type T
  const [value, setValue] = useState<T>( () => {
    // using a funct version of useState cuz i only want to invoke checking local storage 1 time cuz its a slow operation tp do so i dont eant to do this each time my cpmntn re-renders

    const jsonValue = localStorage.getItem(key)
    // if the val is NOT = to null meaning that i have a val stored in localStorage, parse that val/jsonValue & return it. This is going to give me the <T> val
    if (jsonValue != null) return JSON.parse(jsonValue)

    // but if i dont have the <T> val i need to check the initial val, if its a funct…
    if (typeof initialValue === "function"){
      // then that means i need to invoke it as a func so i can return invoking my initialValue as a funct 
      // ERROR: this expression is not callable. Not all constitute of type '(()=>T | (T & Function))' are callable. Type T & Function gas no call Signatures
        // Essentially meaning my type don't line up
        // SOLUTION: Explicitly tell typescript that initialValue is a type of this invocable function that returns type T. Now typescript knows the T arg above is not function
      return (initialValue as () => T)()
    } else {
      // otherwise just return initialValue
      return initialValue
    }
  })
}
