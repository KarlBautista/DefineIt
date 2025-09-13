import React, { useEffect, useState } from 'react'
import useWord from './WordZustand'
import Volume from "../assets/medium-volume.png"
const WordTitle = ({ word }) => {
    const [ audioUrls, setAudioUrls ] = useState([]);

    useEffect(() => {
     const audioUrl = word[0].phonetics.filter((phonetic) => phonetic.audio !== "");
     setAudioUrls(audioUrl);
     console.log("ito mga ", audioUrl)
    }, [word]);

  const playVolume = () => {
      const audioSrc = audioUrls[0]?.audio;
    if(audioSrc && audioSrc.trim() !== ""){
     const audio = new Audio(audioUrls[0].audio);
     audio.play();
    }
    else{
        alert("sorry, no available sound")
    }
  }

  return (
    <div className='w-full h-32'>
        <div className='flex justify-center w-full mb-5'>
                <div className='flex flex-col gap-2 items-center'>
                    <h2 className='text-4xl font-bold'>{word[0].word}</h2>
                    <div className='text-[#6b7280] text-lg'>{word[0].phonetic}
                        <span className='w-[50px] h-[50px]'>
                            <img src={Volume} alt="Volume Icon" className='inline w-[25px] h-[25px] ml-2 cursor-pointer' 
                            onClick={() => playVolume()}/>
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
