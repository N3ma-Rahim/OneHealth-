import React from 'react'
import '../../index.css'
export default function PatientDashboard() {
  return (
    <div>
      <h1 className='MainText'>

      this is patients dashboard page
      </h1>
      <button className="MainButton mt-4"onClick={()=>console.log("hello")}>Book Appointment</button>
    </div>
  )
}
