const ul = document.querySelector(".collection")

ul.addEventListener("click", deleteItem)

// function deleteItem(e) {
//     if(e.target.parentElement.className === "delete-item secondary-content"){
//         // console.log(e.target.parentElement.parentElement);
//         e.target.parentElement.parentElement.remove();
//     }
//     // console.log(e.target.parentElement.parentElement);
// }

function deleteItem(e) {
    if(e.target.parentElement.classList.contains("delete-item")){
        e.target.parentElement.parentElement.remove();
    }
    // console.log(e.target.parentElement.parentElement)
    console.log(e.target.parentElement.classList)
}