"use client"
import {useState, useContext} from 'react'
import ProductData from '@/data/productData'
import { GeneralContext } from '@/contexts/generalContext'

const Test = () => {
  const {handleNewCart,cartItems} = useContext(GeneralContext)

//   Add to cart
   const handleCartAdding = (newproduct) => {
    handleNewCart(newproduct)
   }

  return (
    <>
    <div className='w-[70%] mx-auto min-h-screen flex flex-col   '>
        {ProductData?.map((item) => {
            return ( 
                <div key={item.id} className="flex items-center w-full gap-4">
                    <h1><span className='font-bold mr-2'>Name:</span> {item.title}</h1>
                    <h1><span className='font-bold mr-2'>Price:</span> {item.price}</h1>
                    <button className='border-2 px-6 py-2 bg-teal-800 text-white rounded-2xl hover:bg-teal-600 hover:text-gray-800 duration-200 ease-out' onClick={() => handleCartAdding(item)}>Add</button>
              </div>
            )
        })}

        {cartItems?.map((item,idx) => {
            return (
                <div key={idx}>
                    <h1>{item.title}</h1>
                    <h1>{item.price}</h1>
                    <p>{item?.quantity}</p>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Test
