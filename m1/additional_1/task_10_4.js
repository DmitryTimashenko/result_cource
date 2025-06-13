function getRandomNumberInRange(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}

function getWinner(applicants, winnerObject) {
   const keys = Object.keys(applicants);
   const winNum = getRandomNumberInRange(0, keys.length);
   return {...winnerObject, ...applicants[keys[winNum]]};
}

const todaysWinner = {
   prize: '10 000$',
}
 
const winnerApplicants = {
   '001': {
      name: 'Максим',
      age: 25,
   },
   '201': {
      name: 'Светлана',
      age: 20,
   },
   '304': {
      name: 'Екатерина',
      age: 35,
   },
}
 
const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner); 