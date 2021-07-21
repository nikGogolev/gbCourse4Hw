'use strict';
const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];
/*
Можно убрать return, т.к. отсутствуют другие операторы
*/
const renderProduct = (title = '', price = '') => `<div class="product-item">
													<h3 class="product-item-heading">${title}</h3>
													<p class="product-item-price">${price}</p>
													<button class="product-item-buy-btn">Добавить</button>
												  </div>`;


/*
Запятые можно убрать либо в исходном варианте написав
document.querySelector('.products').innerHTML = productList.join('');
либо так, как сделано у меня (это же и упрощает функцию, на мой взгляд)
либо еще как-то
*/
const renderProducts = (list) => {
	let productList='';
	list.forEach(item => productList += renderProduct(item.title, item.price));
    console.log(productList);
    document.querySelector('.products').innerHTML = productList;
}

renderProducts(products);
