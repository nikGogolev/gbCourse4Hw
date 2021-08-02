'use strict';

class Cart {
    constructor() {
        this.data = {};
		this.items = [];
        this.totalPrice = 0;
		this.cart = document.createElement('table');
		this.getCart();
    }

    calcTotal() {
        this.totalPrice = 0;
        this.items.forEach(item => {
            this.totalPrice += item.totalPrice;
        });
		this.renderCart();
    }
	
	getCart(){
		fetch(`${API}/getBasket.json`)
		.then(response => response.json())
		.then((data) => {
			this.data = data;
			this.data.contents.forEach(item => {
				this.items.push(new CartItem(item.id_product, item.product_name, item.price, item.quantity));

			});
			this.calcTotal();
		})
		.catch((error) => {
			console.log(error);
		});
	}

    getMarkup() {
		this.cart.innerHTML = '';
		this.cart.classList.add('instance-cart');
		this.cart.insertAdjacentHTML('afterbegin', '<tr class="cartHeading"><th>Название</th><th>Количество</th><th>Цена</th><th>Итого</th></tr>');
		this.items.forEach(item => {
            this.cart.querySelector('tbody').insertAdjacentElement('beforeend',item.getMarkup(item.id_product));
        });
		this.cart.insertAdjacentHTML('beforeend', `<caption>Товаров на сумму $ ${this.totalPrice}</caption>`);
		return this.cart;
    }

    renderCart() {
        if (document.querySelector('.instance-cart')) {
            document.querySelector('.instance-cart').remove();
        };
        document.body.insertAdjacentElement('afterbegin', this.getMarkup());
    }

    addItem(product) {
		fetch(`${API}/addToBasket.json`)
		.then(response => response.json())
		.then((data) => { 
			if (data.result === 1){ // Сделано для наглядности. По идее в этом блоке должен быть getCart()
				let isExist = false;
				this.items.forEach((item, i) => {
					if (item.id_product === product.id_product) {
						isExist = true;
						this.items[i].quantity++;
						this.items[i].calcTotal();
					}
				});
				if (!isExist) {
					this.items.push(new CartItem(product.id_product, product.product_name, product.price, 1));
					this.items[this.items.length - 1].calcTotal();
				}
				this.calcTotal();
			}
		})
		.catch((error) => {
			console.log(error);
		});
    }
	
	removeItem(product){
		fetch(`${API}/deleteFromBasket.json`)
		.then(response => response.json())
		.then((data) => { 
			if (data.result === 1){ // Сделано для наглядности. По идее в этом блоке должен быть getCart()
				if ((product.quantity - 1) === 0){
					this.items.forEach((item, i) => {
						if (item.id_product === product.id_product){
							this.items.splice(i, 1);

						}
					});
				} else {
					product.quantity--;
					product.calcTotal();
				}
				this.calcTotal();
			}
		})
		.catch((error) => {
			console.log(error);
		});
	};
}

class CartItem {
    constructor(id_product, product_name, price, quantity) {
        this.id_product = id_product;
        this.product_name = product_name;
        this.quantity = quantity;
        this.price = price;
        this.totalPrice = 0;
        this.calcTotal();
    }

    calcTotal() {
        this.totalPrice = this.quantity * this.price;
		myCart.calcTotal();
    }

    getMarkup(id_product) {
        let product = document.createElement('tr');
		let productName = document.createElement('td');
		let productCount = document.createElement('td');
		let productPrice = document.createElement('td');
		let productTotalPrice = document.createElement('td');
		let addItem = document.createElement('button');
		let removeItem = document.createElement('button');
		product.classList.add(`productId${id_product}`);
		productName.textContent = this.product_name;
		productCount.textContent = `${this.quantity} `;
		productPrice.textContent = `$ ${this.price}`;
		productTotalPrice.textContent = `$ ${this.totalPrice}`;
		addItem.textContent = '+';
		addItem.classList.add('addItem');
		removeItem.textContent = '-';
		removeItem.classList.add('removeItem');
		addItem.addEventListener('click', () => {
			myCart.addItem(this);
		});
		removeItem.addEventListener('click', () => {
			myCart.removeItem(this);
		});
		productCount.insertAdjacentElement('beforeend', addItem);
		productCount.insertAdjacentElement('beforeend', removeItem);
		product.insertAdjacentElement('beforeend',productName);
		product.insertAdjacentElement('beforeend',productCount);
		product.insertAdjacentElement('beforeend',productPrice);
		product.insertAdjacentElement('beforeend',productTotalPrice);
		return product;
    }
}

let myCart = new Cart;



//Скрывает и показывает табличку с товарами в корзине
let cartButton = document.querySelector('.btn-cart');
cartButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (!document.querySelector('.instance-cart')) {
        myCart.renderCart();
    } else {
        document.querySelector('.instance-cart').remove()
    }
});