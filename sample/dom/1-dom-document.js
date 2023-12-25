let val;

val=document;
val=document.all;
val=document.doctype;
val=document.body;
val=document.URL;
val=document.domain;

// form

val=document.forms;
val=document.forms[0];
val=document.forms[0].id;

// link

val=document.links;
val=document.links[0];
val=document.links[0].className;
// val=document.links[0].classList;

// image

// val=document.images
// val=document.images[1]
// val=document.images[0].src;

// scripts

// val=document.scripts
// val=document.scripts[0]
// val=document.scripts[0].getAttribute('src');
// val=document.scripts[0].src;

// console.log(val);

let scripts = document.scripts;

let scriptsArray = Array.from(scripts);

// for(let i=0; i<scripts.length; i++){
//     console.log(scripts[i])
// }

// scriptsArray.forEach(function(script,index,array){
//     console.log(index,script);
//     console.log(array);
// })

