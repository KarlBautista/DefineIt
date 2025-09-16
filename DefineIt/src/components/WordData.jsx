import React from 'react'
import Volume from "../assets/medium-volume.png"
import useWord from './WordZustand'
const WordData = ({ word, meaning }) => {
  
    console.log(meaning);

  return (
     <div className="flex justify-center mt-10 mb-10 px-4">
      <div className="w-full md:w-[80%] xl:w-[55%] bg-white shadow-lg rounded-2xl px-8 py-10 flex flex-col gap-8 border border-gray-100">
        

        <div className="flex justify-between items-center">
               <h3 className="text-lg font-semibold text-gray-700">Definitions</h3>
          <p className="bg-blue-100 px-4 py-1 text-blue-700 rounded-full font-medium shadow-sm">
            {meaning.partOfSpeech}
          </p>
        </div>

  
        <div className="flex flex-col gap-4">
       
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed">
            {meaning.definitions.map((definition, index) => (
              <li key={index} className="marker:text-blue-600">
                {definition.definition}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default WordData
