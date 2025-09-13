import React from 'react'
import WordData from '../components/WordData'
import useWord from '../components/WordZustand'
import SearchBar from '../components/SearchBar'
import WordTitle from '../components/WordTitle'
import Synonyms from '../components/Synonyms'
import Antonyms from '../components/Antonyms'


const Home = () => {
 const { word } = useWord();
 if(!word && !Array.isArray(word)){
    return null;
 }
 console.log(word);
  return (
    <div className='h-auto w-[100%]'>
        <div className='h-[20%] w-full'>
            <WordTitle word={word} />
        </div>
        {word[0].meanings.map((meaning, index) => {
            return <WordData word={word[0]} meaning={meaning} key={index}/>
        })}
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
