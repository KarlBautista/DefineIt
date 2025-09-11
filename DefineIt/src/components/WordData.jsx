import React from 'react'
import Volume from "../assets/medium-volume.png"
const WordData = () => {
  return (
        <div className="w-full h-[80vh] flex justify-center mt-10 mb-10">
            <div className='w-[50%] h-[100%] bg-white shadow-lg px-10 py-10 flex flex-col gap-10'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-4xl font-bold'>Dictionary</h2>
                    <div className='text-[#6b7280] text-lg'>/ˈdɪkʃəˌnɛri/ 
                        <span className='w-[50px] h-[50px]'>
                            <img src={Volume} alt="Volume Icon" className='inline w-[25px] h-[25px] ml-2 cursor-pointer' />
                        </span>
                    </div>
                </div>
                 <div className=''>
                        <p className='bg-[#dbeafe] px-3 py-1 text-[#1e40af] rounded-full font-semibold'>noun</p>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='text-[#374151] text-lg font-semibold'>Definitions</h3>
                <p className='ml-3'>1. A reference book containing an alphabetical list of words, with information given for each word, usually including meaning, pronunciation, and etymology.</p>
                   <p className='ml-3'>1. A reference book containing an alphabetical list of words, with information given for each word, usually including meaning, pronunciation, and etymology.</p>
                      <p className='ml-3'>1. A reference book containing an alphabetical list of words, with information given for each word, usually including meaning, pronunciation, and etymology.</p>
            </div>

            <div className='flex flex-col gap-3'>
                <h3 className='text-[#374151] text-lg font-semibold'>Examples</h3>
                <ul className='list-disc pl-8'>
                    <li className='text-[#4b5563] italic'>"I looked up the word in the dictionary."</li>
                     <li className='text-[#4b5563] italic mt-2'>"I looked up the word in the dictionary."</li>
                </ul>

            </div>

            <div className='flex flex-col gap-3 '>
                <h3 className='text-[#374151] text-lg font-semibold'>Synonyms</h3>
                <div className='flex gap-3'>
                    <div className='bg-[#f3f4f6] px-3 py-1 rounded-full shadow-sm'>
                        <p className='text-[#1f2937] text-sm'>Lexicon</p>
                    </div>

                     <div className='bg-[#f3f4f6] px-3 py-1 rounded-full shadow-sm'>
                        <p className='text-[#1f2937] text-sm'>Lexicon</p>
                    </div>
                    
                     <div className='bg-[#f3f4f6] px-3 py-1 rounded-full shadow-sm'>
                        <p className='text-[#1f2937] text-sm'>Lexicon</p>
                    </div>
                </div>

            </div>

                    <div className='flex flex-col gap-3 '>
                <h3 className='text-[#374151] text-lg font-semibold'>Antonyms</h3>
                <div className='flex gap-3'>
                    <div className='bg-[#f3f4f6] px-3 py-1 rounded-full shadow-sm'>
                        <p className='text-[#1f2937] text-sm'>Lexicon</p>
                    </div>

                     <div className='bg-[#f3f4f6] px-3 py-1 rounded-full shadow-sm'>
                        <p className='text-[#1f2937] text-sm'>Lexicon</p>
                    </div>
                    
                     <div className='bg-[#f3f4f6] px-3 py-1 rounded-full shadow-sm'>
                        <p className='text-[#1f2937] text-sm'>Lexicon</p>
                    </div>
                </div>

            </div>

           
               
            

            </div>
        
        </div>
  )
}

export default WordData
