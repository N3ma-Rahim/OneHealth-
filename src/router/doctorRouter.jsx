import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DoctorProfile from '../features/doctor/pages/profile.jsx'
export default function DoctorRouter() {
  return (
    <div>
      <Routes>
        <Route path='profile' element={<DoctorProfile/>}/>
      </Routes>
    </div>
  )
}
