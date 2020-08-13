export default class Team {
    constructor() {
        this.team = [];
        this.numb = 0;
    }

    add(character) {
        this.team.push(character);
        this.numb += 1;
    }

    *[Symbol.iterator]() {
        const last = this.numb;
        const command = this.team;
        for (let current = 0; current < last; current++) {
            yield command[current];
        }
    }
}