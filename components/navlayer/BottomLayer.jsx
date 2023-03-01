import React from 'react'
import {ImCart} from 'react-icons/im'
import {FiSearch} from 'react-icons/fi'
import {MdManageAccounts} from 'react-icons/md'
import {HiShoppingCart} from 'react-icons/hi'

import Link from 'next/link'

const BottomLayer = () => {
  return (
    <section className='hidden md:w-[95%] lg:w-[90%] xl:w-[80%]  mx-auto  h-full sm:flex items-center justify-between gap-2'>
        <div className='flex items-center gap-3'>
            <ImCart color='green'  size={30}/>
            <h1 className='text-green-900 text-2xl font-bold'>Shopcart</h1>
        </div>

        <div className='flex items-center gap-6 text-black bg-[transparent] w-full font-semibold '>
            <select className='cursor-pointer hidden lg:block bg-[#dfe2f5]' >
                <option value="Headphones">Categories</option>
                <option value="Shoes">Shoes</option>
                <option value="Cars">Cars</option>
                <option value="Laptops">Laptops</option>
            </select>

            <Link href={"/Deals"}>
                <p className='hover:border-b-2 hover: border-green-700 hidden lg:block'>Deals</p>
            </Link>

            <Link href={"/Whatsnew"}>
              <p className='hover:border-b-2 hover: border-green-700 hidden lg:block whitespace-nowrap'>What&apos;s New</p>  
            </Link>

            <Link href={"/Delivery"}>
                <p className='hover:border-b-2 hover: border-green-700 hidden lg:block'>Delivery</p>
            </Link>

            <div className='relative'>
            <input 
                    type="text"
                    placeholder='Search Product'
                    className='bg-slate-200 ml-4 px-3 py-1 text-black placeholder:text-sm sm:placeholder:text-sm placeholder:text-black font-normal rounded-xl w-[250px] relative'
                    />
                    <FiSearch  className='absolute top-1 right-4 cursor-pointer' size={25}/>
            </div>
        </div>

        <div className='flex gap-2 items-center'>
            <MdManageAccounts size={20} />
            <Link href={"/account"}>
                <p className='hover:border-b-2 hover: border-green-700'>Account</p>
            </Link>
        </div>

        <div className='hidden md:flex gap-2 items-center ml-4 '>
            <HiShoppingCart size={20} />
            <Link href={"/account"}>
                <p className='hover:border-b-2 hover: border-green-700'>Cart</p>
            </Link>
        </div>
    </section>
  )
}

export default BottomLayer
