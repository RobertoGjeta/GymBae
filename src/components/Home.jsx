import { useState } from "react";

function Home(){
    return(
       <div className="flex justify-center">
       <div className="flex flex-col justify-center border border-green-600 bg-green-100 text-green-500 rounded-2xl w-100 items-center">
       <h1 className="pt-4 text-3xl text-bold font-bold">Welcome to GymBae {}</h1>
       <h2 className="pt-2 text-xl text-bold font-semibold">Ready to customize your plan?!</h2>
       <h2 className="py-2 text-xl text-bold font-semibold">Click the button below to start your jurney:</h2>
       <button className="bg-purple-200 rounded-lg w-40 border-purple-600 my-1 hover:bg-purple-300 text-blue-700" >My information</button>
      </div>
      </div>    
    );
}

export default Home