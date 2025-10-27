import { Link, useLocation } from 'react-router-dom'
import { useUserStore } from '../Store/useUserStore'
import { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { FaExclamationTriangle } from "react-icons/fa";
import { useForm } from 'react-hook-form';

export default function NavBar() {
  const location = useLocation()
  const { user } = useUserStore()
  const [showEmergency, setShowEmergency] = useState(false)

  const navLinks = {
    guest: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Login/Register', path: '/auth/login' },
      // { name: 'Register', path: '/auth/register' },
    ],
    patient: [
      { name: 'Dashboard', path: '/patient/dashboard' },
      { name: 'Appointments', path: '/patient/appointments' },
      { name: 'Logout', path: '/auth/logout' },
    ],
    doctor: [
      { name: 'Dashboard', path: '/doctor/dashboard' },
      { name: 'Patients', path: '/doctor/patients' },
      { name: 'Logout', path: '/auth/logout' },
    ],
  }

  const linksToRender = navLinks[user.role] || navLinks.guest
  const { register, handleSubmit } = useForm()
  
  const onSubmit = (data) => {
    alert('Emergency request sent!')
    console.log(data)
    setShowEmergency(false)
  }

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-3">
          <Link to="/" className="MainText">OneHealth</Link>

          <ul className="flex items-center gap-6">
            {linksToRender.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {(user.role === 'guest' || user.role === 'patient') && (
              <li>
                <button
                  onClick={() => setShowEmergency(true)}
                  className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold px-5 py-2 rounded-md shadow-md transition-all hover:scale-105"
                >
                   Emergency
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/*  Emergency Modal */}
      {showEmergency && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 animate-fadeIn">
          <div className="bg-gradient-to-b from-white to-red-50 rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative border border-red-100 animate-slideUp">
            
            {/* Close Button */}
            <button
              onClick={() => setShowEmergency(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-600 transition-all"
            >
              <IoIosCloseCircle className="h-7 w-7" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <FaExclamationTriangle className="text-red-600 text-2xl" />
              <h2 className="text-2xl font-bold text-red-600">Emergency Request</h2>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none shadow-sm"
                required
                {...register("fullName")}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none shadow-sm"
                required
                {...register("phone")}
              />
              <textarea
                placeholder="Describe your emergency..."
                className="border border-gray-200 rounded-md px-3 py-2 h-24 focus:ring-2 focus:ring-red-400 outline-none shadow-sm resize-none"
                required
                {...register("message")}
              ></textarea>
              
              <button
                type="submit"
                className="mt-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-2 rounded-md transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
              >
                 Send Help Now
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
