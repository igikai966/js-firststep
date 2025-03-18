const user={
    username: "Lavya",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)//prints the whole user object

    }

}
// user.welcomeMessage()
user.username="Pragya"
// console.log(user.username);//Pragya

// console.log(this);//{} current object is empty
// user.welcomeMessage();

function chai(){
    let username ="Lavya"
    console.log(this.username);
}
chai() //undefined

const chai2 =function(){
    let username='Lavya'
    console.log(this)
}

//*************ARROWS *************** *//
//Arrows allows us to write shorter function syntax.
//? It was introduced in ES6
let myFunction =(a,b) => a*b;

//Before arrow
hello= function(){
    return "Hello world";
}

//function ko replace krdo with arrow
// and agr function mn only 1 statement ,thrn no need to write return also.remove return and remove brackets.


//AFTER ARRow fn
hello =() => "hello world";

helloji =(val) =>"Hello" + val;
//In fact, if you have only one parameter, you can skip the parentheses as well:
hello =val =>"Hello"+val;