// SELECTORS

const taskList = document.querySelector(".task-list");
const input = document.querySelector("input");
const addButton = document.querySelector(".add-task");
const removeAllButton = document.querySelector(".total-remove-btn");

// EVENT LISTENERS

addButton.addEventListener("click", handleAddTask);
removeAllButton.addEventListener("click", handleRemoveAll);

//HANDLERS

function handleAddTask(e){
    e.preventDefault();
    if(input.value !== ""){
        let task = document.createElement("div");
        task.classList.add("task");
        taskList.appendChild(task);
        let taskState = document.createElement("div");
        taskState.classList.add("taskState");
        taskState.innerHTML = "<i class='fas fa-check'></i>";
        task.appendChild(taskState);
        let taskTitle = document.createElement("p");
        taskTitle.classList.add("taskTitle");
        task.appendChild(taskTitle);
        taskTitle.textContent = input.value;
        let taskRemove = document.createElement("div");
        taskRemove.classList.add("taskRemove");
        taskRemove.innerHTML = "<i class='fas fa-times'></i>"
        task.appendChild(taskRemove);
        input.value = "";
        task.addEventListener("click", (e) => {
            if(!e.target.classList.contains("fa-times")){
                task.classList.toggle("completed");
            } else {
                task.remove();
            }
        })
    }
}

function handleRemoveAll(e){
    let tasks = taskList.querySelectorAll(".task");
    tasks.forEach((task) => task.remove());
}