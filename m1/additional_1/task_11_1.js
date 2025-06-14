const peopleWithVisa = [
  {
      firstName: 'Stasia',
      lastName: 'Ward',
      criminalRecord: true,
      passportExpiration: '19.06.2040',
  },
  {
      firstName: 'Elliot',
      lastName: 'Baker',
      criminalRecord: false,
      passportExpiration: '04.06.2041',
  },
  {
      firstName: 'Leighann',
      lastName: 'Scott',
      criminalRecord: true,
      passportExpiration: '31.07.2039',
  },
  {
      firstName: 'Nick',
      lastName: 'Pop',
      criminalRecord: false,
      passportExpiration: '31.12.2010',
  },
];

function allowVisa(peopleList) {
  return peopleList.filter(per => 
        !per.criminalRecord 
        && Date.now() < (new Date(per.passportExpiration)).getTime()
    )
}
 
const result = allowVisa(peopleWithVisa);
console.log('result', result);