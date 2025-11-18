import React, { useState } from "react"
import { Bars3Icon, XMarkIcon, ChevronDownIcon, UserCircleIcon, DocumentCheckIcon, CreditCardIcon } from "@heroicons/react/24/outline"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const handleClick = () => setNav(!nav)
  const location = useLocation()

  return (
    <div className="w-screen h-[80px] z-10 bg-rose-50 border-rose-100 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl text-rose-700 font-extrabold mr-4 sm:text-4xl transition-all duration-500">
            {location.pathname.startsWith("/account") ? "My Account" : "GymBae"}
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            <li><Link to="/" className="hover:text-rose-600">Home</Link></li>

            {/* My Account dropdown */}
            <li
              className="relative flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="flex items-center gap-1">
                <Link to="/account" className="hover:text-rose-600 font-medium">My Account</Link>
                <ChevronDownIcon className="w-4 text-rose-700 transition-transform duration-200" />
              </div>

              {/* Dropdown menu */}
              {showDropdown && (
              <ul className="absolute top-full left-0 mt-2 bg-white border border-rose-100 
                            rounded-lg shadow-lg w-48 py-2 z-50">
                <li>
                  <Link to="/account/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-rose-50 text-gray-700">
                    <UserCircleIcon className="w-4 text-rose-700" /> Profile
                  </Link>
                </li>
                <li>
                  <Link to="/account/plan" className="flex items-center gap-2 px-4 py-2 hover:bg-rose-50 text-gray-700">
                    <DocumentCheckIcon className="w-4 text-rose-700" /> My Plan
                  </Link>
                </li>
                <li>
                  <Link to="/account/subscription" className="flex items-center gap-2 px-4 py-2 hover:bg-rose-50 text-gray-700">
                    <CreditCardIcon className="w-4 text-rose-700" /> My Subscription
                  </Link>
                </li>
              </ul>
            )}

            </li>

            <li className="hover:text-rose-600">About Us</li>
            <li className="hover:text-rose-600">Support</li>
            <li className="hover:text-rose-600">Terms & Policies</li>
            <li className="hover:text-rose-600">Language</li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex pr-4">
          <Link to="/login" className="text-rose-600 border border-rose-600 px-8 py-3 rounded-lg mr-4 hover:bg-rose-600 hover:text-white transition">Sign in</Link>
          <Link to="/signup" className="bg-rose-600 text-white hover:bg-rose-50 hover:text-rose-600 border-rose-600 px-8 py-3 rounded-lg">
            Sign Up </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-rose-700" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-5" /> : <XMarkIcon className="w-5" />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? "hidden" : "absolute bg-rose-50 w-full px-8 pb-4 z-40"}>
        <li className="border-b-2 border-rose-200 w-full flex items-center">
          <Link to="/" onClick={handleClick}>Home</Link>
        </li>

        {/* dropdown of my account */}
        <li className="border-b-2 border-rose-200 w-full flex flex-col">
          <div className="flex items-center justify-between py-2" onClick={() => setShowDropdown(!showDropdown)}>
            <Link to="/account" onClick={handleClick}> My Account</Link>
            <ChevronDownIcon className="w-5 text-rose-700" />
          </div>

          {showDropdown && (
            <ul className="pl-3 text-sm flex flex-col gap-1">
              <li><Link to="/account/profile" onClick={handleClick}>Profile</Link></li>
              <li><Link to="/account/plan" onClick={handleClick}> My Plan </Link> </li>
              <li> <Link to="/account/subscription" onClick={handleClick}>My Subscription</Link> </li>
            </ul>
          )}
        </li>

        <li className="border-b-2 border-rose-200 w-full flex items-center">About Us</li>
        <li className="border-b-2 border-rose-200 w-full flex items-center">Support</li>
        <li className="border-b-2 border-rose-200 w-full flex items-center">Terms & Policies</li>
        <li className="border-b-2 border-rose-200 w-full flex items-center">Language</li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent border-rose-600 hover:text-rose-600 text-rose-600 px-8 py-3 mb-4">
            Sign In</button>
          <button className="bg-rose-600 text-white hover:bg-rose-700 border-rose-600 px-8 py-3">
            Sign Up</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
