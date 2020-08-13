import Person from './js/Person';
import Team from './js/Team';

const character1 = new Person('Ann', 'Bowman', 50, 1, 40, 10);
const character2 = new Person('Roman', 'Undead', 100, 1, 50, 5);
const character3 = new Person('Alex', 'Zombie', 80, 1, 30, 15);

const newTeam = new Team();

newTeam.add(character1);
newTeam.add(character2);
newTeam.add(character3);

for (teamPerson of newTeam) {
    console.log(teamPerson);
}
