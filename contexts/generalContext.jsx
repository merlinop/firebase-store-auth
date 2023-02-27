"use client"

import { createContext, useState } from "react";


export const GeneralContext = createContext()


export const GeneralProvider = ({children}) => {
    const [toggleNav, setToggleNav] = useState(true)

    const handleNavToggle = () => {
      setToggleNav((prev) => !prev)
    }

    const value = {toggleNav, setToggleNav, handleNavToggle}

    return ( <GeneralContext.Provider value={value}>
              {children}
            </GeneralContext.Provider>
)
}