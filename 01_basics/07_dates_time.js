//Dates

let myDate =new Date()
console.log(typeof myDate);//object
console.log(myDate);//2025-03-12T07:24:21.615Z
console.log(myDate.toString());//Wed Mar 12 2025 07:24:21 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString());//2025-03-12T07:28:18.408Z
console.log(myDate.toJSON());//2025-03-12T07:28:18.408Z
console.log(myDate.toLocaleDateString());//3/12/2025
console.log(myDate.toLocaleString());//3/12/2025,7:28:18 AM
console.log(myDate.toString());//Wed Mar 12 2025 07:28:18 GMT+0000 (Coordinated Universal Time)

//Months-0 based indexing
// dates- 1to 31
//year, month,date,hour,minute

let myCreatedDate =new Date(2025,2,13,7,8);
console.log(myCreatedDate.toString());
let myCreatedDate2=new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString());//1/14/2023, 12:00:00 AM

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time `
newDate.toLocaleString('default',{
    weekday: "long"
})