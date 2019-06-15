const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config()
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const knex = require('./db/knex');
const schedule = require('node-schedule');

// use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set the folder for public content
app.use(express.static(path.join(__dirname, 'public')))

// set the folder for npm packages
app.use(express.static(path.join(__dirname, 'node_modules')))

// set the favicon file
app.use(favicon(path.join(__dirname,'public','favicon.ico')));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// set express routes
const index = require('./routes');
const route_signup = require('./routes/signup');
const route_gif_admin = require('./routes/gif_admin');

// send gif to the sendMMS function
function getGif() {
    let gifArr = [];
    return knex('gifs')
    .limit(1)
    .whereNull('gif_date')
    .then(function(gifs) {
        gifs.forEach(function(value) {
            gifArr.push(value)
        });
        return gifArr;
    });
};

// update the gif sent in the sendMMS function's date
function updateGifDate(id) {
    let insertDate = new Date();
    knex('gifs')
    .whereNull('gif_date')
    .first()
    .then((gifs) => {
      if (!gifs) {
        return next;
      };
      return knex('gifs')
        .update({ 
            gif_date: insertDate
        }, '*')
        .where('gif_id', id);
    })
    .catch((err) => {
      next(err);
    });
};

//  prepare the MMS content retrieved from getGifs
let gifID = ``;
let gifPath = ``;
let gifDate = ``;
let gifQuote = ``;
async function returnedGifs() {
    // here's the gif!
    let gifData = await getGif();
    gifID = gifData[0].gif_id;
    gifPath = gifData[0].gif_path;
    gifDate = gifData[0].gif_date;
    gifQuote = gifData[0].gif_quote;
    console.log(`gifID: ${gifID}`);
    console.log(`gifPath: ${gifPath}`);
    console.log(`gifDate: ${gifDate}`);
    // now go update null to the current date
    await updateGifDate(gifID)
};

// set Twilio SID and Token
const accountSid = process.env.VAR_TWILIO_SID;
const authToken = process.env.VAR_TWILIO_AUTH;
const client = require('twilio')(accountSid, authToken);
// const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

let numbersToMessage = ["+15126737109"];

// let j = schedule.scheduleJob('0 0 15 37 * *', function(){
//     numbersToMessage.forEach(function(number){
//         var message = client.messages.create({
//             body: 'Successful test from database!',
//             from: process.env.VAR_FROM,
//             mediaUrl: `http://localhost:2020/gifs/${ gifPath }.gif`,
//             to: number
//         })
//         .then(message =>  console.log(message.status))
//         .done();
//     });
// });

// this function is for testing and send a new gif every 5 seconds
function sendMMS() {
    returnedGifs();
    numbersToMessage.forEach(function(number){
        var message = client.messages.create({
            body: gifQuote,
            from: process.env.VAR_FROM,
            mediaUrl: `http://www.daviemurray.com/${ gifPath }.gif`,
            to: number
        })
        .then(console.log(gifPath))
        .then(message =>  console.log(message.status))
        .done();
    });
    console.log(`Current Gif Date: ${gifDate}`);
};
// comment the setInterval method out when not testing
// setInterval(sendMMS, 5000);

// use express routes
app.use(index);
app.use(route_signup);
app.use(route_gif_admin);

// set redirect for users adding a /
app.get('/', function(req, res){ res.redirect('index')});

app.use((_req, res) => {
    res.sendStatus(404);
});
  
app.use((err, _req, res, _next) => {
if (err.status) {
    return res
    .status(err.status)
    .set('Content-Type', 'text/plain')
    .send(err.message);
}

console.error(err.stack);
res.sendStatus(500);
});
  
// start server
app.listen(PORT, function() {
console.log("listening on port: ", PORT);
});

// listen( 8080, 'APP_SERVER_PUBLIC_IP');

module.exports = app;