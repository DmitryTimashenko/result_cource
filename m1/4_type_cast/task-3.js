console.log(String(console.log));
// function log() { [native code] }

console.log(Number(console.log));
// NaN

console.log(Boolean(console.log));
// true


console.log(String({ name: 'Maxim' }));
// [object Object]

console.log(Number({ name: 'Maxim' }));
// NaN

console.log(Boolean({ name: 'Maxim' }));
// true


console.log(String(Symbol('key')));
// Symbol(key)

console.log(Number(Symbol('key')));
// Ошибка Uncaught TypeError: Cannot convert a Symbol value to a number

console.log(Boolean(Symbol('key')));
// true


console.log(String(Number));
// function Number() { [native code] }

console.log(Number(Number));
// NaN

console.log(Boolean(Number));
// true


console.log(String(''));
// ''

console.log(Number(''));
// 0

console.log(Boolean(''));
// false


console.log(String(0));
// '0'

console.log(Number(0));
// 0

console.log(Boolean(0));
// false


console.log(String(-10));
// '-10'

console.log(Number(-10));
// -10

console.log(Boolean(-10));
// true


console.log(String('-105'));
// '-105'

console.log(Number('-105'));
// -105

console.log(Boolean('-105'));
// 'true