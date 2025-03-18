//OBJECTS
/*
 A javascript object is an entity having state and behaviour (properties and method),
 For example-car,pen,bike,chair,glass,keyboard,monitor etc.

 JS is an object-based language.Everything is an object in Javascript.
 Javascript is template based not class based. Here. we don't create class 
 to get the object.But,we direct objects.
 */
//*********CREATING OBJECTS IN JS*************//
/*
There are 3 ways -
1> By object literal
2>By creating instance of object directly (using new keyword)
3> By using an object constructor(using new keyword)
*/


//1> By object literal
emp={
    id:123,
    name:'Shyam Kumar',
    salary:2000
}
//2>By creating instance of Object

var employee= new Object();
employee.id=345
employee.name="Rajeeev Sharma"
employee.salary=3000

//3>By using object constructor
//here ,you need to create a function with arguments.Each argument value can be
//assigned in the current object property by using=> this keyword.
//The this keyword refers to the current object.

function bottle(color,capacity,material){
    this.color=color;
    this.capacity=capacity;
    this.material=material;

}
b=new bottle('blue','2 Litre','metal');

//sigleton
//object create
//object literals

const mySym=Symbol("key1")

const JsUser ={
    name:'Lavya',
    'full name':'Lavya Jain',
    [mySym]:"mykey1",
    age:18,
    location:'Jaipur',
    email:'lavya00@gmail.com',
    isLoggedIn: false,
    lastLoginDays:['Monday','Sunday']


}
console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser['full name']);
console.log(JsUser[mySym]);
//bracket notation s hi hum symbols and properties 
//name with spaces s access kr skte h. not with dot notation.

JsUser.email='lavyaJain@mail.com'
console.log(JsUser);
Object.freeze(JsUser)
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
