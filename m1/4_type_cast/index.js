const age = 42;
console.log(Number(age), Boolean(age), String(age));

const mySalary = 9999999999999999999999999999999999999999999999999999999n;
console.log(Number(mySalary), Boolean(mySalary), String(mySalary));

const myName = "Dmitry";
console.log(Number(myName), Boolean(myName), String(myName));

const isGudGuy = true;
console.log(Number(isGudGuy), Boolean(isGudGuy), String(isGudGuy));

const unknown = undefined;
console.log(Number(unknown), Boolean(unknown), String(unknown));

const empty = null;
console.log(Number(empty), Boolean(empty), String(empty));

const id = Symbol('id');
console.log(Number(id), Boolean(id), String(id));

const person = { city: 'Moscow' };
console.log(Number(person), Boolean(person), String(person));