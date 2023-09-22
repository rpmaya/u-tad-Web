function addTask() {
    const taskInput = document.getElementById("taskInput").value;

    if (taskInput === "") {
        alert("Por favor, ingrese una tarea.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `${taskInput} <button onclick="removeTask(this)">Eliminar</button> <button onclick="toggleComplete(this)">Completar</button>`;
    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}

function removeTask(buttonElement) {
    const li = buttonElement.parentElement;
    li.remove();
}

function toggleComplete(buttonElement) {
    const li = buttonElement.parentElement;
    if (li.classList.contains("completed")) {
        li.classList.remove("completed");
    } else {
        li.classList.add("completed");
    }
}
