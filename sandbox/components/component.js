/* class list {
    constructor(car, price, color){
        this.car = car;
        this.price = price;
        this.color = color;
    }

    mount(parent){
        this.render();
        parent.appendChild(this.element);
        }

render(){
    this.element = document.createElement('div');
    this.element.className = 'listo';
    this.element.innerHTML =
    (`<div class="car"></div>
    <div class="price"></div>
    <div class="color"></div>`)
    this.update();
}



update(){
    const carNew = this.element.querySelector('.car');
    carNew.textContent = this.car;

    const priceNew = this.element.querySelector('.price');
    priceNew.textContent = this.price;

    const colorNew = this.element.querySelector('.color');
    colorNew.textContent = this.color;
}

} */