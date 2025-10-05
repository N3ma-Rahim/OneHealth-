import React from 'react'

export default function ForgetPassword() {
    
  return (
    <div>
      <h2>Forget Password</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  )
}
