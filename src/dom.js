const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const colseButton = document.querySelector("dialog button");

import { newTaskRow } from "./form";
import { taskComplete } from "./form";
//opens the dialog

const show = showButton.addEventListener("click", () => {
    dialog.showModal();
});


const colse =  colseButton.addEventListener("click", () => {
    dialog.close();
})

//side bar
const hamburger = document.getElementById("hamburger");
const hamburgerClose = document.getElementById("hamburger-close");
const sidebar = document.getElementById("sidebar");
const header = document.querySelector("h1");
const sidebarItem = document.getElementsByClassName("sidebar-item");
const mainPage = document.getElementById("mainpage");



let menuOpen = false;

function openMenu(){
    menuOpen = true;
    sidebar.style.width = '250px';
    header.style.marginLeft = '255px';
    header.style.transition = '0.5s';
    mainPage.style.marginLeft = '350px'
    mainPage.style.transition = '0.5s'
}

function closeMenu(){
    menuOpen = true;
    sidebar.style.width = '0px';
    header.style.marginLeft = '5px';
    header.style.transition = '0.5s';
    mainPage.style.transition = '0.5s'
}

hamburger.addEventListener('click', () => {
    if(!menuOpen) {
        openMenu();
    }
});

hamburgerClose.addEventListener('click', () => {
    if(menuOpen) {
        closeMenu();
    }
});


//dark mode

let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
    console.log('enabled')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');

    localStorage.setItem('darkMode', null);
}


if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log('enabled')
    } else {
        disableDarkMode();
        console.log('disabled')
    }
});

//new task

const newTask = document.createElement("div");
newTask.id = "newtask";
mainPage.appendChild(newTask);
newTask.appendChild(newTaskRow);

// all tasks
export const allTasks = document.createElement('div');
allTasks.id = 'allTasks';

const eachTask = document.createElement('div');
eachTask.id = 'eachTask';
eachTask.textContent = localStorage.getItem('Task');

eachTask.appendChild(taskComplete);

allTasks.appendChild(eachTask);