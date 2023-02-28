import React from 'react'
import BottomLayer from './navlayer/BottomLayer'

import TopLayer from './navlayer/TopLayer'

const NavComponent = () => {
  return (
    <div className='w-full flex flex-col h-[100px] bg-white'>
        <TopLayer />
        <BottomLayer />
    </div>
  )
}

export default NavComponent
