"use client"

import { createContext, useState, useRef } from "react";
import {handleAdder, handlePlus, handleMinus} from "@/utils/cartAdder";


// General Context
export const GeneralContext = createContext()


export const GeneralProvider = ({children}) => {
  // States
    const [cartItems, setCartItems] = useState([])
    const [toggleNav, setToggleNav] = useState(false)
    const [toggleCart, setToggleCart] = useState(false)
    const [isEmpty, setIsEmpty] = useState(true)
    const [reviewClicker, setReviewClicker] = useState(false)

  // handle Add to cart
    const handleNewCart = (newproduct) => {
      setCartItems(handleAdder(cartItems, newproduct))
  }

 
//  Handle Toggler
    const handleNavToggle = () => {
      setToggleNav((prev) => !prev)
    }

    const handleAddSec = (newproduct) => {
      setCartItems(handlePlus(cartItems, newproduct))
    }

    const handleMinusSec = (newproduct) => {
      setCartItems(handleMinus(cartItems, newproduct))
    }

    const handleReview = () => {
      setReviewClicker((prev) => !prev)
    }
// Scroll Refs
    const cartRef = useRef()
    const mobileCartRef = useRef()

    // Values
    const value = {toggleNav, setToggleNav, handleNavToggle, handleNewCart,cartItems, toggleCart, setToggleCart, isEmpty, setIsEmpty, cartRef, mobileCartRef, handleAddSec, handleMinusSec, handleReview, reviewClicker}

    return ( <GeneralContext.Provider value={value}>
              {children}
            </GeneralContext.Provider>
)
}