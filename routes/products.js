/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const productList = [];

// testing to see if Postman is working
// router.get('/', (req, res)=>{
//   res.send('are you working');
// });

router.get('/', (req, res)=>{
  res.send({'productList': productList});
});

router.post('/', (req, res)=>{
  // console.log(req.body);
  let newProducts = req.body;
  let data = {
    // id: newProducts.id,
    name: newProducts.name,
    price: newProducts.price,
    inventory: newProducts.inventory
  };
  productList.push(data);
  console.log(productList);
  res.end();
});






module.exports = router;