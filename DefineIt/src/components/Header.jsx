import React, { useState } from 'react'
import Logo from "../assets/logo3.png"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  return (
    <div className='h-24 w-full bg-white flex items-center justify-between xl:px-40 shadow-md md:px-20 sm:px-10 px-5 py-14'>
        <div className='w-28 md:w-40'>
           <img src={Logo} alt="Defineit Logo" />
        </div>

        <div className='hidden md:flex gap-8 '>
            <Link to={"/"}><h3 className={location.pathname === "/" ? "text-[#12161b] cursor-pointer font-bold text-lg" : "text-[#12161b] cursor-pointer"}>Home</h3></Link>
            <Link to={"/word-of-the-day"}><h3 className={location.pathname === "/word-of-the-day" ? "text-[#12161b] cursor-pointer font-bold text-lg" : "text-[#12161b] cursor-pointer"}>Word of the Day</h3></Link>
        
        </div>
        <div className='md:hidden text-[#4b5563] text-2xl' onClick={(e) => setShowDropdown(!showDropdown)}>
            ☰
        </div>
        {showDropdown && 
        <div className='absolute w-[150px] h-[100px] bg-white shadow-lg rounded-sm border border-gray-300 right-5 top-17 flex flex-col'>
          <div className={location.pathname === "/" ? "w-full h-[50%] flex items-center justify-center text-white bg-[#2563eb]" : "w-full h-[50%] flex items-center justify-center font-semibold"}><Link to={"/"}>Home</Link></div> 
           <div className={location.pathname === "/word-of-the-day" ? "w-full h-[50%] flex items-center justify-center text-white bg-[#2563eb]" : "w-full h-[50%] flex items-center justify-center font-semibold"}><Link to={"/word-of-the-day"}>Word of the Day</Link></div>
        </div>}
    </div>
  )
}

export default Header
