const fruits = ["Apple", "Banana", "Cherry"];
 [a,b,c]=fruits;
 [ff,...af]=fruits;

 //first method
console.log("first fruit name is:"+a);
console.log("third fruit name is:"+c);

//second method
console.log("first fruit name is:"+ff);
console.log("last fruit name is:"+af[af.length-1]);