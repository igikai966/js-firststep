function sayMyName(){
    console.log("L");
    console.log("A");
    console.log("V");
    console.log("Y");
    console.log("A");
    
}

sayMyName()

//function to add two numbers
function addTwoNumbers(number1 , number2)
{
    return number1 + number2
}

const result=addTwoNumbers(2,4)
console.log( "Result:" ,result);

function loginUserMessage( username ="sam"){
    if(!username){
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Lavya"));
console.log(loginUserMessage("Shreyansh"));

function calculateCartPrice(val1,val2,val3,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))

const user ={
    username: "Lavya",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleObject(user)
handleObject({
    username: "sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));

//*Functions must be in scope when they are called, 
// but the function declaration can be hoisted (appear below the call in the code). 
//* The scope of a function declaration is the function in
//  which it is declared (or the entire program, if it is declared at the top level).

//Function arguments can be=> strings,numbers, or even objects

//Recursive function
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(1)); // 1
  console.log(factorial(2)); // 2
  console.log(factorial(3)); // 6
  console.log(factorial(4)); // 24
  console.log(factorial(5)); // 120

  //There are other ways to call functions.
  // ! There are often cases where a function needs to be called dynamically, 
  // or the number of arguments to a function vary,
  //  or in which the context of the function call needs to be set to a specific object determined at runtime.

  
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
//*here ,output will be generated without any error,
//even though function is declared after calling it.
//~In javascript, it is possible , but not in C++, where linewise execution takes place.
/*?the JavaScript interpreter hoists the entire function declaration to the top of the current scope
*/
//^Function hoisting only works with function declarations — not with function expressions. The following code will not work:
// console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
// const square = function (n) {
//   return n * n;
// };

