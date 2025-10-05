import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRouter from './authRouter.jsx'
import PatientRouter from './patientRouter.jsx'
import DoctorRouter from './doctorRouter.jsx'
export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path='/auth/*' element={<AuthRouter/>}/>

        <Route path='/patient/*' element={<PatientRouter/>}/>
        <Route path='/doctor/*' element={<DoctorRouter/>}/>
      </Routes>
    </div>
  )
}
