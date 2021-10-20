const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/img', express.static(path.resolve(__dirname, './db')));
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/api/cart', cartRouter);

const catalogJSONPath = path.resolve(__dirname, './db/products.json');

app.get('/api/products', (req, res) => {
  fs.readFile(catalogJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

app.put('/api/products/current', (req, res) => {
  fs.writeFile(path.resolve(__dirname, '../server/db/currentProduct.json'), JSON.stringify(req.body, null, 4), (err) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(JSON.stringify({ result: 1}));
    }
  });
});

app.get('/api/products/current', (req, res) => {
  fs.readFile(path.resolve(__dirname,'../server/db/currentProduct.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

app.get('/api/products/:id', (req, res) => {
  fs.readFile(path.resolve(__dirname,'../server/db/products.json'), 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
	  const find = JSON.parse(data).find(el => el.product_id === +req.params.id);
      res.send(find);
    }
  });
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening ${port} port`);
});
// CRUD
// app.get(); // READ
// app.post(); // CREATE
// app.put(); // UPDATE
// app.delete(); // DELETE
