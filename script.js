// Elementos do HTML/ Elements of HTML
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

// Array de tarefas/ Array of tasks

let todos = JSON.parse(localStorage.getItem('@todoApp')) || [];

function renderTasks(){
    listElement.innerHTML = '';


    todos.map((todo) => {
        let liElement = document.createElement('li');
        let textElement = document.createTextNode(todo);
        let linkElement = document.createElement('a');
        let linkText = document.createTextNode('Excluir');

        let position = todos.indexOf(todo);
        
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', `deleteTodo(${position})`);
        linkElement.appendChild(linkText);
        liElement.appendChild(textElement);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}


// Função para renderizar as tarefas/ Function to render tasks
function addTodo(){
    if(inputElement.value === ''){
        alert('Digite algo!');
        inputElement.focus();
        return false;
    }
    else{
        let newTask = inputElement.value;
        todos.push(newTask);
        inputElement.value = '';

        saveToStorage();
        renderTasks();
    }
}


// Função para deletar tarefas/ Function to delete tasks
function deleteTodo(position){
    todos.splice(position, 1);
    saveToStorage();
    renderTasks();
}

function saveToStorage(){
    localStorage.setItem("@todoApp",JSON.stringify(todos))
}



buttonElement.onclick = addTodo;
renderTasks();