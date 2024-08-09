/*traernos la lista de tareas del almacenamiento */
let task = JSON.parse(localStorage.getIem("tasks")) || [];
//función para agregar una tarea
//esta es una función expresada la palabra export sirve para mover algo de un archivo a otro 
//funciones flecha => 
export const addTask = (task) =>{
    const newTask = {
        id: Date.now(),
        text: task,
        compleated: false,
    };
    task.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//función para eliminar una tarea 
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks))
};
//paseInt convierte datos flotantes en enteros (dato que queremos convertir)
//funcion para actualizar las tareas
export const toggleTask = (id) => {

    task = tasks.map((task) => {
        if(task.id === parseInt(id)){
            task.complete = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
//funcion para llevar las tareas
export const getTask = () => tasks;