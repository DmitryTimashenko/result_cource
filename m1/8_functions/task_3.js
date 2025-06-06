function getDivisorsCount(number) {
    number = Number(number);
    if (isNaN(number)) {
        return NaN;
    }
  
    if (number <= 0 || !Number.isInteger(number)) {
      alert('number должен быть целым числом и больше нуля!');
      return NaN;
    }
  
    let count = 0;
    
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        count++;
      }
    }
    
    return count;
  }