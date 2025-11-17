import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import useWord from './components/WordZustand'
import { Outlet } from 'react-router-dom'
const queryClient = new QueryClient();
function App() {
  const { word } = useWord();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [word])
  return (
  <QueryClientProvider client={queryClient}>
      <Header />
    <SearchBar />
    <main className='h-auto w-full'>
  
      <Outlet />
    </main>
     <Footer />
  </QueryClientProvider>
  )
}

export default App
