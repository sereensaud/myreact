import React from 'react';
import Child from './Child';
import Child2 from './child2';

 const Parent = (props) => // CONST BECAUSE IT A SUNC ALREADY MENTIONED BY () =>
 {
   return(
       <div>
       <Child name="SEREEN" />
       <Child2/>
       </div>
   )
 }
 export default Parent;