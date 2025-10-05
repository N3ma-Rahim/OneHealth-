import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PatientProfile from '../features/patient/pages/profile.jsx'
export default function PatientRouter() {
  return (
    <div>
      <Routes>
        <Route path='profile' element={<PatientProfile/>}/>
      </Routes>
    </div>
  )
}
