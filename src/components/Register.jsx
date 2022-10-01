import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
    const navigate= useNavigate();
  return (
    <div>
        <form action="">
            <input type="text" placeholder='Email' />
            <br />
            <input type="number" name="" id=""  placeholder='Phone Number' />
            <br />
            <input type="text" name="" id="" placeholder='Username' />
            <br />
            <button type="submit" onClick={()=>{navigate('/login')}} >Register</button>
        </form>
    </div>
  )
}
