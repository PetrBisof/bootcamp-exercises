document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('.race');
    

    fetch('http://bootcamp.podlomar.org/api/snails/4')
    .then(response => response.json())
    .then(snailList => {
      for(const snail of snailList) {
        const newSnail = new Snail(snail.name, snail.color, snail.velocity);
        newSnail.mount(app);
      }
    });



/*     const snail1 = new Snail('Jarda', 'red', 3);
    snail1.mount(app);
    console.log('color', snail1.color)
    let col = snail1.color;
    snail1.moveSnail();

    const snail2 = new Snail('Honza', 'black', 5);
    snail2.mount(app);
    snail2.changeColor();
    snail2.moveSnail();

    const snail3 = new Snail('Pavel', 'yellow', 9);
    snail3.mount(app);
    snail3.changeColor();
    snail3.moveSnail(); */
  });
  