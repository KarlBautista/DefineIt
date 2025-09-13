import React from 'react'
import useWord from './WordZustand'
import Volume from "../assets/medium-volume.png"
const WordTitle = ({ word}) => {

  return (
    <div className='w-full h-32'>
        <div className='flex justify-center w-full mb-5'>
                <div className='flex flex-col gap-2 items-center'>
                    <h2 className='text-4xl font-bold'>{word[0].word}</h2>
                    <div className='text-[#6b7280] text-lg'>{word[0].phonetic}
                        <span className='w-[50px] h-[50px]'>
                            <img src={Volume} alt="Volume Icon" className='inline w-[25px] h-[25px] ml-2 cursor-pointer' />
                        </span>
                    </div>
                    <div className='text-[#6b7280] italic'>
                        <p>{word[0].license.name}</p>
                    </div>
                </div>
                
            </div>
           
    </div>
  )
}

export default WordTitle
