import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
function App() {
 

  return (
    <>
    <div className='min-h-screen w-full bg-[#F9FAFB]'>
     <Header />
     <SearchBar />
    </div>
    </>
  )
}

export default App
