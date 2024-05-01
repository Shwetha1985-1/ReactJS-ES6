import { useState } from "react"; //imported related hook useState 
import React from "react";

function NumberState(){

    let [number,setcount]=useState(0);
    
   
//function for increment
    function incrementCounter(){
        setcount(number+1);
        console.log(number);
    }

    //function for decrement
    function decrementCounter(){
        setcount(number-1);
        console.log(number);
    }

    //function for reset
    function resetCounter1(){
      number=0;  //setting to initail value which is '0'
      setcount(number);
      console.log(number);
       
       
    }

    return(
<div>
        <h1>Current value of the variable is {number}</h1>  

        <button onClick={incrementCounter}>Increment</button><br/><br/>
        <button onClick={decrementCounter}>Decrement</button><br/><br/>
        <button onClick={resetCounter1}>Reset</button>
       

        </div>
    )


}

//comments
//By this exercise came to know usage of useState hook and how it will retain state values within the component.

export default NumberState;