const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

const createTaskItem = task => {
    // Создаем основной контейнер задачи
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.setAttribute('data-task-id', task.id);

    // Создаем внутренний контейнер
    const mainContainer = document.createElement('div');
    mainContainer.className = 'task-item__main-container';

    // Создаем контейнер для основного содержимого
    const mainContent = document.createElement('div');
    mainContent.className = 'task-item__main-content';

    // Создаем форму с чекбоксом
    const checkboxForm = document.createElement('form');
    checkboxForm.className = 'checkbox-form';

    const checkboxInput = document.createElement('input');
    checkboxInput.className = 'checkbox-form__checkbox';
    checkboxInput.type = 'checkbox';
    checkboxInput.id = `task-${task.id}`;
    if (task.completed) {
        checkboxInput.checked = true;
    }

    const checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = `task-${task.id}`;

    checkboxForm.appendChild(checkboxInput);
    checkboxForm.appendChild(checkboxLabel);

    // Создаем текст задачи
    const taskText = document.createElement('span');
    taskText.className = 'task-item__text';
    taskText.textContent = task.text;

    // Добавляем чекбокс и текст в основной контент
    mainContent.appendChild(checkboxForm);
    mainContent.appendChild(taskText);

    // Создаем кнопку удаления
    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-item__delete-button default-button delete-button';
    deleteButton.textContent = 'Удалить';

    // Добавляем основной контент и кнопку удаления во внутренний контейнер
    mainContainer.appendChild(mainContent);
    mainContainer.appendChild(deleteButton);

    // Добавляем внутренний контейнер в основной элемент задачи
    taskItem.appendChild(mainContainer);

    return taskItem;
}

const renderTasks = () => {
    const tasksList = document.querySelector('.tasks-list');
    tasksList.innerHTML = ''; // Очищаем список перед перерисовкой

    tasks.forEach(task => {
        const taskItem = createTaskItem(task);
        // Добавляем задачу в список
        tasksList.appendChild(taskItem);
    });
}

renderTasks();

const createTaskForm = document.querySelector('.create-task-block');
createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const { target } = event;
    const taskNameInput = target.taskName;
    const taskText = taskNameInput.value.trim();
    const newTask = {
        id: Date.now().toString(),
        completed: false,
        text: taskText
    };
    tasks.push(newTask);
    renderTasks();
});