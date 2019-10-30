let counter = 5;

const minus = () => {
  if(counter > 0)
  {return counter -=1}
  else{
    return 0
  }
}

const plus = () => {
  if(counter < 10)
  {return counter += 1}
  else{
    return 10
  }
}

let bar = 5;

document.addEventListener('DOMContentLoaded', () => {
  let container = document.querySelector('.container');
      const celek = document.createElement('div');
        celek.innerHTML = (
           `<div class = 'container'>
           <div id="label" class="label">
             <span id="counter">${counter}</span>/<span id="maximum">10</span>
           </div>
           <div class="progress">
             <div id="minus" class="btn-minus"></div>
             <div class="bar">
               <div id="knob" class="knob${bar}"></div>
             </div>
             <div id="plus" class="btn-plus"></div>
           </div>
           </div>`
           )
         celek.querySelector('.btn-minus').addEventListener('click', () => {
          const newValue = celek.querySelector('#counter');
          newValue.innerText = minus();
          const newBar = celek.querySelector('#knob');
          newBar.className = `knob${counter}`;
         })
         celek.querySelector('.btn-plus').addEventListener('click', () => {
          const newValue = celek.querySelector('#counter');
          newValue.innerText = plus();
          const newBar = celek.querySelector('#knob');
          newBar.className = `knob${counter}`;
         })
      container.appendChild(celek);
      })

      
/* itemElm.querySelector('.btn-buy').addEventListener('click', () => {
  const newQuantity = itemElm.querySelector('.quantity');
  newQuantity.innerText = item.sell(1);
  }) */