/* eslint-disable linebreak-style */
/* eslint disable */

class Button {
  constructor(color, value) {
    this.color = color;
    this.value = value;
  }
}

const buttons = [
  new Button('red', 1),
  new Button('blue', 2),
  new Button('orange', 3),
];

document.addEventListener('DOMContentLoaded', () => {
  const playground = document.querySelector('.playground');

  // eslint-disable-next-line no-restricted-syntax
  for (const chip of buttons) {
    const divChip = document.createElement('div');
    divChip.className = 'container';
    divChip.innerHTML = (`<div class = 'chip ${chip.color} chip${chip.value}'>${chip.value}</div>`);
    playground.appendChild(divChip);
  }
});


/* let score = 0;

const chip1 = document.querySelector('.chip1');
const chip2 = document.querySelector('.chip2');
const chip3 = document.querySelector('.chip3');

const chip1Function = () => {
  score += 1;
};

const chip2Function = () => {
  score += 2;
};

const chip3Function = () => {
  score += 3;
};

chip1.addEventListener('click', () => {
  chip1Function();
  const scoreInput = document.querySelector('.score');
  console.log(score);
  scoreInput.innerText = `Score: ${score}`;
  chip1.className = 'none';
});

chip2.addEventListener('click', () => {
  chip2Function();
  const scoreInput = document.querySelector('.score');
  console.log(score);
  scoreInput.innerText = `Score: ${score}`;
  chip2.className = 'none';
});

chip3.addEventListener('click', () => {
  chip3Function();
  const scoreInput = document.querySelector('.score');
  console.log(score);
  scoreInput.innerText = `Score: ${score}`;
  chip3.className = 'none';
});


itemElm.querySelector('.btn-buy').addEventListener('click', () => {
  const newQuantity = itemElm.querySelector('.quantity');
  newQuantity.innerText = item.sell(1);
});
 */
