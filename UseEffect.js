import React from "react";
import { useEffect,useState } from "react";



function UseEffect(){

    let [sname,SetName]=useState('');
    let [counter,Setcounter]=useState(0);
            
                  
       // console.log(document.querySelector('#select1').value);
        
        
        //order.status=document.querySelector('#select1').value; //getting selected value from user form
       // setOrder({...order,status:order.status}); //using spread operator
        //console.log(order.status);

        
        

        function updateCounter(){

           

          
          
           Setcounter(counter=counter+1);
           //SetName(sname =sname + 'b');
           console.log('counter value is:'+counter);
            
            console.log(sname);
            document.getElementById("fname").value=sname;
  
          }

          useEffect(() => {
            console.log("Component Mounted");
            
           sname= document.getElementById("fname").value;
          SetName(sname + 'b');
            console.log('name is inside effect: '+sname);
            console.log('inside effect counter:'+counter);

            
    
        },[counter]);


        useEffect(() => {
            console.log("Component Mounted");
            
            console.log('name is inside effect: '+sname);
            console.log('inside effect counter:'+counter);

            
    
        },[sname]);

        return(
       
            <div>
                <h1>WELCOME</h1>
                <input type="text" id="fname" defaultValue="shwetha"></input>
    
                <button onClick={updateCounter}>Counter</button><br/><br/>
    
    
                </div>
            );
           
    
    
    
    
   
   
};





export default UseEffect;