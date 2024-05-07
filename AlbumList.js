import React from "react";
import { useState,useEffect } from "react";

function AlbumList(){

    //const albu=['isLoading','error'];

    const [albums, setAlbums] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 let [error, setError] = useState(null);


 useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) =>
            {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch request");
            }
    )
    .then((data) => {

        console.log(data);
        setAlbums(data);
        setIsLoading(false);
    })
    .catch((error) => {
       // console.log(error);
        setError("failed to fetch data1");
        console.log(error);
    })

    //we cannot write retrun function
   // if(isLoading){
     //     return <h1>data werrrr</h1>}

     //setError("failed to fetch data1"); with this tried to check async execution
      
}, []);

//if (error) {
  //  return <h1>{error}</h1>
//}



//if error then display error else display Loading Page-->
     
return(

     
<div>
              

{error ? <p>{error}</p>: isLoading ? <p>Loading...Page</p> :null}
            <ul>
             {albums.map((al) => (
               
                    <li key={al.userId}>{al.title}*****{al.id}</li>
                ))}
            </ul>
        </div>

     


)





}

export default AlbumList;