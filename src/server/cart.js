const calcSum = (cart) => {
	let sum = 0;
	cart.contents.forEach((item) => {
		sum += item.quantity*item.product_price;
	});
	cart.amount = sum;
}

const add = (cart, req) => {
  cart.contents.push(req.body);
  cart.countGoods += 1;
  calcSum(cart);
  return JSON.stringify(cart, null, 4);
};

const change = (cart, req) => {
  const find = cart.contents.find(el => el.product_id === +req.params.id);
  find.quantity += req.body.quantity;
  calcSum(cart);
  return JSON.stringify(cart, null, 4);
};

const del = (cart, req) => {
  const find = cart.contents.find(el => el.product_id === +req.params.id);
  cart.contents.splice(cart.contents.indexOf(find), 1);
  cart.countGoods += -1;
  calcSum(cart);
  return JSON.stringify(cart, null, 4);
};

const clear = (cart) => {
  cart.contents = [];
  cart.countGoods = 0;
  calcSum(cart);
  return JSON.stringify(cart, null, 4);
}

module.exports = {
  add,
  change,
  del,
  clear
};
