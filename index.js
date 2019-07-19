const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config()
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const knex = require('./db/knex');
const schedule = require('node-schedule');

app.use(fileUpload());

// use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set the folder for public content
app.use(express.static(path.join(__dirname, 'public')))

// set the folder for npm packages
app.use(express.static(path.join(__dirname, 'node_modules')))

// set the favicon file
// app.use(favicon(path.join(__dirname,'public','favicon.ico')));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// set express routes
const index = require('./routes');
const route_signup = require('./routes/signup');
const route_gif_admin = require('./routes/gif_admin');
const route_dump = require('./routes/dump');

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

// send numbers to the sendMMS function
let numbersToMessage = [];
function getNumbers() {
    let numArr = [];
    return knex('sign_up')
    .then(function(sign_up) {
        sign_up.forEach(function(value) {
            numArr.push(value)
        });
        for (i=0; i<numArr.length; i++) {
            numbersToMessage.push(numArr[i].sign_up_phone);
        };
        return numbersToMessage;
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
let gifData;
// let numbersData;
// let numbersToMessage = [];
async function returnedGifs() {
    // Here are the recipients!
    // numbersData = await getNumbers();
    // for (i=0; i<numbersData.length; i++) {
    //     numbersToMessage.push(numbersData[i].sign_up_phone);
    // };
    // Here's the gif!
    gifData = await getGif();
    gifID = gifData[0].gif_id;
    gifPath = gifData[0].gif_path;
    gifDate = gifData[0].gif_date;
    gifQuote = gifData[0].gif_quote;
    console.log(`returnedGifs gifID: ${gifID}`);
    console.log(`returnedGifs gifPath: ${gifPath}`);
    console.log(`returnedGifs gifDate: ${gifDate}`);
    // now go update null to the current date
    // await updateGifDate(gifID)
};

let curDate = new Date();
//Convert timestamp in GMT/UTC format
var utcDate = curDate.toUTCString();
console.log(utcDate);

// set Twilio SID and Token
const accountSid = process.env.VAR_TWILIO_SID;
const authToken = process.env.VAR_TWILIO_AUTH;
const client = require('twilio')(accountSid, authToken);

// let numbersToMessage = [+15126737109]

let j = schedule.scheduleJob('36 22 * * *', async function(){
    await returnedGifs();
    numbersToMessage = await getNumbers();
    // console.log(`numbers: ${numbersToMessage}`);
    numbersToMessage.forEach(function(number){
        var message = client.messages.create({
            body: `"${gifQuote}"\n\nThanks for being a beta tester for toddsmells.com!`,
            from: process.env.VAR_FROM,
            mediaUrl: `http://148.72.42.20:8080/gifs/${ gifPath }`,
            to: number
        })
        .then(console.log(gifPath))
        .then(message =>  console.log(message.status))
        .done();
    });
    updateGifDate(gifID)
    console.log(`numbers: ${numbersToMessage}`);
    console.log(`gifID: ${gifID}`);
    console.log(`gifPath: ${gifPath}`);
    console.log(`gifDate: ${gifDate}`);
});

// this function is for testing and send a new gif every 5 seconds
// function sendMMS() {
//     returnedGifs();
//     numbersToMessage.forEach(function(number){
//         var message = client.messages.create({
//             body: gifQuote,
//             from: process.env.VAR_FROM,
//             mediaUrl: `http://148.72.42.20:8080/gifs/${ gifPath }`,
//             to: number
//         })
//         .then(console.log(gifPath))
//         .then(message =>  console.log(message.status))
//         .done();
//     // updateGifDate(gifID)
//     });
//     console.log(`Current Gif Date: ${gifDate}`);
// };
// comment the setInterval method out when not testing
// setInterval(sendMMS, 5000);

// use express routes
app.use(index);
app.use(route_signup);
app.use(route_gif_admin);
app.use(route_dump);

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