let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// traernos la lista de tareas de almacenamiento local//

//Funcion para agregar una tarea//
export const addTask = (task) => {
    const newtask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newtask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//funcion para eliminar una tarea//
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//funcion para actualizar la tarea//
export const toggleTask = (id) => {
    tasks = tasks.map((task) => {
        if (task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// funcion para llevar las tareas //
export const getTasks =() => tasks;