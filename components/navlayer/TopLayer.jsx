import React from 'react'
import {BsTelephone} from 'react-icons/bs'

const TopLayer = () => {
  return (
    <>
      <section className='w-full h-[30px] flex items-center justify-center sm:justify-between bg-green-900 px-1 sm:px-5 py-2 gap-2 sm:gap-0'>
        {/* left text */}
          <div className='hidden sm:flex gap-2 items-center '>
              <BsTelephone color='white' />
              <h1 className='text-white'>+0012848859</h1>
          </div>
      {/* middle text */}
      <div className='whitespace-nowrap tracking-tighter sm:tracking-normal'>
            <h1 className='text-white text-sm sm:font-light '>Get 50% off on Selected items |  Shop Now</h1>
      </div>
      {/* right text */}
      <div  className='flex gap-2'>
        <select className='bg-transparent text-white text-sm' >
          <option value="Eng">Eng</option>
          <option value="FR">FR</option>
          <option value="IT">IT</option>
        </select>

        <select className='hidden sm:block bg-transparent text-white'>
          <option value="Location">Location</option>
          <option value="USA">USA</option>
          <option value="ITALY">ITALY</option>
        </select>
      </div>
      </section>
    </>
  )
}

export default TopLayer
