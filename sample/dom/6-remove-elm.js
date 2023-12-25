// Remove Element
const list =document.querySelectorAll("li");

// list[0].remove();
// list[1].remove();

// Classes and Attr
const firstli = document.querySelector("li:first-child")
const lastli = firstli.children[0];

let val;

val = lastli.classList;
// val = lastli.className;
// val = lastli.classList[1];

// DOMTOKENLIST

val = lastli.classList.add("link-test");
val = lastli.classList.remove("test");
val = lastli.classList.contains("link-test");

console.log(val);

