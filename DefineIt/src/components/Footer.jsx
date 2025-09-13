import React from 'react'
import Logo from "../assets/footer-logo.png"
const Footer = () => {
  return (
    <div className=" bg-[#1f2937] w-full h-auto flex flex-col items-center px-5 py-5  ">
    <div className="w-[80%] md:w-[50%] flex justify-center items-center flex-col border-b-1 border-b-gray-400 pb-4">
        <img src={Logo} alt="" />
        <p className="text-[#9ca3af] text-sm">Your trusted dictionary companion</p>
    </div>
    <div className='w-[80%] md:w-[50%] flex mt-2 justify-center items-center'>
        <p className='text-[#9ca3af] text-sm'>© {new Date().getFullYear()} DefineIt. Karl Bautista.</p>
    </div>
    </div>

  )
}

export default Footer
