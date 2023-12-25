// create Element
const li = document.createElement('li');

// add class Name
li.className = "collection-item";

// add id
li.id="sree";

// add content
// li.textContent = "List item 6";

// create append textnode
li.appendChild(document.createTextNode("List Item 6"));

// createElement
const a=document.createElement("a");

// add class
a.className = "delete-item secondary-content test"

// append a to li
li.appendChild(a);

// icon to a
a.innerHTML=`<i class="fa fa-remove"></i>`;

// li to ul link
document.querySelector(".collection").appendChild(li);



const li1 = document.createElement("li");
li1.className = "collection-item";
li1.id="sree";
li1.appendChild(document.createTextNode("Sree!"));

const a2 = document.createElement("a");
li1.appendChild(a2);

a2.className = "delete-item secondary-content test"

a2.innerHTML = `<i class="fa fa-remove"></i>`;

document.querySelector(".collection").appendChild(li1)




// console.log(li1);
