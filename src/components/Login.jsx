import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login({onSwitch, onLogin}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (!storedUser) {
        alert("No account found. Please sign up.");
        return;
      }

      if (storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("isLoggedIn", true);
        navigate("/account");
      } else {
        alert("Incorrect email or password.");
      }
    };


    return(
      <div className="flex justify-center items-center min-h-screen bg-rose-50">
  <div className="bg-white p-10 rounded-xl shadow-md border border-rose-100 w-full max-w-md">
    
    <h2 className="text-2xl font-bold text-center text-rose-700 mb-6">Sign In</h2>

    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-rose-200 rounded-md bg-white 
            focus:ring-2 focus:ring-rose-300 focus:outline-none"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-rose-200 rounded-md bg-white 
            focus:ring-2 focus:ring-rose-300 focus:outline-none"
          required
        />
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition"
      >
        Sign In
      </button>

      {/* Switch to Signup */}
      <p className="text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <button
          type="button"
          onClick={() => onSwitch("signup")}
          className="text-rose-600 font-medium hover:underline text-white"
        >
          Sign up here
        </button>
      </p>

    </form>
  </div>
</div>

    )
}

export default Login