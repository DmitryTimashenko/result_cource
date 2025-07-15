const API_URL = 'https://jsonplaceholder.typicode.com/users';
const dataContainer = document.getElementById('data-container');
const loaderHTML = document.getElementById('loader');

const createUserElement = (user) => {
    const userElement = document.createElement('li');
    const userLink = document.createElement('a');

    userLink.href = '#';
    userLink.textContent = user.name;

    userElement.append(userLink);

    return userElement;
}

const toggleHidden = (element) => {
    const isHidden = element.hasAttribute('hidden');
    if (isHidden) {
        element.removeAttribute('hidden');
    } else {
        element.setAttribute('hidden', '');
    }
}

const getAllUsers = () => {
    toggleHidden(loaderHTML);
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка запроса');
            }
            return response.json();
        })
        .then((users) => {
            users.forEach((user) => {
                dataContainer.append(createUserElement(user));
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке пользователей:', error);
        })
        .finally(() => {
            toggleHidden(loaderHTML);
        });
}

const getUsersByIds = (ids) => {
    toggleHidden(loaderHTML);
    const requests = ids.map((id) => fetch(`${API_URL}/${id}`));
    Promise.all(requests)
        .then(responses => {
            const dataResults = responses.map((response) => response.json());
            return Promise.all(dataResults)
        })
        .then((users) => {
            users.forEach((user) => {
                dataContainer.append(createUserElement(user));
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке пользователей:', error);
        })
        .finally(() => {
            toggleHidden(loaderHTML);
        });
}

// getAllUsers();
getUsersByIds([5, 6, 2, 1]);