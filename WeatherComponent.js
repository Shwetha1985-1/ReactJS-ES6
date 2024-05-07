import React from "react";
import { useState,useEffect } from "react";
import './Wether.css';

function WeatherComponent( props){

    const dname =props.value;  //passing parameter from Parent component 'App'
    console.log(dname);

    const [weatherData, setWeatherData] = useState([
        { day: "Monday", condition: "Sunny", temperature: "22°C" },
        {day: "Tuesday", condition: "Sunny", temperature: "32°C" },
        {day: "Wednesday", condition: "Sunny", temperature: "42°C" },
        {day: "Thursday", condition: "Sunny", temperature: "39°C" },
        {day: "Friday", condition: "Thunder", temperature: "26°C" },
        {day: "Saturday", condition: "Sunny", temperature: "22°C" },
        {day: "Sunday", condition: "Breeze", temperature: "22°C" }
        ]);


       
        
       

        return(

            <div>

{weatherData.filter(user=>user.day.includes(dname)).map((data) =>

(
    <p class="paragrpahs"><span>{data.day}**********{data.condition}***********{data.temperature}</span></p>
))

    }
            
                     </div> 





            
              
      
       



        );

        


};

export default WeatherComponent;