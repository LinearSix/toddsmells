'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// list all gifs
router.get('/gif_admin', (req, res, next) => {
  knex('gifs')
      .then((gifs) => {
          res.render('gif_admin', { gifs })
      })
      .catch((err) => {
          next(err);
      });
});

let gif_insert_id
router.post('/gif_admin/upload', function(req, res) {

    knex('gifs')
    .where('gif_path', req.files.gifUpload.name)
    .then(function(gifs) {
        if (gifs.length > 0) {

            console.log(`You already uploaded that one, idiot.`)
            return res.redirect('/gif_admin');

        } else if (Object.keys(req.files).length == 0) {

            return res.status(400).send('No files were uploaded.');

        } else {

            // The name of the input field (i.e. "gifUpload") is used to retrieve the uploaded file
            let gifUpload = req.files.gifUpload;

            // Use the mv() method to place the file somewhere on your server
            gifUpload.mv(`public/gifs/${req.files.gifUpload.name}`, function(err) {
            if (err)
                return res.status(500).send(err);

                knex.transaction(function(t) {
                    return knex('gifs')
                    .transacting(t)
                    .returning('gif_id')
                    .insert({
                    gif_date: null, 
                    gif_name: req.body.gif_name, 
                    gif_path: req.files.gifUpload.name, 
                    gif_quote: req.body.gif_quote,
                    gif_desc: req.body.gif_desc
                    })
                    .then((resp) => {
                        gif_insert_id = Number(resp);
                    })
                    .then(t.commit)
                    .then(() => {
                        res.redirect('/gif_admin');
                    })
                    .catch((err) => {
                        t.rollback();
                        throw err;
                    })
                    .then(() => {
                    console.log('it worked');
                    })
                    .catch((err) => {
                    console.log('it failed', err);
                    })
                })
            });
        };
    });
});

module.exports = router;