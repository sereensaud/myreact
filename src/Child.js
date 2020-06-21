import React,{useContext} from 'react';
import CounterContext from './CounterContext';


const Child = (props) => {

    let counterValue = useContext(CounterContext)
    console.log(counterValue) //10 milegi
    return(
        <div>
            <h2>first child using countercontext</h2>
            <h3>this is {props.name} </h3>
            <h4>countervalue is {counterValue[0]}</h4> {/*  now hum first index derhe ...default value he 10*/}
            <button onClick={() => {counterValue[1](++counterValue[0])}}>incrementContext</button>
        </div>
    )
} 
export default Child; 