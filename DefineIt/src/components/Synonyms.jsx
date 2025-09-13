import React from 'react'
import useWord from './WordZustand'

const Synonyms = () => {
  const { synonyms } = useWord();
  
  if (!synonyms || synonyms.length === 0) {
    return null; // Don't render if no synonyms
  }
  
  return (
    <div className='w-[85%] md:w-[70%] xl:w-[54%] mx-auto mt-8 mb-6'>
      {/* Header Section */}
      <div className='mb-6'>
        <div className='flex items-center gap-3 mb-2'>
          <div className='w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full'></div>
          <h3 className='text-2xl font-bold text-gray-800'>Synonyms</h3>
          <span className='bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold'>
            {synonyms.length} found
          </span>
        </div>
        <p className='text-gray-600 text-sm ml-6'>Words with similar meanings</p>
      </div>

      {/* Synonyms Grid */}
      <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100'>
        <div className='flex flex-wrap gap-3'>
          {synonyms.map((synonym, index) => (
            <div 
              key={index}
              className='group bg-gradient-to-r from-blue-50 to-blue-50 hover:from-blue-100 hover:to-blue-100 
                         px-4 py-2 rounded-full shadow-sm hover:shadow-md border border-blue-200 
                         transform hover:scale-105 transition-all duration-200 cursor-pointer'
            >
              <p className='text-blue-700 text-sm font-medium group-hover:text-blue-800 transition-colors'>
                {synonym}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom decoration */}
        <div className='mt-6 pt-4 border-t border-gray-100'>
          <div className='flex items-center justify-center gap-2 text-gray-400'>
            <div className='w-2 h-2 bg-blue-100rounded-full animate-pulse'></div>
            <p className='text-xs font-medium'>Click on any synonym to explore</p>
            <div className='w-2 h-2 bg-blue-100 rounded-full animate-pulse delay-75'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Synonyms
 