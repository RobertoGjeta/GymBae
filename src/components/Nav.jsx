import React from "react";
import {Link} from "react-router-dom"

function Nav({onPress}){

    return(
        <nav className="bg-white shadow-md">
    <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* {left side (logo)} */}
        <h1 className="text-2xl font-bold text-blue-600">GymBae</h1>

        {/* {right side (links)} */}

        <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><Link to="/home" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
            <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
            <li className="flex items-center space-x-3">
                
                <button onClick={() => onPress("login")} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                    Login
                </button>
                <div className="space-x-4"></div>
                <button onClick={() => onPress("signup")} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                    Sign Up
                </button>
                
            </li>
        </ul>

    </div>
</nav>
    );
}

export default Nav


