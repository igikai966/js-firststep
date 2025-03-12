const score= 400
// console.log(score);

const balance=new Number(100)
// console.log(balance);

// console.log(balance.toString().length); //number ko string 
// mn convert krlo and kyuki string mn 
// convert krlia h toh uski length vgera vgeraa string ki
//  properties use krskte

// console.log(balance.toFixed(1));//100.0

// const otherNumber=123.456
// console.log(otherNumber.toPrecision(3));//123
// console.log(otherNumber.toPrecision(5));//123.46

// const hundreds= 1000000000
// console.log(hundreds.toLocaleString());//1,000,000,000
// console.log(hundreds.toLocaleString('en-IN'));//1,00,00,00,000

// ***************MATHS****************//
console.log(Math);
console.log(Math.PI);
console.log(Math.SQRT2);

console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(12,45,22,67));
console.log(Math.min(12,14,83,23,9));

//important math prototype
console.log(Math.random());
console.log((Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);
