'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// list all current shows
// router.get('/dump', (req, res, next) => {
//     knex('gifs')
//         .orderBy('gif_date', 'desc')
//         .then((gifs) => {
//             res.render('dump', { gifs })
//         })
//         .catch((err) => {
//             next(err);
//         });
// });

router.get('/dump', (req, res, next) => {
    knex('gifs')
    .orderBy('gif_id', 'desc')
    .then((gifs) => {
        return knex('sign_up')
        .orderBy('sign_up_id')
        .then((sign_up) => {
        res.render('dump', { gifs, sign_up })
        })
    })
    .catch((err) => {
        next(err);
    });
});

module.exports = router;