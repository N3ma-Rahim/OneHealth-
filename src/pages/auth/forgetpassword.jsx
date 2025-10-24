import React, { useState } from 'react'

export default function ForgetPassword() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) 

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      console.log(email);
      await new Promise((r) => setTimeout(r, 900))
      setStatus('success')
    } catch (err) {
      setStatus('error',err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">Forgot Password</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">Enter your email and we'll send instructions to reset your password.</p>

        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Forgot password form">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-blue-500 sm:text-sm"
              placeholder="you@example.com"
              aria-required="true"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Reset Password'}
            </button>
          </div>

          {status === 'success' && (
            <div className="mt-2 text-sm text-green-600">If that email exists in our system, you will receive reset instructions shortly.</div>
          )}

          {status === 'error' && (
            <div className="mt-2 text-sm text-red-600">Something went wrong. Please try again later.</div>
          )}

          <p className="mt-4 text-xs text-gray-400">We will never share your email. Read our <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.</p>
        </form>
      </div>
    </div>
  )
}
