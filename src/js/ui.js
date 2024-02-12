import "../css/ui.css";
import lg from '../images/logo.svg';

function renderHeader(body) {
    const header = document.createElement('header');
    const logo = createLogo();
    const login = createLogin();

    header.appendChild(logo);
    header.appendChild(login);
    body.insertBefore(header, body.firstChild);
}

function createLogo() {
    const logo = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('a');
    img.src = lg;
    title.href = 'https://silentstorm2k.github.io/Todo-List/';
    title.textContent = 'Todo List';
    logo.appendChild(img);
    logo.appendChild(title);
    return logo;
}

function createLogin() {
    const login = document.createElement('button');
    login.textContent = 'Login';
    return login;
}

function renderSideBar(body) {
    const sideBar = document.createElement('div');
    sideBar.classList.add('sideBar');
    const projects = [] //function to get all todo elements;
    while (projects.length > 0) {
        sideBar.insertBefore(projects.pop(), sideBar.firstChild);
    }
    body.insertBefore(sideBar, body.firstChild);
}

function renderContent(body) {
    const todoHolder = document.createElement('div');
    todoHolder.classList.add('todo-container');
    const todoElements = [] //function to get all todo elements;
    while (todoElements.length > 0) {
        todoHolder.insertBefore(todoElements.pop(), todoHolder.firstChild);
    }
    body.insertBefore(todoHolder, body.firstChild);
}

export default function renderUI() {
    const body = document.querySelector('body');
    renderContent(body);
    renderSideBar(body);
    renderHeader(body);
}