'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// list all current shows
router.get('/index', (req, res, next) => {
  knex('gifs')
      .then((gifs) => {
          res.render('index', { gifs })
      })
      .catch((err) => {
          next(err);
      });
});

module.exports = router;