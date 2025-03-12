// const fname="Lavya"
// const lname="Jain"
// const fullName= fname + " " + lname;
// console.log(fullName);
// const repos=4
// //However this method is obsolete and should be avoided
// //Instead we use backslaches 
// console.log(`Hello my name is ${fname} ${lname} and my repoCount is ${repos}`);

const gameName = new String('Lavya-hc-com')
const FameName = new String('Lavya-panda-play')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(FameName.anchor());
console.log(FameName.fontcolor(300));

//String literals can be specified using single or double quotes, which are treated identically, or using the backtick character `.
//  This last form specifies a template literal:
//  with this form you can interpolate expressions.

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('c'));

const newString=gameName.substring(0,4)

console.log(newString);
const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne="   Lavya   "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(FameName.split('-'));
console.log(FameName.replace('-','#'));


