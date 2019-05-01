'use strict';

const express = require('express');
const router = express.Router();
// const knex = require('../db/knex');

// list all current shows
router.get('/index', (req, res, next) => {

    res.render('index')

  });

module.exports = router;