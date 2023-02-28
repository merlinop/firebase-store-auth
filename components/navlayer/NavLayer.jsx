"use client"
import React from 'react'
import {AiFillCloseCircle} from "react-icons/ai"
import { useContext } from 'react'
import { GeneralContext } from '@/contexts/generalContext'
import Link from 'next/link'
import {ImCart} from 'react-icons/im'
import {FiSearch} from 'react-icons/fi'
import {MdManageAccounts} from 'react-icons/md'
import {HiShoppingCart} from 'react-icons/hi'

const NavLayer = () => {
    const { toggleNav, handleNavToggle} = useContext(GeneralContext)

  return (
    
        <div className={`md:hidden fixed w-[50%] min-h-screen bg-white top-0 right-0 bottom-0 flex flex-col items-center px-4 py-5 duration-300 ease-in-out ${toggleNav ? "translate-x-0" : "translate-x-full"}`}>
        <AiFillCloseCircle className='mt-[50px] self-end cursor-pointer' size={40} color="green" onClick={handleNavToggle} />
        </div>

  )
}

export default NavLayer
