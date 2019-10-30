document.addEventListener('DOMContentLoaded', ()=> {
const site = document.querySelector('.container');

const volvo = new list('volvo','1900000','red');
const bmw = new list('BMW','2900000','black');
const opel = new list('opel','1200000','black');

volvo.mount(site);
bmw.mount(site);
opel.mount(site);
});