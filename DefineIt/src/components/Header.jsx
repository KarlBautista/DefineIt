import React from 'react'
import Logo from "../assets/logo3.png"
const Header = () => {
  return (
    <div className='h-24 w-full bg-white flex items-center justify-between xl:px-40 shadow-md md:px-20 sm:px-10 px-5 py-14'>
        <div className='w-28 md:w-40'>
           <img src={Logo} alt="Defineit Logo" />
        </div>

        <div className='hidden md:flex gap-8 '>
            <h3 className='text-[#4b5563] cursor-pointer'>Home</h3>
            <h3 className='text-[#4b5563]  cursor-pointer'>Word of the Day</h3>
            <h3 className='text-[#4b5563]  cursor-pointer'>Thesaurus</h3>
        </div>
        <div className='md:hidden text-[#4b5563] text-2xl '>
            ☰
        </div>
    </div>
  )
}

export default Header
