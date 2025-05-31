const userText = prompt('Введите текст', '').trim();
const fragmentOfText = prompt('Введите слово из текста', '').trim();
const indexOfFragment = userText.indexOf(fragmentOfText);

const result = indexOfFragment !== -1 
    ? userText.slice(0, indexOfFragment) 
    : "Фрагмент не найден";

alert(`Результат: ${result}`);