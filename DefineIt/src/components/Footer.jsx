import React from 'react'
import { FaFacebookF, FaGithub } from "react-icons/fa";
import Logo from "../assets/footer-logo2.png"

const Footer = () => {
  return (
    <div className="bg-[#1f2937] w-full h-auto flex flex-col items-center px-5 py-6">
      
     
      <div className="w-[80%] md:w-[50%] flex flex-col justify-center items-center border-b border-gray-500 pb-4">
        <img 
          src={Logo} 
          alt="defineit" 
          title="defineit logo" 
          className="max-w-[120px] w-full h-auto object-contain"
        />
        <p className="text-[#9ca3af] text-sm">Your trusted dictionary companion</p>
      </div>

      <div className="flex gap-4 mt-4">
        <a 
          href="https://www.facebook.com/karl.bautista.254770" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-gray-400 flex justify-center items-center text-[#9ca3af] hover:bg-gray-300 hover:text-black transition-all duration-300"
        >
          <FaFacebookF size={18} />
        </a>
        <a 
          href="https://github.com/KarlBautista" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-gray-400 flex justify-center text-[#9ca3af] items-center hover:bg-gray-300 hover:text-black transition-all duration-300"
        >
          <FaGithub size={19} />
        </a>
      </div>

      <div className="w-[80%] md:w-[50%] flex mt-3 justify-center items-center">
        <p className="text-[#9ca3af] text-sm">
          © {new Date().getFullYear()} DefineIt. Karl Bautista.
        </p>
      </div>
    </div>
  )
}

export default Footer
