'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// set variables from querystring
// let urlParams = new URLSearchParams(window.location.search);


// get all tags
router.get('/search', (req, res, next) => {
    // if there are items in the querystring
    let searchData = (req.query.tag_name);
    if (searchData) {
    //     knex('tags')
    //     .returning('tag_id')
    //     .where('tag_name', searchData)
    //     .innerJoin('gif_tags', 'gif_tags_tag', 'tag_id')
    //     // .innerJoin('gifs', 'gif_id', 'gif_tags_gif')
    //     .then((resp) => {
    //         tag_id = Number(resp);
    //     })
    //     .then((gifs) => {
    //         return knex('gifs')
    //         .innerJoin('gif_tags', 'gif_tags_tag', 'assassin_id')
    //         .innerJoin('contracts', 'ass_cont_contract', 'contract_id')
    //         .innerJoin('code_names', 'assassin_id', 'code_assassin')
    //         .where('ass_cont_contract', req.params.id)
    //         .then((assassins) => {
    //         // console.log(contracts)
    //         // console.log(assassins)
    //         if (assassins === {}) {
    //             assassins = {'assassin_id': 1, 'assassin_name': 'none'}
    //         }
    //             res.render('contract_detail', { contracts, assassins });
    //         })
    //     })
    //     .catch((err) => {
    //         next(err);
    //     });
    // }); 

        knex.select(
        'gifs.gif_id',
        'gifs.gif_name',
        'gifs.gif_path',
        'gifs.gif_quote',
        'gifs.gif_desc',
        'gif_tags.gif_tags_gif',
        'gif_tags.gif_tags_tag',
        'tags.tag_id',
        'tags.tag_name'
        )
        .from('gifs')
        .innerJoin('gif_tags', 'gif_tags.gif_tags_gif', 'gifs.gif_id')
        .innerJoin('tags', 'tags.tag_id', 'gif_tags.gif_tags_tag')
        .where('tags.tag_name', '=', searchData)
        .then((gifs) => {
            return knex('tags')
            .then((tags) => {
                console.log('--------------------------------------')
                console.log('')
                console.log('--------------------------------------')
                console.log(gifs)
                console.log(tags)
            res.render('search', { gifs, tags })
            })
        })
        .catch((err) => {
            next(err);
        });
    } else {
        knex('tags')
        .orderBy('tag_name', 'asc')
        .then((tags) => {
            let gifs = [];
        res.render('search', { gifs, tags })
        })
        .catch((err) => {
            next(err);
        });
    };
});

// Variables used for getting data from query string
// let urlParams = new URLSearchParams(window.location.search);
// let searchData = (urlParams.get(`search`));
// let searchLimit = (urlParams.get(`limit`));
// let searchAdd = (urlParams.get(`add`));
// let searchRemove = (urlParams.get(`remove`));

// get selected gif and associations
// router.get('/search/:id', (req, res, next) => {
//   console.log(req.params.id)
//   knex('gifs')
//   .innerJoin('gif_tags', 'gif_tags_tag', 'tag_id')
//   .where('tag_name', req.body.tag_name)
//   // .first()
//   .then((gifs) => {
//     return knex('tags')
//     .then((tags) => {
//       res.render('search', { gifs, tags })
//     })
//   })
//   .catch((err) => {
//     next(err);
//   });
// });

module.exports = router;