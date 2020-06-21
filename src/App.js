import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';



function App()
{
   // for updating parents state we are doing this using hooks useState
   let  countState = useState(1) //array do cheezon ki ab 1 krdia to counter yehi se start hoga 
  // let [count, setCount] = useState(25) // ye same ha upar wale se wo ik array ban gai hai

   return(
   <CounterContext.Provider value={countState} > {/*ab value 25 dega */} 
<div>
<Parent  />
</div>
</CounterContext.Provider> // umbrealla bna dia upar default value bhi dedi..
   );   
}

export default App;


