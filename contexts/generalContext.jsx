"use client"

import { createContext, useState } from "react";
import handleAdder from "@/utils/cartAdder";


export const GeneralContext = createContext()


export const GeneralProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [toggleNav, setToggleNav] = useState(false)

    // handle Add to cart
    const handleNewCart = (newproduct) => {
      setCartItems(handleAdder(cartItems, newproduct))
 }

//  Handle Toggler
    const handleNavToggle = () => {
      setToggleNav((prev) => !prev)
    }

    const value = {toggleNav, setToggleNav, handleNavToggle, handleNewCart,cartItems}

    return ( <GeneralContext.Provider value={value}>
              {children}
            </GeneralContext.Provider>
)
}