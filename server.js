/*jshint esversion: 6 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const products = require('./routes/products');
const handlebars = require('express-handlebars');

const hbs = handlebars.create({
  extname: '.hbs',
  defaultlayout: 'app'
});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', products);

app.get('/', (req, res) =>{
  console.log('test test testies');
});

module.exports = app;