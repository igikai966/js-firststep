//createElement()
//appendChild()
// textContent
//innerHTML
//after()
//append()
//prepend()
//insertAdjacentHTML()
//replaceChild()
//insertBefore()
//insertAfter()
let div=document.createElement('div');
div.id='content';
div.innerHTML= '<p>Create Element example <p>';
document.body.appendChild(div);

let li=document.createElement('li');
li.textContent ='About us';

const menu=document.querySelector('#menu');
menu.appendChild(li);


//DocumentFragment

const list=document.querySelector('ol')

const libs=['React','Meteor','Polymer'];
//using map() method to convert strings to array
const items=libs.map((lib)=>
    {const item=document.createElement('li')
    item.innerText =lib;
    return item;}

);
list.lastChild.after(...items);