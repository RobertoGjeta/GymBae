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
      <form onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <div>
            <label htmlFor="login-email">Email</label><br/>
            <input id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div>
             <label htmlFor="login-password">Password</label><br/>
             <input id="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button type="submit">Login</button>
        <p>
          Dont have an account?
          <button type="button" onClick={() => onSwitch("signup")}>
            Sign up here
          </button>
        </p>
      </form>
    )
}

export default Login