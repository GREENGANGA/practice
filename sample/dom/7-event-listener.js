// document.querySelector("#btn-clear")


// .addEventListener("click", function(){

//     const li = document.querySelectorAll("li");
//     li[1].remove();
// })

document.querySelector("#btn-clear")
.addEventListener("click", onClick)

function onClick(){
    let val;

    val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList;

    console.log(val);
}