'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// get all gifs
router.get('/tag_admin', (req, res, next) => {
    knex('gifs')
    .orderBy('gif_name', 'asc')
    .then((gifs) => {
    let tags = ``
    res.render('tag_admin', { gifs, tags })
    })
    .catch((err) => {
        next(err);
    });
});

// get selected gif and associations
router.get('/tag_admin/:id', (req, res, next) => {
  console.log(req.params.id)
  knex('gifs')
  .where('gif_id', req.params.id)
  // .first()
  .then((gifs) => {
    return knex('tags')
    .innerJoin('gif_tags', 'gif_tags_tag', 'tag_id')
    .where('gif_tags_gif', req.params.id)
    .then((id_tags) => {
      return knex('tags')
      .then((tags) => {
      res.render('tag_admin', { gifs, id_tags, tags })
      })
    })
  })
  .catch((err) => {
    next(err);
  });
});

// add new tag
// let tag_id;
// router.post('/tag_admin_add', (req, res, next) => {
//   knex('tags')
//   .where('tag_name', req.body.tag_name)
//   .then((tags) => {
//     let t;
//     knex.transaction(function(t) {
//       if (!tags) {
//         return knex('tags')
//         .transacting(t)
//         .returning('tag_id')
//         .insert({
//           tag_name: req.body.tag_name
//         })
//         .then((resp) => {
//           // tag_insert_id = Number(resp);
//           // console.log('res' + resp);
//           return knex('gif_tags')
//           .transacting(t)
//           // .returning(resp)
//           .insert({
//               gif_tags_gif: req.body.gif_id, 
//               gif_tags_tag: Number(resp), 
//           })
//         })
//       } else {
//         tag_id = tags[0].tag_id
//         return knex('gif_tags')
//         .transacting(t)
//         // .returning(resp)
//         .insert({
//             gif_tags_gif: req.body.gif_id, 
//             gif_tags_tag: tag_id, 
//         })
//       }
//     })
//     .then(t.commit)
//     .then(() => {
//         // console.log(assassin_id);
//         res.redirect('tag_admin');
//     })
//     .catch((err) => {
//         t.rollback();
//         throw err;
//     })
//     .then(() => {
//     console.log('it worked');
//     })
//     .catch((err) => {
//     console.log('it failed', err);
//     })
//   })
// });

// add new tag
router.post('/tag_admin_add', (req, res, next) => {
  let gif_id = req.body.gif_id;
  knex('tags')
  .where('tag_name', req.body.tag_name)
  .then((tags) => {
    if (tags.length === 0) {
      console.log(`No. There is not a tag match`)
      console.log(`The new tag is ${req.body.tag_name}`)
      knex.transaction(function(t) {
        return knex('tags')
        .transacting(t)
        .returning('tag_id')
        .insert({
            tag_name: req.body.tag_name
        })
        .then((resp) => {
            // tag_insert_id = Number(resp);
            // console.log('res' + resp);
            return knex('gif_tags')
            .transacting(t)
            // .returning(resp)
            .insert({
                gif_tags_gif: req.body.gif_id, 
                gif_tags_tag: Number(resp), 
            })
        })
        .then(t.commit)
        .then(() => {
            // console.log(assassin_id);
            res.redirect('tag_admin/' + req.body.gif_id);
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
    } else {
      console.log(`Yes. There is a tag match`);
      for (let i=0; i<tags.length; i++) {
        console.log(tags[i].tag_name)
      };
      knex.transaction(function(t) {
        return knex('gif_tags')
        .transacting(t)
        // .returning(resp)
        .insert({
          gif_tags_gif: req.body.gif_id, 
          gif_tags_tag: tags[0].tag_id, 
        })
        .then(t.commit)
        .then(() => {
            // console.log(assassin_id);
            res.redirect('tag_admin/' + req.body.gif_id);
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
    }
  })
});

// delete the gif_tags record
router.post('/tag_admin_delete', (req, res, next) => {

    console.log(`tag# ${req.body.gif_tags_tag}`)
    console.log(`gif# ${req.body.gif_tags_gif}`)
      let gif_tags_row;
    
    knex('gif_tags')
    .where('gif_tags_tag', req.body.gif_tags_tag)
    .andWhere('gif_tags_gif', req.body.gif_tags_gif)
    .then((row) => {
      if (!row) {
        return next();
      }
      gif_tags_row = row;
      return knex('gif_tags')
      .del()
      .where('gif_tags_tag', req.body.gif_tags_tag)
      .andWhere('gif_tags_gif', req.body.gif_tags_gif);
    })
    .then(() => {
      // delete gif_tags_row.gif_tags_id;
      res.redirect('tag_admin/' + req.body.gif_tags_gif);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;