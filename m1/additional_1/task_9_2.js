function getMathResult(expression) {
    const operations = ['>', '<', '=', '+', '-', '*', '/'];

    expression = expression.map(val => operations.includes(val) ? val : Number(val)).filter(Boolean);

    if (expression.length !== 3 || operations.includes(expression[0]) || !operations.includes(expression[1]) || operations.includes(expression[2])) {
        return 'Ошибка';
    }

    switch(expression[1]) {
        case '>':
            return expression[0] > expression[2];
        case '<':
            return expression[0] < expression[2];
        case '=':
            return expression[0] === expression[2];
        case '+':
            return expression[0] + expression[2];
        case '-':
            return expression[0] - expression[2];
        case '*':
            return expression[0] * expression[2];
        case '/':
            return expression[0] / expression[2];
        default:
            return 'Ошибка';
      } 

}

console.log("['200', '+', 300]", getMathResult(['200', '+', 300]));
console.log("['20', '-', '5']", getMathResult(['20', '-', '5']));
console.log("[100, '/', 100]", getMathResult([100, '/', 100]));
console.log("[2, '-', 2]", getMathResult([2, '-', 2]));
console.log("['5', '>', '10']", getMathResult(['5', '>', '10']));
console.log("['5', '<', '10']", getMathResult(['5', '<', '10']));
console.log("['1', '=', 1]", getMathResult(['1', '=', 1]));
console.log("['1', '**', 1]", getMathResult(['1', '**', 1]));
console.log("['+', '100', 10]", getMathResult(['+', '100', 10]));
console.log("['100', 'hello', 'javascript', 'help200', '+', 4]", getMathResult(['100', 'hello', 'javascript', 'help200', '+', 4]));
