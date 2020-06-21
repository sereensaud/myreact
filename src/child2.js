import React, {useReducer} from 'react';
import counterReducer from './CounterReducer';
const Child2 = () =>
{   
    let [state, dispatch] = useReducer(counterReducer,1) // call the reducer her on this hook
    return(
        <div>
            <h2>second child using reducer</h2>
            <h3>value of reducer state is; {state}</h3>
           <button onClick={()=>dispatch('INCREMENT')}
           >incrementinReducer</button>
        </div>
    )
}
export default Child2;