function convertMsToDays(ms) {
  return Math.round(ms / (24 * 60 * 60 * 1000));
}

function getDaysBeforeBirthday(nextBirthdayDate) {
  return convertMsToDays(nextBirthdayDate.getTime() - Date.now());
}

console.log(getDaysBeforeBirthday(new Date("10.17.2025")));
