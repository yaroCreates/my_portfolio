import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='fixed backdrop-blur-[2px] w-full h-20 z-50'>
        <Navbar/>
    </div>
  )
}

export default Header