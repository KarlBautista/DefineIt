import React from 'react'
import WordData from '../components/WordData'
import useWord from '../components/WordZustand'
import WordTitle from '../components/WordTitle'
import Synonyms from '../components/Synonyms'
import Antonyms from '../components/Antonyms'
import LoadingGif from "../assets/loading.gif"
import NotFound from "../assets/not-found.png"

const Home = () => {
 const { word, isLoading, isError, synonyms, antonyms } = useWord();
 
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

 if(isError){
  return <div className='min-h-[57vh] h-auto w-[100%] flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg border border-gray-100'>
          <div className='w-24 h-24 flex justify-center items-center'>
            <img src={NotFound} alt="error..." className='w-full h-full object-contain' />
          </div>
          <div className='text-center'>
            <h3 className='text-lg font-semibold text-gray-700 mb-2'>Sorry, I can't find the word</h3>
            <p className='text-sm text-gray-500'>Please search for exisiting words</p>
          </div>
        </div>
    </div>;
 }
 
 if(!word && !Array.isArray(word)){
    return <div className='min-h-[57vh] h-auto w-[100%] flex justify-center'>
        <div className='w-[50%] flex justify-center items-center
          md:text-8xl sm:text-8xl text-7xl font-semibold text-[#21262F]'>
          <span className='animate-pulse transition-all duration-500 cursor-default'>
            Define
          </span>
          <span className='text-[#0071FF] animate-bounce ml-1'>It</span>
        </div>
    </div>;
 }  
 
 console.log(synonyms, antonyms)
  return (
    <div className='min-h-[100vh] h-auto w-[100%]'>
        <div className='h-[20%] w-full'>
            <WordTitle word={word} />
        </div>
        {word[0].meanings.map((meaning, index) => {
            return <WordData word={word[0]} meaning={meaning} key={index}/>
        })}
        { synonyms.length > 0 || antonyms.length > 0 ?
        <div className='flex justify-center'>
          <h2 className='text-3xl font-bold text-gray-900'>Thesaurus</h2>
        </div>
        : null
        }
        <div className='w-full h-auto flex justify-center '>
         <Synonyms />
        </div>
          <div className='w-full h-auto flex justify-center '>
         <Antonyms />
        </div>
   

    </div>
  )
}

export default Home
