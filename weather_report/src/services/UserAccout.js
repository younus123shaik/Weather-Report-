import React from 'react'
import Signup from './Signup'
import Login from './Login'
import { Link, useNavigate } from 'react-router-dom'

const UserAccout = () => {
    const nav= useNavigate();
  return (
    <div className='flex h-screen flex-col items-center justify-center  bg-gradient-to-t from-red-700 to-blue-600  '>
        <h1 className='text-white flex flex-col text-3xl shadow-lg p-10'>Welcome To Weather Report <span className='text-sm text-orange-400'>Sign up To See Lastest Weather Report</span></h1>
        <div className='shadow-md flex w-1/2 justify-around text-white p-12'>

     <Link to="/signup"><button className='p-2 transition hover:scale-125 text-blue-400'>Sign up</button> </Link>
     <Link to="/login"><button className='border-r-gray-500 p-2 rounded-md transition hover:scale-125 text-red-400'>Login</button></Link>
     
        </div>
    </div>
  )
}

export default UserAccout
