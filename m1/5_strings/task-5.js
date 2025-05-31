const userString = prompt('Введите текст для обрезки', '').trim();
const startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки', '0').trim();
const endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки', String(userString.length)).trim();

const startIndex = Number(startSliceIndex);
const endIndex = Number(endSliceIndex);

const result = userString.slice(startIndex, endIndex);
alert(`Результат: ${result}`);