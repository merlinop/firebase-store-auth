'use client'
import { useContext, useEffect } from 'react'
import { GeneralContext } from '@/contexts/generalContext'
import Image from 'next/image'
import {FiMinusSquare}  from 'react-icons/fi'
import { BsPlusSquare} from 'react-icons/bs'
import {AiFillCloseSquare} from 'react-icons/ai'

const CartModal = () => {

const {cartItems, setIsEmpty, isEmpty, toggleCart, setToggleCart, handleAddSec, handleMinusSec} = useContext(GeneralContext)
        const togglerw = () => {
            setToggleCart((prev) => !prev)
        }
useEffect(() => {
    if(cartItems.length === 0) {
        setIsEmpty((prev) => !prev)
    }
}, [cartItems])

  return (
    <div  className={`flex md:flex right-4 top-1  flex-col items-center absolute  h-[40vh] w-[60%] md:w-[30%] border-2 bg-white text-black drop-shadow-lg shadow-lg shadow-black overflow-y-scroll duration-200 ease-in-out z-[99] ${toggleCart ? "translate-x-[0px]" : "translate-x-[999px]"}`}>

                <AiFillCloseSquare className="absolute top-4 right-8 bg-green-900 text-white mb-3 duration-200 ease-in-out cursor-pointer hover:bg-white hover:text-green-900" size={25} onClick={() => togglerw()} />


            {!isEmpty && cartItems?.map((item) => {
                return ( <div key={item.id} className="w-full flex p-2 items-center justify-between mt-[40px] md:mt-4">
                        <div className='w-[50px] h-[50px]  md:w-[80px] md:h-[80px] rounded-[50%] shadow-lg shadow-black relative overflow-hidden'>
                            <Image 
                                src={item.img}
                                fill="true"
                                alt="cart image"
                                className='w-full object-cover overflow-hidden '
                            />
                        </div>
                        <div className='  flex flex-col items-center gap-2'>
                            <span className=' font-light text-xs md:font-bold md:text-sm'>{item.title}</span>
                            <div className='flex items-center gap-2'>
                                <BsPlusSquare size={20}  className="cursor-pointer hover:opacity-50" color="green" onClick={() => handleAddSec(item)}/>
                                {item.quantity}
                                <FiMinusSquare size={22} className="cursor-pointer hover:opacity-50"  color="red" onClick={() => handleMinusSec(item)} />
                            </div>
                        </div>
                        <span className='font-bold text-sm'>{item.price}</span>
                </div> 
                
                )
            }) }
               { cartItems?.length > 0 && <div>
                    <button className='border bg-green-900 text-white px-3 py-1 mb-3 rounded-2xl'>Proceed to cart</button>

                </div>}
                 {isEmpty && <h1 className='text-center mt-10'>Cart is Empty...</h1>}
            
            
    </div>
  )
}

export default CartModal
