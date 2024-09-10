//convert form data to JSON
localStorage.getItem('theTask');
localStorage.getItem('Title');
localStorage.getItem('description');
localStorage.getItem('project');
localStorage.getItem('start');
localStorage.getItem('finish');
localStorage.getItem('notes');
localStorage.getItem('prioroty');

const Form = document.getElementById("createtask");
let project ;
let title ;
let description ;
let startT ;
let finishT ;
let prioroty ;
let notes ;

export const newTaskRow = document.createElement('div');
    newTaskRow.id = "newTaskRow";

 export const taskComplete = document.createElement('button');
    taskComplete.id = 'taskComplete';
    taskComplete.textContent = 'Done'
    

 export function formFun(){Form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(Form);


    
    const data = Object.fromEntries(formData);


    const dataSerialized = JSON.stringify(data)

    localStorage.setItem('Task', dataSerialized);
    

    const dataDeserialized = JSON.parse(localStorage.getItem('Task'));

    project = dataDeserialized.project;
    title = dataDeserialized.tasktitle;
    description = dataDeserialized.description;
    startT = dataDeserialized.starttime;
    finishT = dataDeserialized.finishtime;
    prioroty = dataDeserialized.prioroty;
    notes = dataDeserialized.notes;

    localStorage.setItem('Title', title);
    localStorage.setItem('description', description);
    localStorage.setItem('project', project);
    localStorage.setItem('start', startT);
    localStorage.setItem('finish', finishT);
    localStorage.setItem('notes', notes);
    localStorage.setItem('prioroty',prioroty);
    



    console.log(project);
console.log(title);
console.log(description);
console.log(startT);
console.log(finishT);
console.log(prioroty);
console.log(notes);


    

    const Title = document.createElement('h3');
    Title.textContent = localStorage.getItem('Title');
    Title.id = 'child';
    newTaskRow.appendChild(Title);

    const descriptionF = document.createElement('p');
    descriptionF.textContent = description;
    descriptionF.id = 'child1';
    newTaskRow.appendChild(descriptionF);

    const startTF = document.createElement('p');
    startTF.textContent = startT;
    startTF.id = 'child2';
    newTaskRow.appendChild(startTF);

    const finishTF = document.createElement('p');
    finishTF.textContent = finishT;
    finishTF.id = 'child3';
    newTaskRow.appendChild(finishTF);

    const priorotyF = document.createElement('p');
    priorotyF.textContent = prioroty;
    priorotyF.id = 'child4';
    newTaskRow.appendChild(priorotyF);

    const notesF = document.createElement('p');
    notesF.textContent = notes;
    notesF.id = 'child5';
    newTaskRow.appendChild(notesF);


    const ProjectF = document.createElement('p');
    ProjectF.textContent = project;
    ProjectF.id = 'child6';
    newTaskRow.appendChild(ProjectF);

    newTaskRow.appendChild(taskComplete);

    
    
});
}



