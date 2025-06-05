let clientsEstimations = [];

function askClientToGiveEstimation() {
    const estimation = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?', 10).trim());
    if (estimation !== NaN && estimation >= 1 && estimation <= 10) {
        clientsEstimations.push(estimation);
    }
}

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter((estimation) => estimation > 5).length;
const notGoodEstimations = clientsEstimations.filter((estimation) => estimation <= 5).length;

alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`);