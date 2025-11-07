import React, { useState } from "react"

function Login({onSwitch, onLogin}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(onLogin){
          onLogin({email, password });
        }else{
          console.log("Login: ",{email, password});
        }
    }

    return(
      <div className="flex justify-center items-center min-h-screen">
      <form className="w-75 h-75 flex flex-col items-center text-white bg-slate-500 rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-center mt-8">Log in</h2>
        <div className="text-center justify-items-center mt-4">
            <label htmlFor="login-email"  className="text-center pb-8">Email</label><br/>
            <input className="bg-white text-black rounded" id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="text-center justify-items-center mt-4">
             <label htmlFor="login-password" className="text-center">Password</label><br/>
             <input className="bg-white text-black rounded" id="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button className="mt-4 text-green-800 hover:bg-green-700 bg-green-500 rounded w-32" type="submit">Login</button>
        <p className="flex flex-col text-center">
          Dont have an account?
          <button className="text-red-600" type="button" onClick={() => onSwitch("signup")}>
            Sign up here
          </button>
        </p>
      </form>
      </div>
    )
}

export default Login