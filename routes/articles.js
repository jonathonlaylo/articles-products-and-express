/*jshint esversion: 6 */
const express = require('express');
const articles = express.Router();
const dbArticles = require('../db/articles');





module.exports = articles;