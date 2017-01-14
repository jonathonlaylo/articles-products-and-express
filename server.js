/*jshint esversion: 6 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const products = require('./routes/products');
const articles = require('./routes/articles');

const hbs = handlebars.create({
  extname: '.hbs',
  defaultlayout: 'app'
});


app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', products);


// app.get('/', (req, res) =>{
//   res.render('products', products);
//   // counter.count++;
//   // res.send(counter);
// });

module.exports = app;