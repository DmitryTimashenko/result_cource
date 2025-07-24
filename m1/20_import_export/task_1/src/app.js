import { getRandomColor } from "./utils";

function initApp() {
    const changeColorButton = document.createElement('button');
    changeColorButton.className = 'button';
    changeColorButton.textContent = 'Изменить цвет страницы';
    document.body.appendChild(changeColorButton);

    changeColorButton.addEventListener('click', (event) => {
        document.body.style.backgroundColor = getRandomColor();
    });
}



export default initApp;
