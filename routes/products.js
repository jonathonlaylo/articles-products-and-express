/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
// const dbProducts = require('../db/products');

router.get('/', (req, res)=>{
  res.send('are you working');
});

// products.route('/')
// .post((res, req) =>{
//   dbProducts.add(req.body);
//   res.json({'sucess': true});
// });


module.exports = router;