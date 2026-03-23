const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const statusString = document.getElementById('statusString');

function updateStatusString() {
    const items = todoList.querySelectorAll('li');
    let done = 0, notDone = 0;
    items.forEach(li => {
        const checkbox = li.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked) done++;
        else notDone++;
    });
    statusString.textContent = `Выполнено: ${done}, Не выполнено: ${notDone}`;
}

function addTask() {
    const taskValue = input.value.trim();
    if (taskValue === "") return;
    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
        updateStatusString();
    });

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = taskValue;

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '🗑';
    delBtn.className = 'delete-btn';
    delBtn.onclick = () => {
        todoList.removeChild(li);
        updateStatusString();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);

    input.value = "";
    updateStatusString();
}


addBtn.addEventListener('click', addTask);


input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});


updateStatusString();