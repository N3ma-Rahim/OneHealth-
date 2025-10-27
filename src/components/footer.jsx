import React from "react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4"> About Our Hospital</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            We provide top-quality healthcare services with experienced doctors,
            advanced technology, and compassionate care. Your health is our
            priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4"> Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-200 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-200 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-200 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/auth/login" className="hover:text-blue-200 transition-colors">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="text-sm space-y-2">
            <li> Cairo, Egypt</li>
            <li>contact@hospital.com</li>
            <li> +20 123 456 789</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-500 mt-10 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Hospital System. All Rights Reserved.
      </div>
    </footer>
  )
}
