function getSumOfSequence(number) {
    let a = [];
    for (let i = 1; i <= number; i++) {
        a.push(i);
    }

    return a[0] + a[number-1];
}


console.log(getSumOfSequence(5));