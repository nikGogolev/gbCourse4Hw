'use strict';
class Hamburger {
	#size;
	#stuffing;
	#price;
	#calories;
	#toppings;
	#hambForm;
	#topping;
	constructor(size, stuffing, topping, hambForm) {
		this.#size = size;
		this.#stuffing = stuffing;
		this.#price = 0;
		this.#calories = 0;
		this.#toppings = {};
		this.#hambForm = document.querySelector(hambForm);
		this.#topping = this.#hambForm.querySelectorAll(topping);
		this.#calculate();
	}

	addTopping(topping) {
		
		switch (topping){
			case 'grass':
				if (this.#toppings[topping] === undefined){this.#toppings[topping] = 0;}
				this.#toppings[topping] += 1;
				this.#price += 15;
				return(`Топпинг ${topping} добавлен`);
			case 'mayonnaise':
				if (this.#toppings[topping] === undefined){this.#toppings[topping] = 0;}
				this.#toppings[topping] += 1;
				this.#price += 20;
				this.#calories += 5;
				return(`Топпинг ${topping} добавлен`);
			default:
				return('Неправильный топпинг');
		}
	}// Добавить добавку }
	
	removeTopping(topping) {
		switch (topping){
			case 'grass':
				if (this.#toppings[topping] >= 1){this.#toppings[topping] -= 1;
				this.#price -= 15;
				return(`Топпинг ${topping} убран`);}
			case 'mayonnaise':
				if (this.#toppings[topping] >= 1){this.#toppings[topping] -= 1;
				this.#price -= 20;
				this.#calories -= 5;
				return(`Топпинг ${topping} убран`);}
			default:
				return('Неправильный топпинг');
		}
	 } // Убрать добавку }
	getToppings() {
		let toppings = [];
		for (let topping in this.#toppings){
			if (this.#toppings[topping]){
				toppings.push(`${topping}x${this.#toppings[topping]}`);
			}
		}
		return toppings;
	}   // Получить список добавок }
	getSize() {
		return this.#size;
	}              // Узнать размер гамбургера }
	getStuffing() {
		return this.#stuffing;
	}          // Узнать начинку гамбургера }
	calculatePrice() {
		return this.#price;
	}       // Узнать цену }
	calculateCalories() {
		return this.#calories;
	}    // Узнать калорийность }

	#calculate() {
		switch (this.#size){
			case 'min':
				this.#price += 50;
				this.#calories += 20;
				break;
			case 'max':
				this.#price += 100;
				this.#calories += 40;
				break;
		}
		switch (this.#stuffing){
			case 'cheese':
				this.#price += 10;
				this.#calories += 20;
				break;
			case 'salad':
				this.#price += 20;
				this.#calories += 5;
				break;
			case 'potato':
				this.#price += 15;
				this.#calories += 10;
				break;
		}
		
		this.#topping.forEach(topping => {
			if(topping.checked){this.addTopping(topping.id)}});
	}
}

let hamburger;
document.querySelector('form').addEventListener('submit', function(event){
	let hambSize = document.querySelector('#size').value;
	let hambStuffing = document.querySelector('#stuffing').value;
	event.preventDefault();
	hamburger = new Hamburger(hambSize, hambStuffing,'.topping', 'form');
	document.querySelector('.hamb-price').value = hamburger.calculatePrice();
	document.querySelector('.hamb-calories').value = hamburger.calculateCalories();
	document.querySelector('.hamb-size').value = hamburger.getSize();
	document.querySelector('.hamb-stuffing').value = hamburger.getStuffing();
	document.querySelector('.add-grass').disabled = false;
	document.querySelector('.add-mayonnaise').disabled = false;
	document.querySelector('.remove-grass').disabled = false;
	document.querySelector('.remove-mayonnaise').disabled = false;
	console.log(hamburger);
	
});

document.querySelector('.add-grass').addEventListener('click', function(){
	hamburger.addTopping('grass');
	document.querySelector('.hamb-price').value = hamburger.calculatePrice();
	document.querySelector('.hamb-calories').value = hamburger.calculateCalories();
});

document.querySelector('.add-mayonnaise').addEventListener('click', function(){
	hamburger.addTopping('mayonnaise');
	document.querySelector('.hamb-price').value = hamburger.calculatePrice();
	document.querySelector('.hamb-calories').value = hamburger.calculateCalories();
});

document.querySelector('.remove-grass').addEventListener('click', function(){
	hamburger.removeTopping('grass');
	document.querySelector('.hamb-price').value = hamburger.calculatePrice();
	document.querySelector('.hamb-calories').value = hamburger.calculateCalories();
});

document.querySelector('.remove-mayonnaise').addEventListener('click', function(){
	hamburger.removeTopping('mayonnaise');
	document.querySelector('.hamb-price').value = hamburger.calculatePrice();
	document.querySelector('.hamb-calories').value = hamburger.calculateCalories();
});

