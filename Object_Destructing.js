const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
     email: "john.doe@example.com"
}
   
//let {firstName,lastName,age,email}=user;   //one method
let {firstName,...details}=user; //another method

console.log("First name is:"+firstName);
console.log("Last name is:"+details.lastName);
console.log("email id is:"+details.email);


