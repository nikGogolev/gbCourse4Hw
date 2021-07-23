'use strict';
//Класс для корзины
class Cart{
	constructor(){
		this._productList; // Список товаров в корзине
		this.container; // DOM-элемент для вставки корзины
		this._choosedProducts;
	}
	fetch(){}; // Запрос списка товаров
	render(){}; // Отрисовка списка товаров
	toOrder(){}; // Переход к оформлению и передача основных параметров заказа
	totalPrice(){}; // Вычисление общей суммы
	clear(){}; // Очистить корзину
	update(){}; // Обновить корзину,
	removeChoosed(){}; // Удалить выбранные товары
}

// Класс для товара в корзине
class CartItem{
	constructor(){
		this.id; //Id товара
		this.title; // Название товара
		this.price; // Цена товара (в зависимости от количества)
		this.description; // Описание товара
		this.count; // Количиство единиц данного товара
		this.choosed; // Выбран (например галочкой)
		this.liked; // Залайкан или добывлен в избранное
	}
	
	clear(){}; // Удалить все товары
	addOne(){}; // Добавить один
	removeOne(){}; // Удалить один
	choose(){}; // Выбрать (например поставить галочку)
	like(){}; // Лайкнуть или добавить в избранное
}


class ProductItem {
    constructor(product, img='https://via.placeholder.com/200x150') { // img = './img/img.jpg'
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
    }
}

class ProductList {
    constructor(container = '.products') {
        this.container = document.querySelector(container);
        this._goods = [];
        this._allProducts = [];

        this._fetchGoods();
        this._render();
    }
    _fetchGoods() {
        this._goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }
    _render() {
        for (const product of this._goods) {
            const productObject = new ProductItem(product);
            this._allProducts.push(productObject);
            this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }
	
	//Метод для рассчета суммы всех товаров
	totalPrice() {
		let total = 0;
		this._goods.forEach(product => total += product.price);
		return total;
	}
}

const list = new ProductList();
