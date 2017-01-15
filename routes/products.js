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
  // console.log('req.body', newProducts.id, newProducts.name);
  // console.log(productList[0].name);

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
    // if(newProducts.id === productList[i].id){
    //   let newName = newProducts.name;
    //   console.log(newName);
    //   productList[i].name = newName;
    //   res.render(productList[i].name);
    //   console.log('put productList', productList[i].name);
    // }
    // console.log("test");

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