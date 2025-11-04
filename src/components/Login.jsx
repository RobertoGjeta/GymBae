import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    navigate("/dashboard"); 
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>

        <div className="mb-4">
          <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <button type="button" onClick={() => onSwitch("signup")} className="text-indigo-600 hover:underline">
            Sign up here
          </button>
        </p>
      </div>
    </form>
  );
}

export default Login;
