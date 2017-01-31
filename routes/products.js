/*jshint esversion: 6 */
const express = require('express');
const products = require('../db/products.js');
const server = require('../server');

const router = express.Router();

const productList = products.productList;
let idCounter = 0;

const PG_PASS = process.env.PG_PASS;
const pgp = require(`pg-promise`)();
const db = pgp({
  host: `localhost`,
  port: 5432,
  database: `articles_products`,
  user: `jonathonlaylo`,
  password: PG_PASS
});

router.get('/', (req, res)=>{
  // res.send(productList);
  // res.render('products/product', {'postProducts': productList});
  // res.render('products/product');

  db.any(`SELECT * FROM products`)
  .then(products =>{
    console.log('products', products);
    res.render('products/product', {'products': products});

  })
  .catch(err => {
    res.redirect(`products/new`);
  });
});

router.get('/new', (req, res)=>{
  res.render('products/new');

  // db.any(`SELECT * FROM products`)
  // .then(products => {
  //   res.render('products/new', {'postProducts': productList});
  // })
  // .catch(err => console.error(err));
});

router.get('/:id', (req, res)=>{
  let product = null;
  let addressID = parseInt(req.params.id);

  db.one(`SELECT * FROM products WHERE id = ${addressID}`)
  .then(products =>{
    res.render('products/product', {'products': products});
  })
  .catch(err => console.log(err));

  // for (var i = 0; i < productList.length; i++) {
  //   if (productList[i].id === addressID){
  //     product = productList[i];
  //   }
  //   if(product !== null){
  //     res.render('products/product', {'postProducts': products});
  //   }
  // }
});

router.get('/:id/edit', (req, res)=>{
  // let product = null;
  // let addressID = req.body;
  let addressID = parseInt(req.params.id);

  db.one(`SELECT * FROM products WHERE id = ${addressID}`)

  .then((products) =>{
    // res.render('/products/`${addressID.id}`/edit');
    res.render('./products/edit', products);
  })
  .catch(err => console.log(err));

  // for (var i = 0; i < productList.length; i++) {
  //   if (productList[i].id === addressID){
  //     product = productList[i];
  //   }
  //   if(product !== null){
  //     res.render('products/edit', {products});
  //   }
  // }
});

router.post('/', (req, res)=>{
  let newProducts = req.body;

  db.none(`INSERT INTO products (name, price, inventory) VALUES ('${newProducts.name}', ${newProducts.price}, ${newProducts.inventory})`)
  .then(products =>{
    res.redirect('/products');
    // console.log('newProducts', newProducts);
  })
  .catch(err =>{
    console.error(err);
  });

  // if(newProducts.name && newProducts.price && newProducts.inventory){
  //     newProducts.id = idCounter;
  //     idCounter++;
  //     productList.push(newProducts);
  //     console.log(productList);
  //     // res.send(newProducts);
  //     let postProducts = res.redirect('/products');
  // } else {
  //   res.redirect('/products/new');
  // }
});

router.put('/:id', (req, res)=>{
  let addressID = req.body;
  // let newID = req.body.id;
  let queryID = parseInt(req.params.id);

  // db.one(`SELECT * FROM products WHERE id = ${addressID}`)
  db.one(`UPDATE products SET name = '${req.body.name}', price = '${req.body.price}', '${req.body.inventory}' WHERE id = '${queryID}' RETURNING *`)
  .then(products =>{
    res.render('./products/product', products);
  })
  .catch(err =>{
    console.error(err);
  });

  // if(newProducts.name){
  //   productList[addressID].name = newProducts.name;
  //   res.send(productList[newID].name);
  //   console.log(productList);
  // }
  // if(newProducts.price){
  //   productList[addressID].price = newProducts.price;
  //   res.send(productList[newID].price);
  //   console.log(productList);
  // }
  // if(newProducts.inventory){
  //   productList[addressID].inventory = newProducts.inventory;
  //   res.send(productList[newID].inventory);
  //   console.log(productList);
  // }
});

router.get('/:id/delete', (req, res)=>{
  let addressID = parseInt(req.params.id);

  db.none(`DELETE FROM products WHERE id = ${addressID}`)
  .then(() =>{
    res.redirect('/products');
    // res.redirect('products/delete',{products});
  })
  .catch(err =>{
    console.log('WAT?');
  });

  // for (var i = 0; i < productList.length; i++) {
  //   if (productList[i].id === addressID) {
  //     productList.splice(i,1);
  //     console.log(productList);
  //   }
  // }
  // console.log(productList);
  // res.send(productList);
});

module.exports = router;