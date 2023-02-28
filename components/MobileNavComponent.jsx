import React from 'react'
import { ImCart } from 'react-icons/im'
import { FiSearch } from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import Link from 'next/link'

const MobileNavComponent = () => {
  return (
    <section className='flex sm:hidden px-2 py-4 items-center '>
        <div className='flex items-center gap-3'>
            <ImCart color='green'  size={20}/>
            <h1 className='text-green-900 text-xl font-bold'>Shopcart</h1>
        </div>

        <div className='flex flex-1 items-center gap-5 w-full justify-end'>
                <input 
                    type="text"
                    placeholder='Search Product'
                    className='bg-slate-200 ml-4 px-3 py-1 text-black placeholder:text-sm sm:placeholder:text-xs placeholder:text-black font-normal rounded-xl w-[150px] relative'
                    />
                    <FiSearch  className='absolute top-1 right-4 cursor-pointer' size={25}/>    
                    <GiHamburgerMenu  className='cursor-pointer' size={20}/>
        </div>
       
        
    </section>
  )
}

export default MobileNavComponent
