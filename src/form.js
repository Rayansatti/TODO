import { mainPage } from "./dom";

// Initialize tasks array from localStorage or create a new one
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const Form = document.getElementById("createtask");

export const allTasks = document.createElement('div');
allTasks.id = 'allTasks';
mainPage.appendChild(allTasks);

let taskCounter = tasks.length; // Counter based on existing tasks

export function formFun() {
    Form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(Form);
        const data = Object.fromEntries(formData);
        const dataSerialized = JSON.stringify(data);

        // Add new task to tasks array
        tasks.push(data);
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save all tasks to localStorage

        createTaskRow(data);
        taskCounter++; // Increment task counter for unique IDs
    });

    // Load existing tasks from localStorage
    tasks.forEach(createTaskRow);
}

function createTaskRow(data) {
    const { project, tasktitle, description, starttime, finishtime, prioroty, notes } = data;

    const newTaskRow = document.createElement('div');
    newTaskRow.id = `task-${taskCounter}`; // Unique ID for each task

    const Title = document.createElement("h3");
    Title.textContent = tasktitle;
    newTaskRow.appendChild(Title);

    const taskCompleteClone = taskComplete.cloneNode(true);
    taskCompleteClone.id = `taskComplete-${taskCounter}`; // Unique ID
    newTaskRow.appendChild(taskCompleteClone);

    const descriptionF = document.createElement('p');
    descriptionF.textContent = description;
    newTaskRow.appendChild(descriptionF);

    const startTF = document.createElement('p');
    startTF.textContent = starttime;
    newTaskRow.appendChild(startTF);

    const finishTF = document.createElement('p');
    finishTF.textContent = finishtime;
    newTaskRow.appendChild(finishTF);

    const priorotyF = document.createElement('p');
    priorotyF.textContent = prioroty;
    newTaskRow.appendChild(priorotyF);

    const notesF = document.createElement('p');
    notesF.textContent = notes;
    newTaskRow.appendChild(notesF);

    const ProjectF = document.createElement('p');
    ProjectF.textContent = project;
    newTaskRow.appendChild(ProjectF);

    allTasks.appendChild(newTaskRow);
}

export const taskComplete = document.createElement('button');
taskComplete.id = 'taskComplete';
taskComplete.textContent = 'Done';

// Event delegation for task completion and deletion
allTasks.addEventListener('click', (e) => {
    if (e.target && e.target.matches('[id^="taskComplete-"]')) {
        const taskId = e.target.id.replace('taskComplete-', ''); // Get task ID
        const taskRow = document.getElementById(`task-${taskId}`);

        console.log(`Task ${taskId} completed!`);

        // Remove the task from localStorage
        tasks.splice(taskId, 1); // Remove task from array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Update localStorage

        // Remove task row from DOM
        if (taskRow) {
            taskRow.remove();
        }
    }
});
