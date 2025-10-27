import { Link } from 'react-router-dom'
import { useUserStore } from '../Store/useUserStore'

export default function NavBar() {
  // const location = useLocation()
  const { user } = useUserStore()

  const navLinks = {
    guest: [
      { name: 'About', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Login/Register', path: '/auth/login' },
      // { name: 'Register', path: '/auth/register' },
    ],
    doctor: [
      { name: 'Dashboard', path: '/doctor/dashboard' },
      { name: 'Logout', path: '/auth/logout' },
    ],
    patient: [
      { name: 'Dashboard', path: '/patient/dashboard' },
      { name: 'Appointments', path: '/patient/appointments' },
      { name: 'Logout', path: '/auth/logout' },
    ],
  }

  const linksToRender = navLinks[user.role] || navLinks.guest

  return (
    <nav className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-xl text-blue-700 tracking-wide hover:text-blue-800 transition-colors"
        >
          OneHealth
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-6">
          {linksToRender.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-blue-100"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
