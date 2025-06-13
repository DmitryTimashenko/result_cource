function addDays(date, days) {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

const today = new Date();
console.log(today); // Текущая дата
console.log(addDays(today, 1)); // Завтра
console.log(addDays(today, 7)); // Через неделю
console.log(addDays(today, -3)); // 3 дня назад
