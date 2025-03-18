const tinderUser =new Object()// singelton or singeltion object

const tinderUser1={} // non-singletopn object
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn= false

console.log(tinderUser);

const regularUser = {
    email:'some@gmail.com',
    fullname: {
        userfullname:{
            firstname:'Lavya',
            lastname:'Jain'
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3={obj1,obj2}
const obj3= {...obj1,...obj2}
console.log(obj3);

const users =[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:'b@gmail.com'
    },
    {
        id:1,
        email:'c@gmail.com'
    }
]
users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:'js in hindi',
    price:'999',
    courseInstructor:'Hitesh Chaudhary'

}
course.courseInstructor

const{courseInstructor: instructor}=course
console.log(instructor);

{
    // 'name':'Lavya',
    // 'coursename':'js in hindi',
    // 'price':'free'

}
[
    {}
]
