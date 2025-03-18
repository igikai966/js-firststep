const userEmail=[]

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}
// falsy value

//false,0,-0,   BigInt On, "",null,undefined,NaN

//truthy value
// "0",'false'," ",[],{},function(){}

 if (userEmail.length === 0) {
     console.log("Array is empty");
 }
 const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// Nullish Coalescing Operator (??): null undefined

//handling null or undefined values. It allows you to provide a default value when
//  dealing with potentially nullish values.

//syntax-
//let result = value ?? defaultValue;

let val1;//undefined
// val1 = 5?? 10  //5
// val1 = null?? 10
// // val1 = undefined??15
val1= null?? 10?? 20 //10
console.log(val1);

let userInput = null;
let defaultText = "Default Text";

let displayText = userInput ?? defaultText;
console.log(displayText); // Output: "Default Text"



