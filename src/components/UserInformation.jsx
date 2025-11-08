import { useState } from "react";


function UserInformation(){
    return(
      <div className="flex justify-center items-center min-h-screen">
       <form className="" action="">
         <h2>We must have more info about you so you can achieve your goal faster</h2>
         <div>
            <label htmlFor="height">Enter your height</label>
            <input className="text-black bg-white" type="number" id="height" required />
         </div>
          <div>
            <label htmlFor="weight">Enter your weight</label>
            <input className="text-black bg-white" type="number" id="weight" required />
         </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <input className="" type="radio" id="male" name="gender"/>
            <label htmlFor="male">Male</label>
            <input className="" type="radio" id="female" name="gender"/>
            <label htmlFor="female">Female</label>
         </div>
         {/* {Ndoshta nje label qe tregon bmi ne baze te peshes gjatsise dhe gjinis} */}
         {/* {kolona e dyte} */}
         <div>
            <label htmlFor="goal-select">Whats your main goal?</label>
            <select name="goal" id="goal-select">
                <option value="Lose weight">Lose Weight</option>
                <option value="Gain weight">Gain Weight</option>
                <option value="Maintain weight">Maintain Weight</option>
            </select>
         </div>
       </form>
      </div>
    );
}

export default UserInformation