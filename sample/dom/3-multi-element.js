// document.getElementsByClassName();

const listn = document.getElementsByClassName("collection-item");

// console.log(listn);
// console.log(listn[0]);

// listn[0].style.color = "green";
// listn[2].textContent ="shalu";

// Convert HTMLCOLLECTION TO ARRAY'

// let list =Array.from(listn);

// list.forEach(function(item) {
//     console.log(item);
//     item.textContent = "ri_n";
// })

// document.querySelectorAll();

const liItems = document.querySelectorAll("li"); // NODELIST
const imgitems = document.querySelectorAll("img")// img

// console.log(liItems);

liItems.forEach(function(li){
    console.log(li)
    li.style.color="pink"
})

imgitems.forEach(function(img){
    console.log(img)
    img.style.backgroundColor ="red"
})
