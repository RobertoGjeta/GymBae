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
    <form onSubmit={handleSubmit}>
        <h2>sign Up</h2>
        <div>
            <label htmlFor="signup-username">Username</label><br/>
            <input id="signup-username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </div>
       <div>
            <label htmlFor="signup-email">Email</label><br/>
            <input id="signup-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div>
             <label htmlFor="signup-password">Password</label><br/>
             <input id="signup-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button type="submit">Sign Up</button>
        <p>
            Already have an accoun?
            <button type="button" onClick={()=> onSwitch("login")}>
                Sign in here.
            </button>
        </p>
    </form>
  );
}

export default SignUp