//**********What about This ? */
/*
The handling of this is also different in arrow functions compared to regular functions.
//In arrow,function, there is no binding of this.
//In regular functions =>  /* This keyword represented the object
that called the function,which could be the window, the document, a button or whatever.*/

//1> In js, this keyword refers tp an object.
//2>  The this keyword refers to different objects depending on how it is used:
/* 
In object method => this refers to the object
Alone => this refers to the global object
In a function => this refers to the global object.
In a function, in strict mode => this is undefined.
In an event => this refers to the element that received the event.
Methods like call(), apply(), bind() => can refer this to any object. */

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    //this in a method
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  //this alone refers to global object- for browser window-[object window]
  let x=this;
//this in strict mode does not allow binding of object
//it is undefined
"use strict";
function myFunction2(){
    return this;
}
// console.log(myFunction2())


//Call method-(inbuilt function)
//=> it is used to call a method with an object as an argument.
const car={
   
    random : function(){
        return this.name + " "+this.color;
    }
}
const car1={
    name:"Fiat",
    color:"white"
}
const car2={
    name:"BMW",
    color:"black"
}

console.log(car.random.call(car1)); // Fiat white
//here, random method of car is called ,using it on car1 object.

//call method with arguments
const insaan = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(insaan.fullName.call(person1, "Oslo", "Norway"));

  /**
   * 
   * ? apply method is same as that call()
   * the only difference between them is-
   * The call() method takes arguments seperately whereas 
   * the apply() method takes arguments as an array.
   * in above example- 
   */
  console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));

  // In bind() method, an object can borrow a method from another object.
  //The example below creates 2 objects (person and member).

//The member object borrows the fullname method from the person object:
const person3 = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person3.fullName.bind(member);
console.log(fullName);
  
  

  