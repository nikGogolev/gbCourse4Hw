const fs = require('fs');
const statFile = './server/db/stats.json';

let products = [];
let newEvent = {};
let find;

fs.readFile('./server/db/products.json', 'utf-8', (err, data) => {
    if (err) {
    } else {
      products = JSON.parse(data);
    }
});


const writeEvent = (newEvent) => {
	fs.readFile(statFile, 'utf-8', (err, data) => {
		let newData = JSON.parse(data);
		newData.push(newEvent);
		fs.writeFile(statFile, JSON.stringify(newData, null, 4), (err) => {
			console.log('Ошибка записи');
		});
	})
}
  
const stat = (req, action) => {
	switch (action){
		case 'add':
			find = products.find(el => el.id_product === +req.body.id_product);
			newEvent = {
				newEvent: 'Добавление нового товара',
				productName: find.product_name,
				time: new Date,
			};
			writeEvent(newEvent);
			break;
		case 'change':
			find = products.find(el => el.id_product === +req.params.id);
			newEvent = {
				newEvent: `${req.body.quantity > 0 ? 'Увеличение' : 'Уменьшение'} количесва товара на единицу`,
				productName: find.product_name,
				time: new Date,
			};
			writeEvent(newEvent);
			break;
		case 'del':
			find = products.find(el => el.id_product === +req.body.id_product);
			newEvent = {
				newEvent: `Удаление товара`,
				productName: find.product_name,
				time: new Date,
			};
			writeEvent(newEvent);
			break;
	}
	
}

module.exports = stat;