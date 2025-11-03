import { useState } from 'react'
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
 const [mode, setMode] = useState("login");

 const handleSwitch = (newMode) =>{
    setMode(newMode);
 }

 return(
    <div>
        {mode === "login" && <Login onSwitch={handleSwitch}/>}
        {mode === "signup" && <SignUp onSwitch={handleSwitch}/>}
    </div>
 );
}

export default App
