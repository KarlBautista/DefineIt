import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import WordData from './components/WordData'
import Footer from './components/Footer'
function App() {
 

  return (
    <>
    <div className='min-h-screen w-full bg-[#F9FAFB]'>
     <Header />
     <SearchBar />
     <WordData />
     <Footer />
    </div>
    </>
  )
}

export default App
