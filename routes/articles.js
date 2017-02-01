/*jshint esversion: 6 */
const express = require('express');
const articles = require('../db/articles.js');
const server = require('../server');

const app = express();
const router = express.Router();

const articlesList = articles.articlesList;

router.route('/')
  .get((req, res)=>{

  })
  .post((req, res)=>{

  });

router.route('/new')
  .get((req, res)=>{
    res.render(`articles/new`);
  });

router.route('/:title')
  .get((req, res)=>{

  })
  .put((req, res)=>{

  })
  .delete((req, res)=>{

  });

router.route('/:title/edit')
  .get((req, res)=>{

  });

// router.post('/', (req, res)=>{
//   let newArticles = req.body;
//   let urlEncode = encodeURIComponent(String(req.body.title));

//   if(newArticles.title && newArticles.body && newArticles.author){
//       newArticles.urlTitle = urlEncode;

//       articlesList.push(newArticles);
//       console.log(articlesList);
//       // res.send(newArticles);
//       // let postArticles = res.redirect('/articles');
//   } else {
//     res.send('Whoops');
//   }
// });



module.exports = articles;