import React, {useState} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import {MenuIcon, XIcon, ChevronDownIcon} from '@heroicons/react/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className='w-screen h-[80px] z-10 bg-rose-50 border-b border-rose-100 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl text-rose-700 font-extrabold mr-4 sm:text-4xl'>GymBae</h1>
          <ul className='hidden md:flex'>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="myAccount" smooth={true} duration={500}>My Account</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
            <li><Link to="support" smooth={true} duration={500}>Support</Link></li>
            <li><Link to="terms" smooth={true} duration={500}>Terms & Policies</Link></li>
            <li><Link to="language" smooth={true} duration={500}>Language</Link></li>
          </ul>
        </div>

        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-rose-600 mr-4'>Sign In</button>
          <button className='bg-rose-600 px-8 py-3'>Sign Up</button>
        </div>

        <div className='md:hidden text-rose-700' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        </div>

      </div>
          
      <ul className={!nav ? 'hidden' : 'absolute bg-rose-50 w-full px-8'}>
        <li className='border-b-2 border-rose-200 w-full'><Link onClick={handleClose} to="pricing" 
        smooth={true} offset={-50} duration={500}>Home</Link></li>
        <li className='border-b-2 border-rose-200 w-full flex items-center'><Link onClick={handleClose} to="pricing" 
        smooth={true} offset={-50} duration={500}>My Account</Link><ChevronDownIcon className='w-5 ml-auto text-rose-700'/></li>
        <li className='border-b-2 border-rose-200 w-full'><Link onClick={handleClose} to="pricing" smooth={true} 
        offset={-50} duration={500}>About Us</Link></li>
        <li className='border-b-2 border-rose-200 w-full flex items-center'><Link onClick={handleClose} to="pricing" 
        smooth={true} offset={-50} duration={500}>Support</Link><ChevronDownIcon className='w-5 ml-auto text-rose-700'/></li>
        <li className='border-b-2 border-rose-200 w-full flex items-center'><Link onClick={handleClose} to="pricing" 
        smooth={true} offset={-50} duration={500}>Terms & Policies</Link><ChevronDownIcon className='w-5 ml-auto text-rose-700'/></li>
        <li className='border-b-2 border-rose-200 w-full flex items-center'><Link onClick={handleClose} to="pricing" 
        smooth={true} offset={-50} duration={500}>Language</Link><ChevronDownIcon className='w-5 ml-auto text-rose-700'/></li>
        <div className='flex flex-col my-4'>
          <button className='bg-transparent text-rose-600 px-8 py-3 mb-4'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  )}
export default Navbar;