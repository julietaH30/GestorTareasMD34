import "./styles.css";
import { addTask, deleteTask, toggleTask} from "./task";
import { renderTask } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
    renderTask();

    document.getElementById("task-from"),addEventListener("submit", (e) => {
        e.preventDefault();
        const taskImput = document.getElementById("task-input").value;
    });
});