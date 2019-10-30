class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity; 
    }

sell(x) {
        if (this.quantity - x >= 0){
           return this.quantity -= x;
            }
        else{
            return 'to asi nepujde'
            }
        }

store(x) {
        return this.quantity + x
        }
};


const products = 
[   new Product('Bible', '500CZK', 5),
    new Product('CZ50', '500000CZK', 2),
    new Product('IBM', '50000CZK', 3),
    new Product('wooden', '5070CZK', 58),
    new Product('IKEA', '50CZK', 533),
    new Product('wooden', '5000CZK', 58),
]

console.log(products[1].sell(1));

document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.container');
      for (const item of products) {
        const itemElm = document.createElement('div');
        /* itemElm.className = `shopping-list`; */

             itemElm.innerHTML = (
             `<div class="shopping-list__item">
             <span>${item.name}</span>
             <span>${item.price}</span>
             <span class='quantity'>${item.quantity}</span>
             <button class="btn-buy">buy</button>
             </div>`
             )

            itemElm.querySelector('.btn-buy').addEventListener('click', () => {
            const newQuantity = itemElm.querySelector('.quantity');
            newQuantity.innerText = item.sell(1);
            })
        container.appendChild(itemElm);
        }
    }
)