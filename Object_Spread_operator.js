let object1={name:"Pinky",
         age:8  ,
         class:2
}

let object2={name:"Ruby",
         age:9  ,
         class:3
}

let combinedObject ={...object1,...object2};

console.log("merged object");
console.log(combinedObject); // properties from `object2` overwrite those from `object1`.

console.log(" object after adding new property");
combinedObject ={...object1,roll_num:'1234',...object2};//new property to `combinedObject` using the spread operator


console.log(combinedObject);

