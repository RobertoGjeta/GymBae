import React from "react";
import { useState } from "react";

function SignUp({onSwitch, onSignup}){
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(onSignup){
        onSignup({username, email, password});
    }else{
        console.log("Signup:",{username, email, password});
    }
  }

  return(
    <div className="flex justify-center items-center min-h-screen">
    <form className="w-75 h-95 flex flex-col items-center text-white bg-slate-500 rounded-lg"   onSubmit={handleSubmit}>
        <h2 className="text-center mt-8">Sign Up</h2>
        <div className="text-center justify-items-center mt-4">
            <label htmlFor="signup-username">Username</label><br/>
            <input className="bg-white text-black rounded" id="signup-username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </div>
       <div className="text-center justify-items-center mt-4">
            <label htmlFor="signup-email">Email</label><br/>
            <input className="bg-white text-black  rounded" id="signup-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="text-center justify-items-center mt-4">
             <label htmlFor="signup-password">Password</label><br/>
             <input className="bg-white text-black  rounded" id="signup-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button className="mt-4 text-green-800  hover:bg-green-700 bg-green-500 rounded w-32" type="submit">Sign Up</button>
        <p className="flex flex-col text-center">
            Already have an account?
            <button className="text-red-600" type="button" onClick={()=> onSwitch("login")}>
                Sign in here.
            </button>
        </p>
    </form>
    </div>
  );
}

export default SignUp