import React from 'react'
import Logo from "../assets/footer-logo.png"
const Footer = () => {
  return (
    <div className="bg-[#1f2937] w-full h-35 flex flex-col items-center px-5 py-5 ">
    <div className="w-[40%] flex justify-center items-center flex-col border border-b-2 border-b-gray-400 pb-4">
        <img src={Logo} alt="" />
        <p className="text-[#9ca3af] text-sm">Your trusted dictionary companion</p>
    </div>
    </div>

  )
}

export default Footer
