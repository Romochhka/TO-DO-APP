const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const TasksList = document.querySelector('#tasksList');
const EmptyList = document.querySelector('#emptyList');

form.addEventListener('submit', addTask)

TasksList.addEventListener('click', deleteTask)

TasksList.addEventListener('click', doneTask)

function addTask (event) {
    event.preventDefault();

    const taskText = taskInput.value;

    // Проверка на пустую строку
    if (!taskText.trim()) {
        console.log("Задача не может быть пустой");
        return;
    }

    const taskHTML = `
        <li class="list-group-item d-flex justify-content-between task-item">
            <span class="task-title">${taskText}</span>
            <div class="task-item__buttons">
                <button type="button" data-action="done" class="btn-action">
                    <img src="./img/tick.svg" alt="Done" width="18" height="18">
                </button>
                <button type="button" data-action="delete" class="btn-action">
                    <img src="./img/cross.svg" alt="Delete" width="18" height="18">
                </button>
            </div>
        </li>`;

    TasksList.insertAdjacentHTML('beforeend', taskHTML);
    taskInput.value = '';
    taskInput.focus();
    if (TasksList.children.length > 1 ) {
        EmptyList.classList.add('none');
    }
}

function deleteTask (event) {

    if (event.target.dataset.action === 'delete') {
        event.target.closest('li').remove();
    }

    if (TasksList.children.length === 1 ) {
        EmptyList.classList.remove('none');
    }
}

function doneTask (event) {
    if (event.target.dataset.action === 'done') {
       const parentNode = event.target.closest('li');
       const taskTitle= parentNode.querySelector('span');
       taskTitle.classList.toggle('task-title--done');
       console.log(taskTitle);
    }
}