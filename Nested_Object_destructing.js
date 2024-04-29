const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
     email: "john.doe@example.com",
     address:{street:"JP Nagar",
              city:"Blore"}
}

let{firstName,...details}=user;
console.log("street name is:"+details.address.street);
console.log("city name is:"+details.address.city);

   