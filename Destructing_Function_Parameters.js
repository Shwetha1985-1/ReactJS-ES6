const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
     email: "john.doe@example.com",
     address:{street:"JP Nagar",
              city:"Blore"}
}

//defining function
function extractdetails(user_det)
{
    let{...details}=user_det;

    console.log("first name is:"+details.firstName);
    console.log("email is:"+details.email);
}

//calling function
extractdetails(user);

