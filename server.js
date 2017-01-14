/*jshint esversion: 6 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const products = require('./routes/products');

app.use('/products', products);

module.exports = app;