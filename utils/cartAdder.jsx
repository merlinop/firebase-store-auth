
const handleAdder = (cartItems,newproduct) => {
    const checker = cartItems.find((item) => item.id === newproduct.id)
        if(checker) {
       return cartItems.map((item) => item.id === newproduct.id 
            ? {...item, quantity: item.quantity + 1}
            : item
          ) 
        }
   return [...cartItems, {...newproduct, quantity: 1}]
  }

export default handleAdder