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

const createTaskForm = document.querySelector('.create-task-block');
const tasksList = document.querySelector('.tasks-list');
let currentTaskIdToDelete = null;

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

const showError = (message) => {
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message-block';
    errorElement.textContent = message;

    createTaskForm.appendChild(errorElement);
}

const removeError = () => {
    document.querySelectorAll('.error-message-block').forEach(element => element.remove());
}

const validateTaskInput = (taskText) => {
    if (!taskText) {
        showError('Название задачи не должно быть пустым');
        return false;
    }

    if (tasks.some(task => task.text === taskText)) {
        showError('Задача с таким названием уже существует.');
        return false;
    }

    return true;
}

const openModal = (taskId) => {
    currentTaskIdToDelete = taskId;
    const modal = document.querySelector('.modal-overlay');
    modal.classList.remove('modal-overlay_hidden');
}

const closeModal = () => {
    const modal = document.querySelector('.modal-overlay');
    modal.classList.add('modal-overlay_hidden');
    currentTaskIdToDelete = null;
}

const confirmDelete = () => {
    if (currentTaskIdToDelete) {
        // Удаляем задачу из массива
        const taskIndex = tasks.findIndex(task => task.id === currentTaskIdToDelete);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
        }
        
        // Перерисовываем список задач
        renderTasks();
        
        // Закрываем модальное окно
        closeModal();
    }
}

renderTasks();

createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const { target } = event;
    const taskNameInput = target.taskName;
    const taskText = taskNameInput.value.trim();

    removeError();
    if (!validateTaskInput(taskText)) return;

    const newTask = {
        id: Date.now().toString(),
        completed: false,
        text: taskText
    };
    tasks.push(newTask);
    renderTasks();
});


// Обработчики для кнопок модального окна
document.querySelector('.delete-modal__cancel-button').addEventListener('click', closeModal);
document.querySelector('.delete-modal__confirm-button').addEventListener('click', confirmDelete);
    
tasksList.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('.task-item__delete-button');
    
    if (deleteButton) {
        const taskItem = deleteButton.closest('.task-item');
        const taskId = taskItem.dataset.taskId;
        openModal(taskId);
    }
});