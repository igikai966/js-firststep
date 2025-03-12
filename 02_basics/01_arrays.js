//Arrays

const myArray=[0,1,2,3,4,5]
const myHeros=["shaktiman","naagraj"]

const myArray2= new Array(1,2,3,4)
console.log(myArray);
console.log(myHeros[1]);

//Array Properties for javascript
/*
1> Arrays are resizable 
2> contain mix of different data types
3> not associative(index is used to access array elements)
4>index must be non-negative
5>zero-indexed
6> array-copy operations se- shallow copies are created and not deep
//heap mn store hote h by reference
*/

//Array built-in methods

//join(),push(),pull(),length,slice()
// splice()

const fruits=[]  //empty array
fruits.push("banana","apple","peach");
console.log(fruits.length); //3

//If our index is outside the boundary, then 
//the engine will autoaticaly update the array length property

fruits[5]="mango";
console.log(fruits[5]); //'mango'
console.log(Object.keys(fruits)); // ['0','1','2','5']
console.log(fruits.length); //6

//Increasing the length extends the array byadding empty slots
//without creating any new elements-not even undefined.

fruits.length=10; 
console.log(fruits); //['banana','apple','peach',empty *2,'mango',empty*4]
console.log(Object.keys(fruits));// ['0','1','2','5']
console.log(fruits[8]);// undefined

//Decreasing the length prperty does,however,delete elemets

//Array Methods
const colors=['red','yellow','green','blue','white'];
colors[5]='purple'
colors.forEach((item,index)=>{console.log(`${index} : ${item}`);});
colors.reverse();

const array1=['a','b','c','d']
for(const [index,element] of array1.entries()){
    console.log(index,element);
}

const array2=[12,13,14];
const firstElement=array2.shift();
console.log(firstElement);
console.log(array2);
//shift() removes the first element from the array and returns the first element
console.log(array2.unshift(9));
console.log(array2);
//unshift() method of Array instances adds the specified elements to the beginning of the array and returns the new length of the array
array2.pop()//last eleement ko remove krta h
console.log(array2);
array2.push(2) //last mn 2 add krdega
console.log(array2);
console.log(array2.includes(7));
console.log(array2.indexOf(9));

//slice and spice
//The slice() method of Array instances returns a shallow copy of a portion of an array
//into a new array selected from start to end (end not included)
//where start and end represent the index of items in the array.
//the original array will not be modified.

const animals=['ant','camel','dog','cat','cow','elephant']

console.log(animals.slice(2));  
//[ 'dog', 'cat', 'cow', 'elephant' ]
console.log(animals.slice(2,4));
//[ 'dog', 'cat' ]
console.log(animals.slice(-2));
//[ 'cow', 'elephant' ]
console.log(animals.slice(2,-1));
//[ 'dog', 'cat', 'cow' ]
console.log(animals.slice());
//[ 'ant', 'camel', 'dog', 'cat', 'cow', 'elephant' ]

//   ['L','A','V','Y','A'] ==> [-5,-4,-3,-2,-1]

//The splice() method is the copying verson of spice() method of Arrays.
//It returns a new array with some elements removed and/or replaced at a given index.

/*
Syntax
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2,  …, itemN)
 */

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]



