/*jshint esversion: 6 */
const express = require('express');
const products = require('../db/products.js');
const server = require('../server');

const app = express();
const router = express.Router();

const productList = products.productList;
let idCounter = 0;

router.get('/', (req, res)=>{
  // res.send(productList);
  res.render('products/product', {'postProducts': productList});
});

router.get('/new', (req, res)=>{
  res.render('products/new');
});

router.post('/', (req, res)=>{
  let newProducts = req.body;

  if(newProducts.name && newProducts.price && newProducts.inventory){
      newProducts.id = idCounter;
      idCounter++;
      productList.push(newProducts);
      console.log(productList);
      // res.send(newProducts);
      let postProducts = res.redirect('/products');
  } else {
    res.send('Whoops');
  }
});

router.put('/:id', (req, res)=>{
  let newProducts = req.body;
  // console.log(newProducts);
  let newID = req.body.id;
  // console.log(newID);
  let addressID = req.params.id;
  // console.log(addressID);

  if(newProducts.name){
    productList[addressID].name = newProducts.name;
    res.send(productList[newID].name);
    console.log(productList);
  }
  if(newProducts.price){
    productList[addressID].price = newProducts.price;
    res.send(productList[newID].price);
    console.log(productList);
  }
  if(newProducts.inventory){
    productList[addressID].inventory = newProducts.inventory;
    res.send(productList[newID].inventory);
    console.log(productList);
  }
});

router.delete('/:id', (req, res)=>{
  let addressID = parseInt(req.params.id);

  for (var i = 0; i < productList.length; i++) {
    if (productList[i].id === addressID) {
      productList.splice(i,1);
      console.log(productList);
    }
  }
  console.log(productList);
  res.send(productList);
    //   if (newProducts.id) {
    //    res.send(productList.splice(i,1));
    //   }
    // }
});

module.exports = router;

    // testing to see if Postman is working
    // router.get('/', (req, res)=>{
    //   res.send('are you working');
    // });