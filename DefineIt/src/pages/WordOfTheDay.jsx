import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import LoadingGif from "../assets/loading.gif"
import axios from 'axios'
import VolumeLogo from "../assets/medium-volume.png"
const WordOfTheDay = () => {
  const [wordOfTheDay, setWordOfTheDay] = useState("");
  const words = [
    "serendipity",
    "ephemeral",
    "eloquent",
    "benevolent",
    "melancholy",
    "resilience",
    "zenith",
    "luminous"
  ]
const fetchWord = async () => {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordOfTheDay}`);
    return response.data;
}

    const { data, error, isLoading } = useQuery({
    queryKey: ["word-of-day", wordOfTheDay],
    queryFn: fetchWord,
    retry: false,
    enabled: !!wordOfTheDay
});
    function getWordOfTheDay() {
      const today = new Date();
      const dayOfYear = Math.floor(
        (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
      );
      setWordOfTheDay(words[dayOfYear % words.length]);
    }

    useEffect(() => {
      getWordOfTheDay();
    }, []);
    

    if(isLoading){
      return  <div className='min-h-[57vh] h-auto w-[100%] flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg border border-gray-100'>
              <div className='w-24 h-24 flex justify-center items-center'>
                <img src={LoadingGif} alt="Loading..." className='w-full h-full object-contain' />
              </div>
              <div className='text-center'>
                <h3 className='text-lg font-semibold text-gray-700 mb-2'>Searching for definition...</h3>
                <p className='text-sm text-gray-500'>Please wait while we fetch the word details</p>
              </div>
            </div>
        </div>;
     }

     
  console.log(data);

  const handlePlayVolume = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  }

  const formattedDate = () => {
    const today = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formatted = today.toLocaleDateString("en-US", options);
    return formatted
  }


 







  return (
    <div className='w-full h-[60vh] flex flex-col items-center justify-center p-5'>
        <div className='flex items-center gap-3 mb-4 absolute top-90 flex-col'>
            <div className='flex gap-2'>
               <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 text-yellow-400' viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" role="img" aria-label="Word of the Day icon">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.785.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.06 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69L9.05 2.927z" />
          </svg>
          <h1 className='text-2xl font-semibold text-gray-700'>Word of the Day</h1>

            </div>
       
          <h2 className='text-gray-500'>{formattedDate()}</h2>
        </div>
      <div className='w-[100%] h-auto bg-white shadow-xl rounded-md md:w-[50%] p-7 flex flex-col items-center border border-gray-100 gap-3'>
           <h2 className='text-2xl tracking-wide font-semibold text-[#2563eb]'>{data?.[0]?.word || wordOfTheDay}</h2>
           <span className='inline h-[25px] w-[25px]'><img src={VolumeLogo} alt="Play pronunciation" onClick={() => handlePlayVolume(data[0]?.phonetics[0]?.audio)}/></span>
           <div className='flex w-full  text-lg tracking-wide font-semibold flex justify-center'>
             <p className='px-3 py-2 text-gray-700'>
               - {data?.[0]?.meanings?.[0]?.definitions[0]?.definition}
             </p>
           </div>
      </div>
    </div>
  )
}

export default WordOfTheDay
