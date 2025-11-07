import { useState } from 'react'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import { Routes , Route } from 'react-router-dom';


function App() {
 const [mode, setMode] = useState("");
 
 const [showLogIn, setShowLogIn] = useState(false);
 const [showSignUp, setShowSignUp] = useState(false);
 

 const handleSignUp = (userData) => {
   localStorage.setItem("user", JSON.stringify(userData));
   alert("Account created successfully!");
   setMode("login");   
 }

 const handleLogin = (loginData) => {
   const savedUser = JSON.parse(localStorage.getItem("user"));

   if(savedUser && savedUser.email === loginData.email && savedUser.password === loginData.password){
      alert(`Welcome back, ${savedUser.username}!`);
    } else {
      alert("Invalid email or password.");
    }
  };
  

 const handleSwitch = (newMode) =>{
    setMode(newMode);
 }

   function handleNavButton(mode){
    if(mode === "login"){
      setMode("login");
      setShowSignUp(false);
    }
    if(mode === "signup"){
      setMode("signup");
      setShowLogIn(false);
    }
  }

 return(
  <>
      <Nav onPress={handleNavButton}/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
     
      {mode === "login" && <Login onSwitch={handleSwitch} onLogin={handleLogin}/>}
      {mode === "signup" && <SignUp onSwitch={handleSwitch} onSignup={handleSignUp}/>}
  </>

 );
}

export default App
