let correctAnswers = 0;
let incorrectAnswers = 0;

// Вопрос 1
const question1 = "Сколько будет 2 + 2?";
const answer1 = 4;
const userAnswer1 = Number(prompt(question1));

if (userAnswer1 === answer1) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

// Вопрос 2
const question2 = "Сколько будет 2 * 2?";
const answer2 = 4;
const userAnswer2 = Number(prompt(question2));

if (userAnswer2 === answer2) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

// Вопрос 3
const question3 = "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?";
const answer3 = 1;
const userAnswer3 = Number(prompt(question3));

if (userAnswer3 === answer3) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

// Вопрос 4
const question4 = "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?";
const answer4 = 12;
const userAnswer4 = Number(prompt(question4));

if (userAnswer4 === answer4) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

// Вопрос 5
const question5 = "Сколько будет 2 + 2 * 2?";
const answer5 = 6;
const userAnswer5 = Number(prompt(question5));

if (userAnswer5 === answer5) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

// Итоговые результаты
alert(`Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}.`);