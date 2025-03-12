// console.log( 2>1);
// console.log( 2>=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2!=1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null >0); //false
// console.log( null ==0);  //false
// console.log(null >=0);  //true

// console.log(undefined ==0);  //false
// console.log(undefined >0);   //false
// console.log( undefined <0);  //false

// // === strict equalto comparison operator
console.log("2" ===2);  //false

//**************** STACK AND HEAP CONCEPT************/

//Stack(stores primitive data)
//Heap( stores reference data)

let myYoutubechannel="hiteshchoudharydotcom"
let anothername= "lavyadotcom"

console.log(myYoutubechannel);
console.log(anothername);

let userOne={
    name:'Lavya',
    age:12

}
let userTwo=userOne   //heap
userTwo.age=12
console.log(userTwo);
console.log(userOne);

let numberOne=11  //stack
let numberTwo=numberOne;
numberTwo=14
console.log(numberOne);
console.log(numberTwo);


