const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const TasksList = document.querySelector('#tasksList');

form.addEventListener('submit', function (event) {
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
});
