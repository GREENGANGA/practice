const cleTasks = document.querySelector(".clear-tasks")

// console.log("cleTasks")

// Mouse Event

// cleTasks.addEventListener("click", runEvent);
// cleTasks.addEventListener("dblclick", runEvent);
// cleTasks.addEventListener("mousedown", runEvent);
// cleTasks.addEventListener("mouseup", runEvent);
// cleTasks.addEventListener("mouseenter", runEvent);
cleTasks.addEventListener("mouseleave", runEvent);



function runEvent(e){
    console.log(`Event Type ${e.type}`);
}