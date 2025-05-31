
const myName = 'Дмитрий';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилена';
const reasonText = 'меня задолбал бэк и я решил задолбаться на фронте';
const numberOfMonth = 'аххренеть как много';

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll('JavaScript', 'javascript').replaceAll('курс', 'КУРС');
console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0], myInfoText.slice(-1));