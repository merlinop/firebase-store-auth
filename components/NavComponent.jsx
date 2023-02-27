"use client"
import React from 'react'
import Link from 'next/link'
import {GiHamburgerMenu} from "react-icons/gi"
import { useContext } from 'react'
import { GeneralContext } from '@/contexts/generalContext'

const NavComponent = () => {
    const {handleNavToggle} = useContext(GeneralContext)
    
  return (
    <nav className="w-full h-[80px] p-2 flex items-center bg-slate-50 justify-evenly text-blue-500 font-semibold text-lg">
        <div className='flex-1'>
            <Link href={"/"} className="ml-2 md:ml-[100px] hover:opacity-50"> Home </Link>
        </div>
        
        <div className='hidden sm:flex gap-6 list-none sm:w-[50%] md:w-[30%]'>
            <li>
                <Link href={"/"} className=" hover:border-b-2 border-blue-700">Shop</Link>
            </li>
            <li className=''>
                <Link href={"/"} className="hover:border-b-2 border-blue-700">Contact</Link>
            </li>
           {/* Buttons */}
           <button className="hover:border-b-2 border-blue-700">Cart</button>
        <button className="hover:border-b-2 border-blue-700 sm:mr-6">Signin</button>
        </div>

      <div className='sm:hidden mr-2 flex gap-4'> 
      <button className="hover:border-b-2 border-blue-700 font-semibold cursor-pointer">Cart</button>
      <GiHamburgerMenu color='#425bff' size={"30"} onClick={handleNavToggle}/>
      </div>
        
        
       
    </nav>
  )
}

export default NavComponent
