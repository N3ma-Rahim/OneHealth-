import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='bg-white text-black flex justify-between p-4 shadow'>
      <div className='font-bold text-lg'> Hospital System</div>
      <ul className='flex gap-4'>
        <li><Link to='/patient/dashboard'>Patient</Link></li>
        <li><Link to='/doctor/dashboard'>Doctor</Link></li>
        <li><Link to='/auth/login'>Login</Link></li>
      </ul>
    </nav>
  )
}
