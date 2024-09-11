let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;
    if (task) {
        tasks.push(task);
        displayTasks();
        taskInput.value = "";
    } else {
        alert("Please enter value")
    }
}

function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(function(task, index) {       // [apple, banana, cherry]
        let listItem = document.createElement("li");    // <li></li>
        listItem.textContent = task;            // <li>task</li>
        taskList.appendChild(listItem);
        // taskList.prepend(listItem);
    });
}

