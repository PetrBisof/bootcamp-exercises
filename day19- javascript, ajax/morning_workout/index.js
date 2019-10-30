let timerID = 5;

class Timer {
  constructor(value, max, minutes) {
       this.value = value;
       this.max = max;
       this.minutes = minutes;
  }

  increment() {
    if (this.value < this.max) {
      this.value += 30;
      if(this.value >= 59){
      this.value = 0
      this.minutes += 1; }
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
      if(this.value <= 0 && this.minutes > 0){
        this.value = 59
        this.minutes -= 1; }
        else if (this.value === 0 && this.minutes === 0){
          const sound = new Audio();
    const playSound = () => {
    sound.src = 'bell.wav'
    sound.play()
    }
    playSound();}
      
    }
/*     if (this.value <= 1 && this.minutes <= 0){
      this.value = 0
      this.minutes = 0
    } */
    let minute = this.minutes.toString();
    let second = this.value.toString();
    let final = minute + ':' + second;
    return final;
  }



  reset() {
    this.value = 0;
    this.minutes = 0;
    }

/*     const sound = new Audio()
    const button = document.querySelector(‘button’)
    button.addEventListener(‘click’, playSound)
    
    function playSound() {
      sound.src = ‘audio/dragon.mp3’
      sound.play()
    }
  */

}

const minut = new Timer(10, 60, 0);

const update = () => {
  const counter = document.querySelector('#counter');
  counter.textContent = `${minut.minutes}:${minut.value}`;
}

document.addEventListener('DOMContentLoaded', () => {
  update();
     const start = document.querySelector('#start');
    start.addEventListener('click', () => {
    if(timerID === 5){
      timerID =  setInterval(() => {
      let newTime = minut.decrement();
      document.getElementById('counter').textContent = newTime.toString();
      }, 1000);
      update();
     /*  return timerID; */
    }
    else {
      clearInterval(timerID);
      timerID = 5;
    }
    });

    const plusBtn = document.querySelector('#plus');
    plusBtn.addEventListener('click', () => {
    minut.increment();
    update();
  });

  const minusBtn = document.querySelector('#minus');
  minusBtn.addEventListener('click', () => {
  minut.decrement();
  update();
});

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
minut.reset();
update();
});
  

});




/* document.addEventListener('DOMContentLoaded', () => {
  update();
  const start = document.querySelector('#start');
  start.addEventListener('click', () => {
  const timerID =  setInterval(() => {
      let newTime = minut.decrement();
      document.getElementById('counter').textContent = newTime.toString();
      }, 1000);
    update();
  }); */


/*   const plusBtn = document.querySelector('#plus');
  plusBtn.addEventListener('click', () => {
    bar.increment();
    update();
  });

  const minusBtn = document.querySelector('#minus');
  minusBtn.addEventListener('click', () => {
    bar.decrement();
    update();
  });
});*/











/* document.addEventListener('DOMContentLoaded', () => {
  let container = document.querySelector('.container');
      const celek = document.createElement('div');
        celek.innerHTML = (
           `<div class = 'container'>
           <div id="plus" class="plus">
             <span id="counter">+</span>
           </div>
           <div><
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

      
 itemElm.querySelector('.btn-buy').addEventListener('click', () => {
  const newQuantity = itemElm.querySelector('.quantity');
  newQuantity.innerText = item.sell(1);
  }) */