function getAdultUsers(users) {
  if (Array.isArray(users)) {
    return users.filter(usr => usr.age >= 18);
  } else {
    const entries = Object.entries(users).filter(([key, usr]) => usr.age >=18);
    return Object.fromEntries(entries);
  }
}

const usersArray = [
  { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
  { id: '76rdca3eeb7f6fgeed471100', name: 'Alexey', age: 15 },
  { id: '12rdca3eeb7f6fgeed4711012', name: 'Egor', age: 13 },
  { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
  { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 }
];

const usersObject = {
  '34rdca3eeb7f6fgeed471198': { 
  id: '34rdca3eeb7f6fgeed471198', 
  name: 'Andrew', 
  age: 25 
  },
  '76rdca3eeb7f6fgeed471100': { 
  id: '76rdca3eeb7f6fgeed471100', 
  name: 'Alexey', 
  age: 15 
  }, 
  '12rdca3eeb7f6fgeed4711012': { 
  id: '12rdca3eeb7f6fgeed4711012', 
  name: 'Egor', 
  age: 13 
  },
  '32rdca3eeb7f6fgeed471101': { 
  id: '32rdca3eeb7f6fgeed471101', 
  name: 'Kate', 
  age: 31 
  },
  '98rdca3eeb7f6fgeed471102': { 
  id: '98rdca3eeb7f6fgeed471102', 
  name: 'Elena', 
  age: 18 
  }
};

console.log(getAdultUsers(usersArray));
console.log(getAdultUsers(usersObject));