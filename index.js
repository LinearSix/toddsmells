const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 2020;
require('dotenv').config()
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
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

// set Twilio SID and Token
const accountSid = process.env.VAR_TWILIO_SID;
const authToken = process.env.VAR_TWILIO_AUTH;
const client = require('twilio')(accountSid, authToken);
// const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

let numbersToMessage = ["+15126737109"];

// let j = schedule.scheduleJob('0 0 9 * * *', function(){
//     numbersToMessage.forEach(function(number){
//         var message = client.messages.create({
//             body: 'Happy Monday from toddsmells.com!',
//             from: process.env.VAR_FROM,
//             mediaUrl: 'http://www.daviemurray.com/bart_buzz.gif',
//             to: number
//         })
//         .then(message =>  console.log(message.status))
//         .done();
//     });
//   });

// use express routes
app.use(index);
app.use(route_signup);

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