import React from 'react'
import MobileNavComponent from './MobileNavComponent'
import BottomLayer from './navlayer/BottomLayer'

import TopLayer from './navlayer/TopLayer'

const NavComponent = () => {
  return (
    <div className='w-full flex flex-col h-[100px] bg-white'>
        <TopLayer />
        <BottomLayer />
        <MobileNavComponent />
    </div>
  )
}

export default NavComponent
