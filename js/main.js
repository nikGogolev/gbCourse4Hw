'use strict';
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// do not use fetch!! Only Promise!
//let getRequest = (url, cb) => {
//  let xhr = new XMLHttpRequest();
//  xhr.open('GET', url, true);
//  xhr.onreadystatechange = () => {
//    if (xhr.readyState === 4) {
//      if (xhr.status !== 200) {
//        console.log('Error!');
//      } else {
//        cb(xhr.responseText);
//      }
//    }
//  }
//  xhr.send();
//}

// Решение пункта 1.
let getRequest = (url) => { return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onreadystatechange = () => {
		  if (xhr.readyState === 4) {
			if (xhr.status !== 200) {
			  reject('Error!');
			} else {
			  resolve(xhr.responseText);
			}
		  }
		}
		xhr.send();
	})
}

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
        // this.container = container;
        this.container = document.querySelector(container);
        this._goods = [];
        this._allProducts = [];
		this._getProducts();
    }

    // _fetchGoods() {
    //   getRequest(`${API}/catalogData.json`, (data) => {
    //     this._goods = JSON.parse(data);
    //     this._render();
    //     // console.log(this._goods);
    //   });
    // }

    sum() {
        // return this._goods.reduce((sum, { price }) => sum + price, 0);
        return this._goods.reduce(function (sum, good) {
            return sum + good.price;
        }, 0);
    }
	
	_getProducts(){
		getRequest(`${API}/catalogData.json`)
		.then((data) => {
			this._goods = JSON.parse(data);
			this._render();
		})
		.catch((error) => {
			console.log(error);
		});
	}
    //_getProducts() {
    //  return fetch(`${API}/catalogData.json`)
    //      .then(response => response.json())
    //      .catch((error) => {
    //        console.log(error)
    //      });
    //}

    _render() {
        // const block = document.querySelector(this.container);

        for (const product of this._goods) {
            const productObject = new ProductItem(product);
            this._allProducts.push(productObject);
            // block.insertAdjacentHTML('beforeend', productObject.getHTMLString());
            this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
		//Отыскивает кнопки добавить в корзину у всех товаров и навешивает на них обработчик
		let addTocartButton = document.querySelectorAll('.buy-btn');
		addTocartButton.forEach((button, i) => {
			button.addEventListener('click', function () {
				myCart.addItem(myProductList._allProducts[i], i);

			})
		});
    }
}

let myProductList = new ProductList();
