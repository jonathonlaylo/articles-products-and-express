/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const products = require('../db/products.js');
const productList = products.productList;
// const productList = [];
// const counter = {count : 0};
let idCounter = 0;

router.get('/', (req, res)=>{
  res.send(productList);
});

router.post('/', (req, res)=>{
  let newProducts = req.body;
  // let idCounter = counter.count++;
  // let data = {
  //   id: counter.count++,
  //   name: newProducts.name,
  //   price: parseInt(newProducts.price),
  //   inventory: parseInt(newProducts.inventory)
  // };
  if(newProducts.name && newProducts.price && newProducts.inventory){
      newProducts.id = idCounter;
      idCounter++;
      productList.push(newProducts);
      console.log(productList);
      res.send(newProducts);
  } else {
    res.send('Whoops');
  }
  // productList.push(data);
  // console.log(productList);
  // // console.log('data.id', data.id);
  // // console.log(req.body.id);
  // res.send(productList);
});

router.put('/:id', (req, res)=>{
  // res.send("are you working");
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
    res.send(productList[newID].name);
    console.log(productList);
  }
  if(newProducts.inventory){
    productList[addressID].inventory = newProducts.inventory;
    res.send(productList[newID].inventory);
    console.log(productList);
  } else {
    res.send('Whoops');
  }
});

router.delete('/:id', (req, res)=>{
  let addressID = parseInt(req.params.id);
  // if statement to remove the id
  // res.send('are you working');
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