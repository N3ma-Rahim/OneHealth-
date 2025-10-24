import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import NavBar from './components/navbar'
import Footer from './components/footer'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import ForgetPassword from './pages/auth/forgetpassword'
import ResetPassword from './pages/auth/resetpassword'
export default function App() {
  return (
    <div  className='bg-gray-200 min-h-lvh p-4'>
      
    

      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/reset-password' element={<ResetPassword/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
