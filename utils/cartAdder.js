
export const handleAdder = (cartItems,newproduct) => {
    const checker = cartItems.find((item) => item.id === newproduct.id)
        if(checker) {
       return cartItems.map((item) => item.id === newproduct.id 
            ? {...item, quantity: item.quantity + 1, price: item.price * item.quantity}
            : item
          ) 
        }
   return [{...newproduct, quantity: 1},  ...cartItems]
  }



export const handlePlus = (cartItems, newproduct) => {
  const checker = cartItems.find((item) => item.id === newproduct.id)

 
  return cartItems.map((item) => item.id === newproduct.id 
    ? {...item, quantity: item.quantity + 1, price: item.price * item.quantity }
    : item
     )
}

export const handleMinus = (cartItems, newproduct) => {
  const checker = cartItems.find((item) => item.id === newproduct.id)

     if(checker.quantity === 1) {
    return cartItems.filter((item) => item.id !== newproduct.id)
  }

  return cartItems.map((item) => item.id === newproduct.id 
  ? {...item, quantity: item.quantity - 1}
  : item
   )

}
