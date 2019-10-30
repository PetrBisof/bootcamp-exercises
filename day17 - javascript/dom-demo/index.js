const shoppingList = [
  ['apples', '1kg'],
  ['bacon', '200g'],
  ['cheddar', '250g'],
  ['beer', '6'],
  ['icecream', '1kg'],
];

document.addEventListener('DOMContentLoaded', () => {
  const listElm = document.querySelector('.shopping-list');

  for (const item of shoppingList) {
    const itemElm = document.createElement('div');
    itemElm.className = `shopping-list`;
    itemElm.innerHTML = (
      `<div class="shopping-list__item">
      <span>${item[0]}</span>
      <span>${item[1]}</span>
      <button class="btn-like">delete</button>
      <button class="btn-color">color</button>
     </div>`
    )

    itemElm.querySelector('.btn-like').addEventListener('click', () => {
      itemElm.innerHTML='';
    })
      itemElm.querySelector('.btn-color').addEventListener('click', (event) => {
        if (item.liked) {
          item.liked = false;
         /*  const background =  */
          event.target.style.backgroundColor = 'lightgrey';
        } else {
          item.liked = true;
         event.target.style.backgroundColor = 'orange';
        }
    
    });
    
  listElm.appendChild(itemElm);
    }
    });

/* 
    const html = (
      `<div class="shopping-list__item">
        <span>${item[0]}</span>
        <span>${item[1]}</span>
       </div>
       <button class="btn-like">like</button>`
    );
    listElm.innerHTML += html;
  }
}); */




/* document.addEventListener('DOMContentLoaded', () => {
  const chat = document.querySelector('#chat');
  
  for(const msg of conversation) {
    const name = msg.name.toLowerCase();
    const msgElm = document.createElement('div');
    msgElm.className = `message ${msg.side}`;
    msgElm.innerHTML = (
      `<div class="head ${name}">
        <img src="img/${name}.png"/>
        </div>
       <div class="text">${msg.text}</div>
       <button class="btn-like">like</button>`
    );

    msgElm.querySelector('.btn-like').addEventListener('click', (event) => {
      if (msg.liked) {
        msg.liked = false;
        event.target.style.backgroundColor = 'initial';
      } else {
        msg.liked = true;
        event.target.style.backgroundColor = 'orange';
      }
    });

    chat.appendChild(msgElm);
  };
});







const shoppingList = [
  ['apples', '1kg'],
  ['bacon', '200g'],
  ['cheddar', '250g'],
  ['beer', '6'],
  ['icecream', '1kg'],
];

document.addEventListener('DOMContentLoaded', () => {
  const listElm = document.querySelector('.shopping-list');

  for (const item of shoppingList) {
    const html = (
      `<div class="shopping-list__item">
        <span>${item[0]}</span>
        <span>${item[1]}</span>
       </div>`
    );
    listElm.innerHTML += html;
  }
}); */
