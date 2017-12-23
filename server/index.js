var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var twilio = require('twilio');


app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.json())

// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder
app.post('/', function(req, res) {
  
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


// //9f4ac17db21930514de1ba0161544f74

var accountSid = 'AC7eb7244af641e79c1f6ec6e96dec6586'; // Your Account SID from www.twilio.com/console
var authToken = '9f4ac17db21930514de1ba0161544f74';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+18133979865',  // Text this number
    from: '+18638046146' // From a valid Twilio number
})
.then((message) => console.log(message.sid));