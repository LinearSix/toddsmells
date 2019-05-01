'use strict';

const express = require('express');
const router = express.Router();
// const knex = require('../db/knex');

// list all current shows
router.get('/signup', (req, res, next) => {

    res.render('signup')

  });

module.exports = router;