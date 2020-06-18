import React from 'react';
import Dinner from './dinner.js'
import './App.css';


function App() {
  let name =["sereen","saud"]
  let age = [18,279];
  let extra=["and i m not cool at all"]
return(
<div>
   
   <Dinner name={name[0]} age={age[0]} extra="verycool"></Dinner>
   <Dinner name={name[1]} age={age[1]}extra={extra}></Dinner>
   
</div>
   )   
}

export default App;


