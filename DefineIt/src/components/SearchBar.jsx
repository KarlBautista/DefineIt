import React, { useEffect, useState } from 'react'
import Search from "../assets/search.png"
import axios from "axios"
import { useQuery } from '@tanstack/react-query'
import useWord from './WordZustand'
const SearchBar = () => {
  const [ word, setWord ] = useState("");
  const [ submittedWord, setSubmittedWord ] = useState("")
  const { storeWord, storeSynonyms, storeAntonyms } = useWord();

  const { data, error, isLoading } = useQuery({
    queryKey: ["word", submittedWord],
    queryFn: () => fetchWord(),
    enabled: !!submittedWord,
    retry: false,

  });

  useEffect(() => {
    storeWord(data)
    storeSynonyms(data)
    storeAntonyms(data)
  }, [data, storeWord])

 

  


  

  const fetchWord = async () => {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${submittedWord}`);
    return response.data;
    }

      
  const searchWord =  (e) => {
     e.preventDefault();
     setSubmittedWord(word);
  } 

  

  return (
    <div className="h-32 flex flex-col gap-2 justify-center items-center mt-10 ">
      <form onSubmit={searchWord} className="relative w-[80%] xl:w-[30%] md:w-[40] sm:w-[60%]">
        <input
           type="text"
          placeholder="Search for definitions..."
          className="w-full xl:px-5 xl:py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
                    md:px-4 md:py-3  px-3.5 py-3"
          onChange={e => setWord(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
        >
            <div className='w-8 h-8 p-1 rounded-full bg-[#2563eb]'>
             <img src={Search} alt="" className='cursor-pointer invert brightness-0' />
            </div>
         
        </button>
      </form>
      <p className='text-[#6b7280] text-[10px] text-center sm:text-[12px] md:text-sm'>
        Try searching for words like "ephemeral," "serendipity," or "eloquent"</p>

        { isLoading && <div>Loading....</div> }
        { error && <div>Could not find the word</div> }

    </div>
  )
}

export default SearchBar
