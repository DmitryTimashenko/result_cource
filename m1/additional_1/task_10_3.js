function getKiller(suspectInfo, deadPeople) {
    return Object.entries(suspectInfo)
        .map(([person, seenPeople]) => {
            const isKiller = deadPeople.every(deadPerson => seenPeople.includes(deadPerson));
            return isKiller ? person : undefined;
        })
        .find(person => person !== undefined);
}

console.log(
    getKiller(
        {
            James: ["Jacob", "Bill", "Lucas"],
            Johnny: ["David", "Kyle", "Lucas"],
            Peter: ["Lucy", "Kyle"]
        },
        ["Lucas", "Bill"]
    )
); // Убийца James

console.log(
    getKiller(
        {
            Brad: [],
            Megan: ["Ben", "Kevin"],
            Finn: []
        },
        ["Ben"]
    )
); // Убийца Megan