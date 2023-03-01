import React from 'react'
import MobileNavComponent from './MobileNavComponent'
import BottomLayer from './navlayer/BottomLayer'

import TopLayer from './navlayer/TopLayer'

const NavComponent = () => {
  return (
    <div className='w-full flex flex-col h-[90px] bg-[#dfe2f5]'>
        <TopLayer />
        <BottomLayer />
        <MobileNavComponent />
    </div>
  )
}

export default NavComponent
