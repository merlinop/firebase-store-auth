"use client"

import React from 'react'
import Link from 'next/link'
import {FaWindowClose} from "react-icons/fa"
import { useContext } from 'react'
import { GeneralContext } from '@/contexts/generalContext'

const MobileNav = () => {
    const {toggleNav, setToggleNav, handleNavToggle} = useContext(GeneralContext)

  return (
   <>
        {toggleNav && (<div className='sm:hidden absolute w-[50%] top-0 right-0 min-h-screen bg-white flex flex-col list-none py-[80px] items-center justify-start gap-10  text-2xl text-blue-600 '>
            {/* close button */}
            <FaWindowClose size={"40"} className='self-end mr-10' onClick={handleNavToggle}/>
            
                {/* Links */}
            <Link href={"/"} className="w-[100%] mx-auto border px-9 py-2 hover:bg-blue-500 hover:text-white ">Shop</Link>
            <Link href={"/"} className="w-[100%] mx-auto px-9 border hover:bg-blue-500 hover:text-white  py-2">Contact</Link>
           
           {/* Buttons */}
        <div className="w-[100%] mx-auto px-9 border hover:bg-blue-500 hover:text-white  py-2">Checkout</div>
        <div className=" w-[100%] mx-auto px-9 border hover:bg-blue-500 hover:text-white  py-2">Signin</div>
    </div>)}
   </>
  )
}

export default MobileNav
