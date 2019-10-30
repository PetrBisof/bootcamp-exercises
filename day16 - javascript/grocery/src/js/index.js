const list = [
  { name: 'apples', amount: '1kg' },
  { name: 'bacon', amount: '200g' },
  { name: 'cheddar', amount: '250g' },
  { name: 'beer', amount: '6' },
  { name: 'icecream', amount: '1kg' },
];

document.addEventListener('DOMContentLoaded', () => {
  const listItem = document.querySelector('#list');

  for (const item of list) {
    const html = (`<div class="list">
    <span> ${item.name} </span>
    <span> ${item.amount} </span>
    </div>`);
    listItem.innerHTML += html;
  }
});

const x = document.querySelector('#newName');

console.log(x.value);


const newItem = () => {
  const newName = document.getElementById('newName').value;
  const newAmount = document.getElementById('newAmount').value;
  const newI = [
    {
      name: newName,
      amount: newAmount,
    }];

  const listItem = document.querySelector('#list');

  for (const item of newI) {
    const html = `<div class="list">
    <span> ${item.name} </span>
    <span> ${item.amount} </span>
    </div>`;
    listItem.innerHTML += html;
  }

};


document.addEventListener('DOMContentLoaded', () => {
  const btnNine = document.querySelector('#button');
  btnNine.addEventListener('click', newItem);
});

