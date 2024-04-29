const person={firstName:'Shwetha',lastname:'Patil'};
const address={city:'Blore',state:'KA',subaddress:{
    country:'IND',
    pincode:560078,
    street:'JP Nagar'}
};

const personwithadd={...person,...address,city1:'DVG'};
console.log(personwithadd);
console.log(personwithadd.subaddress.street);

let name='swetha "s ';
let name1='data is doing well,back to normal.';
console.log(`my name is ${name1} `);
