const showSuccessMessage = function(message) {
    console.log(message);
}

const showErrorMessage = function(message) {
    console.error(message);
}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    let i = text.indexOf(errorSymbol);

    if (i === -1) {
        successCallback('В данном тексте нет запрещенных символов');

        return;
    } 

    do {
        errorCallback(`Найден запрещенный символ ${errorSymbol} под индексом ${i}`);
        i = text.indexOf(errorSymbol, i+1);
    } while (i !== -1)
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);