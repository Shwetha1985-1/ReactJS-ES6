import React from "react";
import { useState } from "react";
import './Login.css';

function MobileList() {

const proddata =[{mname:'Sony',
description:'Sony Mobile',
price:'10000',
rating:'2',
inStock:'Y'},
{mname:'Samsung',
description:'Samsung Mobile',
price:'19000',
rating:'1',
inStock:'N'},
{mname:'Redme',
description:'Redme Mobile',
price:'17000',
rating:'3',
inStock:'N'},
{mname:'1+',
description:'1+ Description',
price:'15000',
rating:'3',
inStock:'Y'}];


const [mobile,setMobile]=useState(proddata);

//setMobile(mobile);


return(

     <div >
    
             <table id="customers">
              <thead > 
                 <tr>
            <th scope="col">Mobile Name </th>
            <th scope="col" >Description </th>
            <th scope="col">Price </th>
            <th scope="col">Rating </th>
            <th scope="col">inStock </th>
                   </tr>
                   </thead> 
                  
              
                   <tbody>           

              {mobile.map( (mob) => (
            

                

                  
                     <tr>
                        <th >{mob.mname} </th>
                        <th>{mob.description} </th>
                        <th>{mob.price }</th>
                        <th>{mob.rating} </th>
                        <th>{mob.inStock }</th>
                   </tr>
                   

                   
           
                   

        ))}
        </tbody> 
                   </table>
           
        
</div>


);

}
export default MobileList;