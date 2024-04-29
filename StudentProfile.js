const studentProfile={
    firstName:"Shwetha",
    lastName:"Patil",
    class:{name:"Introduction to JavaScript",
           teacher:{name:"Sharada P",
                    email:"sp@gmail.com"}},
    grades:{maths:"A",
    science:"A+",Social:"C"}

}
let full_name=studentProfile.firstName+" "+studentProfile.lastName;
console.log("Student Full Name is:"+full_name);
console.log("Class Name is:"+studentProfile["class"]["name"]);//Print the class name using bracket notation
console.log("Teacher's email is:"+studentProfile.class.teacher["email"]); //print using both dot and bracket
studentProfile.grades["maths"]='A+'; // Change the grade for maths

console.log("updated grade is:"+studentProfile.grades["maths"]); //upated grade
