import React, { useState }  from "react";

import Axios from "axios";
import './App.css';

function App() {
  const [joke,setJoke] = useState("");



  const getJoke = () => {
     fetch("https://reqres.in/api/users?page=1").then((response)=>response.json())
    .then((json)=>{
      console.log(json);
      setJoke(json);


    });
};
  return (
    <div>

      
   
      
      <nav className="vv">
      <h1 className="dd">Y.O.LO</h1>

     <button className="uu" onClick={getJoke}>Get User </button>
     
    
    {JSON.stringify(joke)}
    </nav>
    <a href="/images/copy.jpeg">Dont click here</a>

   
    

    
   
    
    
    

    

    

 
    </div>
    
   
    
    
    );
   
   
  }
  
  
  

export default App;
