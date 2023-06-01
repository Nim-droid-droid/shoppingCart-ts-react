import { createContext, useContext, ReactNode, useState } from "react";

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

type ShoppingCartContext = {
  // this type needs the ability/funct to add/remove items increment/decrement its quantity
  // returns a number
  getItemQuantity: (id: number) => number
  // doesnt return anything
  removeItemQuantity: (id: number) => void
  // no addToCart func cuz its the same thing as incrementCartQuantity
  incrementCartQuantity: (id: number) => void
  decrementCartQuantity: (id: number) => void

  openCart: () => void
  closeCart: () => void
  // Total number of items in the cart. show the item quantity in the shopping cart icon's badge
  cartQuantity: number
  // cart items arr.
  cartItems: CartItem[]

}
// initially ShoppingCartContext context val is an empty obj
const ShoppingCartContext = createContext({});

export function useShoppingCart(){
  return(
    useContext(ShoppingCartContext)
  )
}


export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  // by default the cart is closed (so false)
  const [isOpen, setIsOpen] = useState(false)

  // storage place for cart items
  // cartItems state has an empty arr as its useState & type CartItem array   
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  // Count up all the different item quantities for every item in the cart & return the cart quantity
    // return item.quantity + quantity. quantity accu by default starts at 0
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 
    0 )
  
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  
  function getItemQuantity(id: number){
    // (?. Optional chaining) If this vehicle equates to something, Then get the quantity on it, otherwise if there's nothing return 0 
    // find the item that === to the current ID
      // If theres a match (item's ID === current ID) return the quantity
      // Otherwise return default value which is 0
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function incrementCartQuantity(id:number){
    // currItems is my current list of items
    // get list of current items…
    setCartItems(currItems => {
      // now modify the list
        // if i find that current item inside the cart
        // null -> also check if current item doesnt exist/is not in cart, then add it to cart…
      if(currItems.find(item => item.id === id) == null){
        // return all cart items & add the new item, which has an id & quantity of 1
        return [...currItems, { id, quantity:1 }]
      } else{
        // else for each item in the current list of items…
        return currItems.map(item => {
          // if the item id === id
          if(item.id === id){
            // then return all cart items & add that item (that matched the id) & add 1 to that items quantity
            return {...item, quantity : item.quantity + 1 }
          } else{
            // else just return the item as it is, without any changes
            return item
          }
        })
      }
    })
  }

  function decrementCartQuantity(id:number){
    // currItems is my current list of items
    // get list of current items…
    setCartItems(currItems => {
      // now modify the list
        // if i find that current item inside the cart === current id (decrementCartQuantity id para) exist, check if it's quantity =1, Then I want to get rid of it.
      if(currItems.find(item => item.id === id)?.quantity === 1){
        // From the list of items (currItems) filter out all the items thats NOT equal to current id. Return the new list where none of the items == current ID
        return currItems.filter(item => item.id !== id)
      } else{
        // else for each item in the current list of items…
        return currItems.map(item => {
          // if the item id === current id 
          if(item.id === id){
            // then return all cart items & remove that item's quantity meaning remove the item (that matched the id) from the list
            return {...item, quantity : item.quantity - 1 }
          } else{
            // else just return the item as it is, without any changes
            return item
          }
        })
      }
    })
  }

  function removeItemQuantity(id:number){
    setCartItems(currItems => {
      // filter out the items who's id != to current id (removeItemQuantity id para val)
      return currItems.filter(item => item.id !== id)
    })
  }

  return(
    <ShoppingCartContext.Provider value={{ 
      getItemQuantity, 
      incrementCartQuantity, 
      decrementCartQuantity,
      removeItemQuantity,
      openCart, 
      closeCart,
      cartItems,
      cartQuantity
      }}>
      { children }
    </ShoppingCartContext.Provider>
  )
  }
