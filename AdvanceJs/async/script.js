// async function f(){
//     return 1;
// }
// f().then(alert);

async function f(){
    return Promise.resolve(1);
}
f().then(alert); //1
//The keyword await makes Javascript wait until that promise setlles
// and return its result.


//JavaScript async/await is used for handling asynchronous operations. Here's how it works:
//The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to return a Promise.
//The await keyword is used inside an async function to pause its execution and wait for a Promise to resolve before continuing.
//When using await, execution of the surrounding async function is paused until the promise is settled (fulfilled or rejected), 
//and the value of the await expression becomes that of the fulfilled promise

async function f(){
    let promise = new Promise((resolve,reject) =>
    {
        setTimeout(()=>resolve("done!"),6000)
    });

    let result = await promise; //wait until the promise resolves

f();
    alert(result);
}
