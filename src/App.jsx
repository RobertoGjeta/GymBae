import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MyAccount from './components/Account/MyAccount'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
        <Navbar />
        <div className='pt-[80px] px-6'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account/*" element={<MyAccount />} />
          </Routes>
          
      </div>
      </Router>
  )
}

export default App
