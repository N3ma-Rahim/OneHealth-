import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/approuter'
import NavBar from './shared/components/navbar'
import Footer from './shared/components/footer'

export default function App() {
  return (
    <div  className='bg-gray-200 min-h-lvh p-4'>
      
    

      <BrowserRouter>
      <NavBar/>
      <AppRouter />
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
