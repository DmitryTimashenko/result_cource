const matrix = [];

for (let i = 0; i < 3; i++) {
    matrix.push([]);
    for (let j = 0; j < 5; j++) {
        matrix[i].push(j + 1);
    }
}

console.log(matrix);