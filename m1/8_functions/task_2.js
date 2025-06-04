function getSumOfNumbers(number, type = "odd") {
    number = Number(number);
    if (number === NaN) {
        return NaN;
    }

    let sum = 0;

    for (let i = 0; i <= number; i++ ) {
        if (type === "" || (type === "odd" && i % 2 !== 0) || (type === "even" && i % 2 === 0)) {
          sum += i;
        }
    }

    return sum;
}