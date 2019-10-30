const roll = () => Math.floor(Math.random() * 6) + 1;

const updateFace = (diceIdx, faceValue) => {
  const dice = document.querySelector(`#dice${diceIdx}`);
  dice.src = `img/side${faceValue}.png`;
}

const rollAll = () => {
  updateFace(0, roll());
  updateFace(1, roll());
  updateFace(2, roll());
  updateFace(3, roll());
  updateFace(4, roll());
  updateFace(5, roll());
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.button');

  document.body.addEventListener('keypress', () => {
    rollAll();
  });

  const dice0 = document.querySelector('#dice0');
  const dice1 = document.querySelector('#dice1');
  const dice2 = document.querySelector('#dice2');
  const dice3 = document.querySelector('#dice3');
  const dice4 = document.querySelector('#dice4');
  const dice5 = document.querySelector('#dice5');

  dice0.addEventListener('click', () => {
    updateFace(0, roll());
  });

  dice1.addEventListener('click', () => {
    updateFace(1, roll());
  });
  
  dice2.addEventListener('click', () => {
    updateFace(2, roll());
  });
  dice3.addEventListener('click', () => {
    updateFace(3, roll());
  });

  dice4.addEventListener('click', () => {
    updateFace(4, roll());
  });
  
  dice5.addEventListener('click', () => {
    updateFace(5, roll());
  });

  button.addEventListener('click', () => {
    rollAll();
  }
   )


});
