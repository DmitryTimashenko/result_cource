const numbers = [10, 4, 100, -5, 54, 2];

// 1. Через цикл for
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum1 += numbers[i] ** 3;
}
console.log('1. for loop:', sum1);

// 2. Через цикл for...of
let sum2 = 0;
for (const num of numbers) {
  sum2 += num ** 3;
}
console.log('2. for...of loop:', sum2);

// 3. Через метод forEach()
let sum3 = 0;
numbers.forEach(num => {
  sum3 += num ** 3;
});
console.log('3. forEach:', sum3);

// 4. Через метод reduce()
const sum4 = numbers.reduce((acc, num) => acc + num ** 3, 0);
console.log('4. reduce:', sum4);