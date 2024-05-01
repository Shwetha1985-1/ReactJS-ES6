import React from "react";
import { useState } from "react";

function OrderStatus(){

    const [order, setOrder] = useState({
        id: 'ORD123',
        status: 'Processing',
        customer: 'John Doe',
        items: 3
        });

        function handleStatusChange(){
            
                  
                  console.log(document.querySelector('#select1').value);
                  
                  
                  order.status=document.querySelector('#select1').value; //getting selected value from user form
                  setOrder({...order,status:order.status}); //using spread operator
                  console.log(order.status);
             
             
          }

        // Rendering the  order details in component.


        return(
       
        <div>
            <h1 >Current Order Details are: <br/>Id: {order.id}<br/>Status: {order.status}
            <br/>Customer:{order.customer}  <br/>Items:{order.items}  </h1>

            <select id="select1">

                <option value="Processing">Processing</option>

                <option value="Shipped">Shipped</option>

                <option value="Delivered">Delivered</option>

            </select> &ensp; &ensp;
            <button onClick={handleStatusChange}>Update Status</button><br/><br/>


            </div>
        );
       




}

export default OrderStatus;