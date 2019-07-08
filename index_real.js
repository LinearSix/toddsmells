const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.port || 8080;
require('dotenv').config()
const bodyparser = require('body-parser');
const favicon = require('serve-favicon');


// use body-parser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// set the folder for public content
app.use(express.static(path.join(__dirname, 'public')))

// set the folder for npm packages
app.use(express.static(path.join(__dirname, 'node_modules')))

// set the favicon file
// app.use(favicon(path.join(__dirname,'public','favicon.ico')));

// set the view engine to ejs
app.set('view engine', 'ejs');

// set express routes
const index = require('./routes');
const route_signup = require('./routes/signup');
const route_gif_admin = require('./routes/gif_admin');
const schedule = require('node-schedule');

// set twilio sid and token
const accountSid = process.env.VAR_TWILIO_SID;
const authToken = process.env.VAR_TWILIO_AUTH;
const client = require('twilio')(accountSid, authToken);


// let numbersToMessage = [+15126737109, +13474535584, +15127721379, +15202507540, +16126444087, +15129632405, +15125681055, +15125077431, +15126380872];
let numbersToMessage = [+15126737109]

// send the messages!
let j = schedule.scheduleJob('0 12 16 * * *', function(){
    numbersToMessage.forEach(function(number){
        var message = client.messages.create({
            body: 'Thanks for being a beta tester for toddsmells.com!',
            from: process.env.VAR_FROM,
            mediaUrl: 'http://www.daviemurray.com/bart_buzz.gif',
            to: number
        })
        .then(message =>  console.log(message.status))
        .done();
    });
  });

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
