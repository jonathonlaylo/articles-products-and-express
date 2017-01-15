/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const products = require('../db/products.js');
const productList = products.productList;
// const productList = [];
const counter = {count : 0};

router.get('/', (req, res)=>{
  res.send({'productList': productList});
});

router.post('/', (req, res)=>{
  let newProducts = req.body;
  // let idCounter = counter.count++;
  let data = {
    id: counter.count++,
    name: newProducts.name,
    price: parseInt(newProducts.price),
    inventory: parseInt(newProducts.inventory)
  };
  productList.push(data);
  console.log(productList);
  // console.log('data.id', data.id);
  // console.log(req.body.id);
  res.json(productList);
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
    res.json(productList[newID].name);
    console.log(productList);
  }
  if(newProducts.price){
    productList[addressID].price = newProducts.price;
    res.json(productList[newID].name);
    console.log(productList);
  }
  if(newProducts.inventory){
    productList[addressID].inventory = newProducts.inventory;
    res.json(productList[newID].inventory);
    console.log(productList);
  }
});

router.delete('/:id', (req, res)=>{
  let newProducts = req.body;
  let removeID = req.body.id;
  let addressID = req.params.id;
  // if statement to remove the id
  // res.send('are you working');
  // for (var i = 0; i < productList.length; i++) {
  //   if (newProducts[addressID]) {
  //     // res.json(delete productList[addressID]);
  //     res.json(productList.splice(0,1));
  //   }
  // }
  if (newProducts.id) {
    // res.json(delete productList[addressID]);
    res.json(productList.splice(0,1));
  }
});


module.exports = router;

    // testing to see if Postman is working
    // router.get('/', (req, res)=>{
    //   res.send('are you working');
    // });