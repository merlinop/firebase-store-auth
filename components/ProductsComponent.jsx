import Image from 'next/image'
import React from 'react'
import ProductData from "../data/productData"

const ProductsComponent = () => {
  return ( <div  className='spacingways mx-auto mt-[20px] grid grid-cols-2 grid-rows-4 md:grid-rows-2 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-4 gap-4 mb-4'>
   {ProductData && ProductData.map((list, idx) => {
    return ( 
        <div key={idx} className='border-transparent shadow-sm shadow-black h-[400px] flex flex-col items-start'>
            <div className='w-full'>
                <Image 
                    src={list.img}
                    width={200}
                    height={100}
                    alt="items"
                    className='w-full h-[250px]'
                />
            </div>

            <div className='flex w-full justify-between mt-[10px] px-2'>
                <p className='font-bold text-sm '>{list.title}</p>
                <p className='font-bold text-sm '>{list.price}</p>
            </div>

            
                <p className='font-semibold text-gray-500 text-xs mt-1 px-2'>{list.about}</p>
                <p className='font-semibold text-gray-500 text-xs mt-1 px-2'>ratings- {list.rating}</p>
                <button className='mt-4 border border-gray-500 px-5 py-2 text-gray-500 text-xs rounded-xl bg-slate-100 hover:bg-green-900 duration-200 ease-in-out hover:text-white ml-2'>Add to Cart</button>
        </div> )
   })}
   </div>)
  
}

export default ProductsComponent
