export const completeTask = "complete task";

import {newTaskRow} from './form';
import {taskComplete} from './form';

const doneButton = taskComplete;

export const deletTaskBtn = document.createElement('button');
    deletTaskBtn.id = "deletTaskBtn";
    deletTaskBtn.textContent = 'Delete';

export let completeT = doneButton.addEventListener('click', () => {
    let child = document.getElementById('child');
    let child1 = document.getElementById('child1');
    let child2 = document.getElementById('child2');
    let child3 = document.getElementById('child3');
    let child4 = document.getElementById('child4');
    let child5 = document.getElementById('child5');
    let child6 = document.getElementById('child6');
    child1.remove();
    child2.remove();
    child3.remove();
    child4.remove();
    child5.remove();
    child6.remove();
    child.style.textDecoration = "line-through";
    doneButton.remove();

    

    newTaskRow.appendChild(deletTaskBtn);

    
});