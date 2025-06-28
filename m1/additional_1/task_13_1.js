class Dictionary {
    #name;
    #words;

    constructor(name) {
        this.#name = name;
        this.#words = {};
    }

    get mainName() {
        return this.#name;
    }

    set mainName(name) {
        this.#name = name;
    }

    add(word, description) {
        this.#words[word] = { word: word, description: description };
    }

    remove(word) {
        delete this.#words[word];
    }

    get(word) {
        return this.#words[word];
    }

    showAllWords() {
        Object.values(this.#words).forEach((row) => {
            console.log(`${row.word} - ${row.description}`);
        });
    }
}

class HardWordsDictionary extends Dictionary {
    add(word, description) {
        this.words[word] = { word: word, description: description, isDifficult: true };
    }
}