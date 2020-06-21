import React, {useState} from 'react';

 function Dinner({name, age, extra})
 {
     const [age1, setAge]  = useState();
     const [light, setLight]  = useState(true);
   const [temp, setTemp]  = useState(22);
     return(
         <div>
         <div>
         <h1>My name is {name} and I'm {age} years old and i m {extra}</h1>
         <br>
         </br>
         Change Age: {age1}<br>
         </br>
         <button onClick={()=>{
             setAge(age - 1);
         }}>Change Age</button>
         </div> 
        
         <div  className =  {light? "on": "off"} >
                THE ROOM LIGHT IS: 
                <br></br>
                <br></br>
                <button onClick={ 
                   ()=>{
                   setLight(true);            }
               }>ON</button>
               
      
               <button onClick={ 
                   ()=>{
                   setLight(false);            }
               }>OFF</button>
      
         </div>
         
         <div class = "temp">
                TEMPERATURE IS: {temp}
                <br></br>
                <br></br>
                <button onClick={ 
                   ()=>{
                   setTemp(temp+1);            }
               }>+</button>
               
      
               <button onClick={ 
                   ()=>{
                   setTemp(temp-1);            }
               }>-</button>
                 
         </div>
      </div>
         )
 }
 export default Dinner;

