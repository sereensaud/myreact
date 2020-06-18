import React, {useState} from 'react';

 function Dinner({name, age, extra})
 {
     const [age1, setAge]  = useState();
     return(
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
         )
 }
 export default Dinner;

