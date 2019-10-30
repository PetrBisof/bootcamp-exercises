/* Reseni - probrat

const changeClass = () => {
   document.getElementById("dice").className = "dice2";
}

const clickButton = () => {
   document.getElementById("button").addEventListener('click',changeClass);
}

clickButton(); 
 */

/*Reseni cast 1

const changeClass = () => {
    const dice = document.querySelector('#dice');

    if (dice.className==='dice1'){
    dice.className = 'dice2';
    }
    else if (dice.className==='dice2'){
    dice.className = 'dice3';
    }
    else if (dice.className==='dice3'){
    dice.className = 'dice4';
    }
    else if (dice.className==='dice4'){
    dice.className = 'dice5';
    }
    else if (dice.className==='dice5'){
    dice.className = 'dice6';
    }
    else if (dice.className==='dice6'){
        dice.className = 'dice1';
        }
}

document.addEventListener('DOMContentLoaded', () => {
    const myBtn = document.querySelector('#button');
    myBtn.addEventListener('click', changeClass);
});  */


/*  Reseni 2 */

const changeClass = () => {
    const dice = document.querySelector('#dice');

    let roll = Math.floor((Math.random() * 6) + 1);
    
    if (roll===1){
    dice.className = 'dice2';
    }
    else if (roll===2){
    dice.className = 'dice3';
    }
    else if (roll===3){
    dice.className = 'dice4';
    }
    else if (roll===4){
    dice.className = 'dice5';
    }
    else if (roll===5){
    dice.className = 'dice6';
    }
    else if (roll===6){
        dice.className = 'dice1';
        }
}

document.addEventListener('DOMContentLoaded', () => {
    const myBtn = document.querySelector('#button');
    myBtn.addEventListener('click', changeClass);
});   