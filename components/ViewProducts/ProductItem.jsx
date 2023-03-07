"use client"
import React from 'react'
import ProductData from '@/data/productData'
import {usePathname} from 'next/navigation'
import Router, { withRouter } from 'next/router'
import Image from 'next/image'


const ProductItem = () => {
    const pathname = usePathname()
    const newpath = parseInt(pathname.toString().split("/")[2])
    const filteredData = ProductData.filter((item) => item.id === newpath)
    console.log(filteredData)


  return (
    <div className='spacingways min-h-screen mx-auto'>
            {filteredData?.map((item) => {
                return (
                    <div key={item.id} className="w-full min-h-screen border-t-[1px] border-slate-400 flex flex-col lg:flex-row gap-4">
                        {/* left side */}
                          
                          <div className='w-full lg:w-[50%] gap-[20px] my-6 flex flex-col items-center'>
                           
                             {/* Image container */}
                                <div className='w-full md:w-[80%] lg:w-[80%] mx-auto h-[70vh] flex items-center justify-center border-2 border-transparent bg-white  rounded-3xl shadow-black shadow-md cursor-crosshair'>
                                   
                                   {/* Left main Image */}
                                    <div className='w-[300px] h-[300px] overflow-hidden relative'>
                                    <Image 
                                        src={item.img}
                                        fill="true"
                                        alt='item image'
                                        className=' lg:object-cover '
                                    />    
                                </div>
                                </div>
                                <div className='grid grid-cols-3 w-full h-[100px] gap-4'>
                                    <div className='cursor-pointer bg-white shadow-md shadow-black'></div>
                                    <div className='cursor-pointer bg-white shadow-md shadow-black'></div>
                                    <div className='cursor-pointer bg-white shadow-md shadow-black'></div>
                                </div>
                          </div>

                          {/* right side */}
                          <div className='w-full md:w-[50%] h-[50vh] my-6  flex flex-col'>
                            {/* Title & Description */}
                                <div className='w-full  border-b-[1px] border-slate-400'>
                                    <h1 className='text-black font-bold text-2xl tracking-tight mb-2'>{item.title}</h1>
                                    <p className='text-sm font-light text-gray-600 mb-2'>{item.description}</p>
                                    <p className='text-sm font-light text-gray-600 mb-6'>Rating {item.rating}</p>
                                </div>

                                {/* Amount and text */}
                                <div className='w-full  border-b-[1px] border-slate-400 mt-4'>
                                    <h1 className='text-black font-bold text-2xl tracking-tight mb-2 '>${item.price} or $90 Monthly</h1>
                                    <p className='text-sm font-light text-gray-600 mb-6'>Suggested payment from a responsible financial institute</p>
                                </div>

                                {/* Choose a color */}
                                <div className='w-full border-b-[1px] border-slate-400 mt-4'>
                                    <h1 className='text-black font-bold text-2xl tracking-tight mb-2 '>Choose a color</h1>
                                    <p className='text-sm font-light text-gray-600 mb-6'>Loading...</p>
                                </div>

                                {/* Quantity Section */}
                                <div className='w-full  border-b-[1px] border-slate-400 mt-4'>
                                    <h1 className='text-black font-bold text-2xl tracking-tight mb-2 '>Quantity selection section</h1>
                                    <p className='text-sm font-light text-gray-600 mb-6'>Loading...</p>
                                </div>

                                {/* Delivery Section */}
                                    <div className='w-[60%] mt-5'>
                                                Loading...
                                    </div>
                          </div>
                    </div>
                )
            })}
    </div>
  )
}

export default ProductItem
