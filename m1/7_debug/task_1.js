let health = Number(prompt('Введите число параметра "здоровье" для персонажа', ''));
console.log(health);

debugger;

if (isNaN(health) || health < 0) {
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
  alert(`Параметр "здоровье" равен ${health}`);
}