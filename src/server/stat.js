const fs = require('fs');

const path = require('path');

let products = [];
let newEvent = {};
let find;
const statsJSON = path.resolve(__dirname, './db/stats.json');
const catalogJSON = path.resolve(__dirname, './db/products.json');

fs.readFile(catalogJSON, 'utf-8', (err, data) => {
    if (err) {
    } else {
      products = JSON.parse(data);
    }
});


const writeEvent = (newEvent) => {
	fs.readFile(statsJSON, 'utf-8', (err, data) => {
		let newData = JSON.parse(data);
		newData.push(newEvent);
		fs.writeFile(statsJSON, JSON.stringify(newData, null, 4), (err) => {
			if(err){
				console.log('Ошибка записи');
			}
		});
	})
}
  
const stat = (req, action) => {
	switch (action){
		case 'add':
			find = products.find(el => el.product_id === +req.body.product_id);
			newEvent = {
				event: 'Добавление нового товара',
				productName: find.product_name,
				time: new Date,
			};
			writeEvent(newEvent);
			break;
		case 'change':
			find = products.find(el => el.product_id === +req.params.id);
			newEvent = {
				event: `${req.body.quantity > 0 ? 'Увеличение' : 'Уменьшение'} количества товара на единицу`,
				productName: find.product_name,
				time: new Date,
			};
			writeEvent(newEvent);
			break;
		case 'del':
			find = products.find(el => el.product_id === +req.params.id);
			newEvent = {
				event: `Удаление товара`,
				productName: find.product_name,
				time: new Date,
			};
			writeEvent(newEvent);
			break;
		case 'clear':
			newEvent = {
				event: `Очистка корзины`,
				time: new Date,
			};
			writeEvent(newEvent);
			break;
	}
	
}

module.exports = stat;
