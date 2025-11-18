import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MyAccount from './components/Account/MyAccount'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Navbar />
        <div className='pt-[80px] px-6'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account/*" element={<MyAccount />} />
          </Routes>
          
      </div>
      </>
  )
}

export default App
