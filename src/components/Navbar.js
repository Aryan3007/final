import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between items-center navbar px-40 pt-4'>
      <Link to="/">
      <img className='logo h-16' src="./images/logo.png" alt="" />
      </Link>
      <div className='flex flex-row gap-12 uls'>
        <Link to="/">
        <div className='item'>
        <li className='one'>Home</li>
        <li className='one'>Home</li>
        </div>
        </Link>
        <div className='item'>
        <li  className='one'>About</li>
        <li  className='one'>About</li>
        </div>
        <Link to="/Projects">
        <div className='item'>
        <li  className='one'>Project</li>
        <li  className='one'>Project</li>
        </div>
        </Link>
        <div className='item'>
        <li  className='one'>Contact</li>
        <li  className='one'>Contact</li>
        </div>
      </div>
    </div>
  )
}

export default Navbar
