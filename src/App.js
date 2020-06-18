import React, {useState} from 'react';
import Dinner from './dinner.js'
import './App.css';


function App() {

   const [light, setLight]  = useState(true);
   const [temp, setTemp]  = useState(22);
   
  
return(
<div>
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
   
   <div class="temp" >
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

export default App;


