const coffees = ['Latte', 'Cappuccino', 'Americano'];
const coffeeName = prompt('Поиск кофе по названию:', '').trim();
const number = coffees.findIndex((item) => item.toLowerCase() === coffeeName.toLowerCase()) + 1;

if (number !== 0) {
    alert(`Держите ваш любимый кофе ${coffeeName}. Он ${number}-й по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
}