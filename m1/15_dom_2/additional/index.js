class CustomSelect {
    #id;
    #options;
    #currentSelectedOption;

    constructor(id, options) {
        this.#id = id;
        this.#options = options;
        this.#currentSelectedOption = null;
    }

    #handleButtonClick = (list) => {
        return () => {
            list.classList.toggle('active');
        };
    }

    #handleItemClick = (list, buttonText) => {
        return (e) => {
            const value = e.target.dataset.value;
            const selectedOption = this.#options.find(option => option.value == value);
            
            this.#currentSelectedOption = selectedOption;
            buttonText.textContent = selectedOption.text;
            
            // Удаляем класс selected у всех элементов
            list.querySelectorAll(`.selected`)
                .forEach(el => el.classList.remove('selected'));
            
            // Добавляем класс selected к выбранному элементу
            e.target.classList.add('selected');
            
            // Закрываем список после выбора
            list.classList.remove('active');
        };
    }

    render(container) {
        const selectDropdown = document.createElement('div');
        selectDropdown.className = `select-dropdown select-dropdown--${this.#id}`;
        container.appendChild(selectDropdown);

        const button = document.createElement('button');
        button.className = `select-dropdown__button select-dropdown__button--${this.#id}`;
        selectDropdown.appendChild(button);

        const buttonText = document.createElement('span');
        buttonText.className = `select-dropdown__text select-dropdown__text--${this.#id}`;
        buttonText.textContent = 'Выберите элемент';
        button.appendChild(buttonText);

        const list = document.createElement('ul');
        list.className = `select-dropdown__list select-dropdown__list--${this.#id}`;
        selectDropdown.appendChild(list);

        this.#options.forEach(row => {
            const { text, value } = row;
            const listItem = document.createElement('li');
            listItem.className = 'select-dropdown__list-item';
            listItem.dataset.value = value;
            listItem.textContent = text;
            list.appendChild(listItem);
        });

        // Обработчики событий
        button.addEventListener('click', this.#handleButtonClick(list));
        
        // Используем делегирование событий для элементов списка
        list.addEventListener('click', (e) => {
            if (e.target.classList.contains('select-dropdown__list-item')) {
                this.#handleItemClick(list, buttonText)(e);
            }
        });
    }

    get selectedValue() {
        return this.#currentSelectedOption;
    }
}

const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' }
];

const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container'); 
customSelect.render(mainContainer);