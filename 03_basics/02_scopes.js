var cat=300
let dog=100
const bat=200
d=900 //number
if(true){
    let a=10 //cannot be accesd outside the function
    const b=20
    var c=90
    // console.log("Inner a:",a);
}
// console.log(a); //error
// console.log(b); //error
// console.log(c); //90 global scope
// console.log(d);
// console.log(typeof d);


function one(){
    const username="Lavya"
    // console.log(username)

    function two(){
        const website = "youtube"
         //no output
    }
   
    // console.log(website);

    two()
}
console.log(website);
// **************** intresting ***********//

console.log(addone(5))
function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}


