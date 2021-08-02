'use strict';
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

//let getRequest = (url) => { return new Promise((resolve, reject) => {
//		let xhr = new XMLHttpRequest();
//		xhr.open('GET', url, true);
//		xhr.onreadystatechange = () => {
//		  if (xhr.readyState === 4) {
//			if (xhr.status !== 200) {
//			  reject('Error!');
//			} else {
//			  resolve(xhr.responseText);
//			}
//		  }
//		}
//		xhr.send();
//	})
//}

class ProductItem {
    constructor(product, img='https://via.placeholder.com/200x150') { // img = './img/img.jpg'
        this.product_name = product.product_name;
        this.price = product.price;
        this.id_product = product.id_product;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.product_name}</h3>
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
		this._getProducts();
    }

    sum() {
        return this._goods.reduce(function (sum, good) {
            return sum + good.price;
        }, 0);
    }
	

    _getProducts() {
		return fetch(`${API}/catalogData.json`)
		.then(response => response.json())
		.then((data) => {
			this._goods = data;
			this._render();
		})
        .catch((error) => {
          console.log(error)
        });
    }

    _render() {
        for (const product of this._goods) {
            const productObject = new ProductItem(product);
            this._allProducts.push(productObject);
            this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
		let addTocartButton = document.querySelectorAll('.buy-btn');
		addTocartButton.forEach((button, i) => {
			button.addEventListener('click', function () {
				myCart.addItem(myProductList._allProducts[i], i);

			})
		});
    }
}

let myProductList = new ProductList();


//Валидация формы
let feedBack = document.querySelector('.feedback');
let name = feedBack.querySelector('.name');
let phone = feedBack.querySelector('.phone');
let email = feedBack.querySelector('.email');
let text = feedBack.querySelector('.text');
let submitBtn = feedBack.querySelector('.submit');

function validate(regExp, str){
	let result = regExp.test(str)
	regExp.lastIndex = 0;
	return result;
}

function checkCorrect(regExp, element){
	if (!validate(regExp, element.value)) {
		element.style.outlineColor = 'red';
		element.style.borderColor = 'red';
	}
	else {
		element.style.outlineColor = 'black';
		element.style.borderColor = '';
	}
}

let regExpName = /[a-zа-яё]+/ig;
let regExpPhone = /\+\d\(\d{3}\)\d{3}\-\d{4}/g;
let regExpEmail = /[a-z]+[\._-]?[a-z]+@[a-z]+\.[a-z]{2,5}/ig;
let regExpText = /[a-zа-яё]+/ig;

name.addEventListener('input', function(){
	checkCorrect(regExpName, name);
});

phone.addEventListener('input', function(){
	checkCorrect(regExpPhone, phone);
});

email.addEventListener('input', function(){
	checkCorrect(regExpEmail, email);
});

text.addEventListener('input', function(){
	checkCorrect(regExpText, text);
});

feedBack.addEventListener('submit', function(event){
	if (!validate(regExpName, name.value) || !validate(regExpPhone, phone.value) || !validate(regExpEmail, email.value)){
		event.preventDefault();
		checkCorrect(regExpName, name);
		checkCorrect(regExpPhone, phone);
		checkCorrect(regExpEmail, email);
		checkCorrect(regExpText, text);
		alert('Заполните корректно обязательные поля');
	}
});
