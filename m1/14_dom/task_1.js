// 1-й способ через innerHTML

const formHTML = `
<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>
`;

document.body.innerHTML = formHTML;

// 2-способ

const form = document.createElement('form');
form.className = 'create-user-form';

const nameLabel = document.createElement('label');
nameLabel.innerHTML = 'Имя'; 

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.name = 'userName';
nameInput.placeholder = 'Введите ваше имя';
nameLabel.appendChild(nameInput);

const passwordLabel = document.createElement('label');
passwordLabel.innerHTML = 'Пароль';

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.name = 'password';
passwordInput.placeholder = 'Придумайте Пароль';
passwordLabel.appendChild(passwordInput);

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Подтвердить';

// Собираем форму
form.appendChild(nameLabel);
form.appendChild(passwordLabel);
form.appendChild(submitButton);

// Добавляем в body
document.body.appendChild(form);
