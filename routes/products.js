/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const querystring = require('querystring');
const productList = [];
const counter = {count : 0};

// testing to see if Postman is working
// router.get('/', (req, res)=>{
//   res.send('are you working');
// });

router.get('/', (req, res)=>{
  res.send({'productList': productList});
});

router.post('/', (req, res)=>{
  let newProducts = req.body;
  // let idCounter = counter.count++;
  let data = {
    id: counter.count++,
    name: newProducts.name,
    price: newProducts.price,
    inventory: newProducts.inventory
  };
  productList.push(data);
  console.log('productList', productList);
  console.log(data.id);
  // console.log(req.body.id);
  res.json(productList);
});

router.put('/:id', (req, res)=>{
  let newProducts = req.body;
  for (var i = 0; i < productList.length; i++) {
    if(data.id === productList[i].id){

    }
  }
});

router.delete('/:id', (req, res)=>{
  let newProducts = req.body;
  let removeID = req.body.id;

  // if statement to remove the id
  if (true) {

  }
});


module.exports = router;
    //something something hasOwnProperty dafuq do i know
    // if(updateID.hasOwnProperty(newProducts.name)){

    // } else if(updateID.hasOwnProperty(newProducts.price)){

    // } else if(updateID.hasOwnProperty(newProducts.inventory)){

    // }