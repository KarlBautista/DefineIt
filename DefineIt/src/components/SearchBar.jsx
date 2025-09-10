import React from 'react'
import Search from "../assets/search.png"
const SearchBar = () => {
  return (
    <div className="h-32 flex justify-center items-center">
      <div className="relative w-[80%] xl:w-[30%] md:w-[40] sm:w-[60%]">
        <input
          type="text"
          placeholder="Search for definitions..."
          className="w-full xl:px-5 xl:py-4 pr-12 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
                    md:px-4 md:py-3  px-6 py-4"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
        >
            <div className='w-8 h-8 p-1 rounded-full bg-[#2563eb]'>
             <img src={Search} alt="" className='cursor-pointer invert brightness-0' />
            </div>
         
        </button>
      </div>
    </div>
  )
}

export default SearchBar
