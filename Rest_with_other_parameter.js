function userinfo(fname,lname,...details){

    userdetail={
        fullname:fname+""+lname,
        hobbies:details
        

    }

    return userdetail;
}

// return an object containing the name and array of hobbies

console.log(userinfo("shwetha","patil",["reading","writing","watching"]));

console.log(userinfo("Purvi","G",["running","jogging","drawing","cleaning"])); //another example