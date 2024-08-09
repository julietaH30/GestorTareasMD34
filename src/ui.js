import{ getTasks } from "./task";

//funcion para mostrar al usuario lo que esta detras del programa las tareas
export const renderTasks = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML ="";
    const tasks = getTasks();
    tasks.forEach((task)=> {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        //añadir clase solo a las tareas completadas
        if(task.completed === true) {
            li.classList.add("completed");
        }

        li.innerHTML = `
        ${ task.tex }
        <button class="delete"> Eliminar </button> 
        <button class="toggle">${ task.completed === true ? "Deshaser" : "Completar" } </button>
        `;

        taskList.appendChild(li);
    
});
};