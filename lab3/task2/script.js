const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function addTask() {
    const taskValue = input.value.trim();
    
    if (taskValue === "") return; 
    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = taskValue;

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '🗑';
    delBtn.className = 'delete-btn';
    delBtn.onclick = () => todoList.removeChild(li);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);

    input.value = "";
}

// Event Listeners
addBtn.addEventListener('click', addTask);

// Allow "Enter" key to add tasks
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});