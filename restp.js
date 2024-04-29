function total(x,y,z,p){

    return x+y+z+p;
}

var args = [0,1,2,4,8];
let result=total(...args);
console.log(result);

let arr1=[1,2,3];
let arr2=[...arr1,6,7,8];

console.log(arr2);