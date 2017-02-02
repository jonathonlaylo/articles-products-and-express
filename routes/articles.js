/*jshint esversion: 6 */
const express = require('express');
const articles = require('../db/articles.js');
const server = require('../server');

const app = express();
const router = express.Router();

const articlesList = articles.articlesList;

const PG_PASS = process.env.PG_PASS;
const pgp = require(`pg-promise`)();
const db = pgp({
  host: `localhost`,
  port: 5432,
  database: `articles_products`,
  user: `jonathonlaylo`,
  password: PG_PASS
});

router.route('/')
  .get((req, res)=>{
    db.any(`SELECT * FROM articles`)
      .then(articles=>{
        res.render('articles/article', {'articles': articles});
      })
      .catch(err =>{
        res.redirect('articles/new');
      });
    })
  .post((req, res)=>{
    let newArticles = req.body;
    let url_title = encodeURIComponent(newArticles.title);
    db.none(`INSERT INTO articles (title, body, author, url_title) VALUES ('${newArticles.title}', '${newArticles.body}', '${newArticles.author}', '${url_title}')`)
      .then(articles=>{
        res.redirect('/articles');
      })
      .catch(err=>{
        console.error(err);
      });
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

module.exports = router;