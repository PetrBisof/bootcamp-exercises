document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  
  fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(SWpeople => {
        for(const staff of SWpeople.results) {
        const SWstaff = new StarWars(staff.name, staff.height, staff.mass);
        SWstaff.mount(container);  
      }
    });
});









/* 


class StarWars {
    constructor (name, height, mass){
        this.name = name;
        this.height = height;
        this.mass = mass;
}

render() {
    this.element = document.createElement('div');
    this.element.className = 'sw';
    this.element.innerHTML = (
      `<div class="sw__name"></div>
      <div class="sw__height"></div>
      <div class="sw__mass"></div>`
    )
    this.update();
}

mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }

update() {
    const nameSW = this.element.querySelector('.sw__name');
    nameSW.textContent = this.name;
    const heightSW = this.element.querySelector('.sw__height');
    heightSW.textContent = this.project;
    const massSW = this.element.querySelector('.sw__mass');
    massSW.textContent = this.status;
  }

}
 */