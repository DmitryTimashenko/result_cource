function getDateFormat(date, separator = '.') {
    return [
      date.getDate().toString().padStart(2, '0'),
      (date.getMonth() + 1).toString().padStart(2, '0'),
      date.getFullYear()
    ].join(separator);
  }


console.log(getDateFormat(new Date(), '-'));