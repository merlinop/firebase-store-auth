"use client"
import {useContext} from 'react'
import {BsTelephone} from 'react-icons/bs'
import { GeneralContext } from '@/contexts/generalContext'

const TopLayer = () => {
    const {cartRef, mobileCartRef} = useContext(GeneralContext)
  return (
    <>
      <section className='w-full h-[30px] flex items-center justify-center sm:justify-between bg-green-900 px-1 sm:px-5 py-2 gap-2 sm:gap-0'>
        {/* left text */}
          <div className='hidden sm:flex gap-2 items-center '>
              <BsTelephone color='white' />
              <h1 className='text-white'>+0012848859</h1>
          </div>
      {/* middle text */}
      <div className='whitespace-nowrap tracking-tighter sm:tracking-normal'  ref={cartRef}>
            <h1 className='text-white text-sm sm:font-light '>Get 50% off on Selected items |  Shop Now</h1>
      </div>
      {/* right text */}
      <div  className='flex gap-2'  ref={mobileCartRef}>
        <select className='bg-transparent text-white text-sm' >
          <option value="Eng"  className='bg-[#dfe2f5] text-black
          '>Eng</option>
          <option value="FR" className='bg-[#dfe2f5] text-black
          '>FR</option>
          <option value="IT" className='bg-[#dfe2f5] text-black
          '>IT</option>
        </select>

        <select className='hidden sm:block bg-transparent text-white'>
          <option value="Location" className='bg-[#dfe2f5] text-black
          '>Location</option>
          <option value="USA" className='bg-[#dfe2f5] text-black
          '>USA</option>
          <option value="ITALY" className='bg-[#dfe2f5] text-black
          '>ITALY</option>
        </select>
      </div>
      </section>
    </>
  )
}

export default TopLayer
