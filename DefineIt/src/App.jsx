import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import WordData from './components/WordData'
import Footer from './components/Footer'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import useWord from './components/WordZustand'
import Home from './pages/Home'
const queryClient = new QueryClient();
function App() {
  const { word } = useWord();
  return (
  <QueryClientProvider client={queryClient}>
    <div className='min-h-screen w-full bg-[#F9FAFB]'>
     <Header />
     <SearchBar />
     <Home />
     <Footer />
    </div>
  </QueryClientProvider>
  )
}

export default App
