const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,

    checkChancesToWin(defenderObject) {
        let chances = 0;
        const maxChances = Object.keys(defenderObject).length;

        for (const key in this) {
            if (typeof this[key] === 'number' && defenderObject.hasOwnProperty(key)) {
                if (this[key] > defenderObject[key]) {
                    chances++;
                }
            }
        }

        return [chances, maxChances];
    },

    improveArmy() {
        for (const key in this) {
            if (typeof this[key] === 'number') {
                this[key] += 5;
            }
        }
    },

    attack(defender) {
        const [ourArmyChances, maximumChances] = this.checkChancesToWin(defender);
        const chancePercentage = ourArmyChances / maximumChances;

        if (chancePercentage < 0.7) {
            this.improveArmy();
            alert(`Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`);
        } else {
            alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
        }
    }
};

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
}

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление! 
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!