export function renderGoblin(goblinData) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('img');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add('goblin');

    nameEl.textContent = goblinData.name;
    hpEl.id = `goblin-hp-${goblinData.id}`;
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    faceEl.id = `goblin-face-${goblinData.id}`;
    
    if (goblinData.hp < 0) {
        goblinEl.classList.add('dead');
    } 

    const gobimg = goblinData.hp > 0 ? './assets/goblin.png' : './assets/crossbones.png';
    faceEl.setAttribute('src', gobimg);

    goblinEl.append(nameEl, faceEl, hpEl);
    return goblinEl;
}
