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
    heightSW.textContent = this.height;
    const massSW = this.element.querySelector('.sw__mass');
    massSW.textContent = this.mass;
  }

}
