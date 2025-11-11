import React, {useState} from 'react'
import {Bars3Icon, XMarkIcon, ChevronDownIcon} from '@heroicons/react/24/outline'
import {Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
 
  
  return (
    <div className='w-screen h-[80px] z-10 bg-rose-50 border-rose-100 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl text-rose-700 font-extrabold mr-4 sm:text-4xl'>GymBae</h1>
                <ul className='hidden md:flex'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/account">My Account</Link></li>
                    <li>About Us</li>
                    <li>Support</li>
                    <li>Terms & Policies</li>
                    <li>Language</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-rose-600 mr-4'>Sign in</button>
                <button className='bg-rose-600 hover:text-rose-600 border-rose-600 px-8 py-3'>Sign Up</button>
            </div>

            <div className='md:hidden text-rose-700' onClick={handleClick}>
                {!nav ? <Bars3Icon className='w-5'/> : <XMarkIcon className='w-5'/>}
            </div>
            
        </div>  
        <ul className={!nav ? 'hidden' : 'absolute bg-rose-50 w-full px-8'}>
            <li className='border-b-2 border-rose-200 w-full flex items-center'><Link to="/" onClick={handleClick}>Home</Link></li>
            <li className='border-b-2 border-rose-200 w-full flex items-center'><Link to="/account" onClick={handleClick}>My Account</Link><ChevronDownIcon className='w-5 ml-auto text-rose-700'/></li>
            <li className='border-b-2 border-rose-200 w-full flex items-center'>About Us</li>
            <li className='border-b-2 border-rose-200 w-full flex items-center'>Support<ChevronDownIcon className='w-5 ml-auto text-rose-700'/></li>
            <li className='border-b-2 border-rose-200 w-full flex items-center'>Terms & Policies<ChevronDownIcon className='w-5 ml-auto text-rose-700'/></li>
            <li className='border-b-2 border-rose-200 w-full flex items-center'>Language<ChevronDownIcon className='w-5 ml-auto text-rose-700'/></li>
            <div className='flex flex-col my-4'>
                <button onClick={() => onPress("login")} className='bg-transparent border-rose-600 hover:text-rose-600 text-rose-600 px-8 py-3 mb-4'>Sign In</button>
                <button onClick={() => onPress("signup")} className='bg-rose-600 hover:text-rose-600 border-rose-600 px-8 py-3'>Sign Up</button>
            </div>
        </ul>
    </div>
  )
}
export default Navbar
