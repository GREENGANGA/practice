let val;

const list =document.querySelector(".collection");

val = list.childNodes;
val = list.childNodes[0];

// Get children element nodes

val = list.children;
val = list.children[0];

// First Child

val = list.firstChild;
val = list.firstElementChild;

// Last Child

val = list.lastChild;
val = list.lastElementChild;

// count child element

val = list.childNodes.length;
val = list.childElementCount;

// Get parent Node

val =list.parentNode;
val =list.parentNode.parentNode.parentNode;
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
val = list.parentElement;

// get sibling

val = list.previousElementSibling;
val = list.nextElementSibling;
val = list.nextElementSibling;

console.log(val);