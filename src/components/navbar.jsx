import { Link, useLocation } from 'react-router-dom'
import { useUserStore } from '../Store/useUserStore'
import { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { useForm } from 'react-hook-form';

export default function NavBar() {
  const location = useLocation()
  const { user } = useUserStore()
  const [showEmergency, setShowEmergency] = useState(false)

  const navLinks = {
    guest: [
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Login', path: '/auth/login' },
      { name: 'Register', path: '/auth/register' },
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
  const {register, handleSubmit} = useForm()
  const onSubmit = (data) => {
    alert('Emergency request sent!')
    console.log(data);
    setShowEmergency(false)
  }
  return (
    <>
      <nav className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link to="/" className="MainText">
            OneHealth
          </Link>

          {/* Links */}
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

            {/*  Emergency button — only for guest or patient */}
            {(user.role === 'guest' || user.role === 'patient') && (
              <li>
                <button
                  onClick={() => setShowEmergency(true)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md shadow-md transition-all hover:cursor-pointer"
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md relative">
            <button
              onClick={() => setShowEmergency(false)}
              className="hover:cursor-pointer absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
            >
              <IoIosCloseCircle className='h-7 w-7 font-extrabold' />
            </button>

            <h2 className="text-xl font-bold text-red-600 mb-4">Emergency Request</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                placeholder="Full Name"
                className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                required
                {...register("fullName")}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-red-400 outline-none"
                required
                {...register("phone")}
              />
              <textarea
                placeholder="Describe your emergency..."
                className="border rounded-md px-3 py-2 h-24 focus:ring-2 focus:ring-red-400 outline-none"
                required
                {...register("message")}
              ></textarea>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition-all"
              >
                Send Help
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

