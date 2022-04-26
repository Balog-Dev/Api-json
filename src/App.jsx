import React from 'react';
import './App.css';
import { useState } from 'react';
import axios  from "axios";
import { useEffect } from 'react';
import Data from "./Data.json";

 const App = ()=>{



    return (

        <main>
             <div className="p-4 d-flex " style={{backgroundColor: "whitesmoke"}}>
                 <h1 style={{color: "darkblue", marginLeft: "250px"}}>List of Complete TRUE and FALSE</h1>
             </div>
             {Data.map((value,userId, index, id) =>{
                 if(value.completed === true){
                     return(
                         <div key={index} className="card shadow-sm p-4 m-3 bg-success" style={{color: "white"}}>
                         {value.title}, {value.userId}, {value.id}
                         </div>
                     )
                 }
                 else {
                     return(
                         <div key={index} className="card shadow-sm p-4 m-3 bg-danger" style={{color: "white"}}>
                             {value.title}, {value.userId}, {value.id}
                         </div>
                     )
                 }
             }
             
             )}
             


                  
  
         </main>

    )

    

  
}







export default App;

