import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

export default function ResetPassword() {
    
    const ResetPasswordSchema = z.object({
      newPassword: z.string().min(6).max(100),
      confirmPassword: z.string().min(6).max(100),
    })
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(ResetPasswordSchema)
    })
    const onSubmit=(data)=>{
        console.log(data)
    }
    if(errors){
        console.log(errors)
    }
  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="new-password">New Password:</label>
        <input type="password" id="new-password" {...register("newPassword")} />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" {...register("confirmPassword")} />
        <button type="submit">Update Password</button>
      </form>
    </div>
  )
}
