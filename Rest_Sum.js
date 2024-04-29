function sumall(...args){

    console.log(args);
    let sum=0;
    for(var i of args){

        sum+=i;
    }
    return sum;

}

console.log(sumall(1,5,6,8,9,0));//with 6 parameters
console.log(sumall(12,5,64)); //with 3 parameters