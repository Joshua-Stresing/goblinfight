// import functions and grab DOM elements
//set up all the nonsense your gunna use
import { renderGoblin } from './utils.js';
const defeatedNumberEl = document.querySelector('#number-dead');
const adventurerHPEl = document.querySelector('#player-stats');
const adventurerImgEl = document.querySelector('#adventurer-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');

// make the let statements your going to use
let defeatedGoblinsCount = 0;
let playerHp = 10;
let goblins = [
    { id: 1, name: 'Booger', hp: 1 },
    { id: 2, name: 'Knick-Nac', hp: 3 },
];
let currentId = 3;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
//start by making the a goblin from the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

    const newGoblin = {
        id: currentId,
        name:goblinName,
        hp: Math.ceil(Math.random() * 3),
    };
    currentId++;
    goblins.push(newGoblin);
//Make and add display function so come back
    displayGoblins();
});

//need to make an attack function, might as well add a shitty alert too
function goblinClickHandler(goblinData) {
    if (goblinData.hp <= 0) return;
    if (Math.random() < 0.33) {
        goblinData.hp--;
        alert('you hit ' + goblinData.name);
    } else {
        alert('you tried to hit ' + goblinData.name + ' but missed');
    }

    if (Math.random() < 0.5) {
        playerHp--;
        alert(goblinData.name + ' hit you!');
    } else {
        alert(goblinData.name + ' tried to hit you but missed!');
    }

    if (goblinData.hp === 0) {
        defeatedGoblinsCount++;
    }

    if (playerHp === 0) {
        adventurerImgEl.classList.add('game-over');
        alert('GAME OVER!!!');
    }

    adventurerHPEl.textContent = playerHp;
    defeatedNumberEl.textContent = defeatedGoblinsCount;

    const hpEl = document.getElementById(`goblin-hp-${goblinData.id}`);
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    const faceEl = document.getElementById(`goblin-face-${goblinData.id}`);
    faceEl.textContent = goblinData.hp > 0 ? '' : '';
}


function displayGoblins() {
    goblinListEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        //i want to add a separate function for attacking goblins so come back
        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
        goblinListEl.append(goblinEl);
    }

}

displayGoblins();