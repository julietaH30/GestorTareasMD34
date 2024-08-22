import { getTasks } from "./task";

//funcion para mostrarle al usuario las tareas y lo que hacemos con ellas//
export const renderTasks = () => {
    const TaskList = document.getElementById("task-list");
    TaskList.innerHTML = "";
    const tasks = getTasks();
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id)

        // añadir clase solo si la tarea esta completada //
        if (task.completed === true) {
            li.classList.add("completed");
        }
        li.innerHTML = `
        ${task.text}
        <button class= "delete"> Eliminar </button> 
        <button class ="toggle"> ${task.completed === true? "Deshacer" : "completar" }  </button>
        `;
        TaskList.appendChild(li);
    });
};