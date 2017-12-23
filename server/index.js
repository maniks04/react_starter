var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var twilio = require('twilio');
var axios = require('axios')


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder
app.post('/', function(req, res) {
  
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});







app.post('/fitness/workout', function(req, res) {
  console.log("hiiiii" , req.body)
  var accountSid = 'AC7eb7244af641e79c1f6ec6e96dec6586'; // Your Account SID from www.twilio.com/console
  var authToken = '9f4ac17db21930514de1ba0161544f74';   // Your Auth Token from www.twilio.com/console
  
  var twilio = require('twilio');
  var client = new twilio(accountSid, authToken);
  
  
  
  
  var greeting ="Hey " + req.body.name + "!" + "\n" + "\n" + "HERE IS TODAY'S WORKOUT ********" + req.body.workout + "********" + "\n" + "\n"
  
  var chest = greeting + "3 SETS" + "\n" + "20X Push-ups" + "\n" + "20X Assisted Dips"
  + "\n" + "\n" + "3 SETS" + "\n" + "15X Chest-fly" + "\n" + "20X Tricep Extensions"
  
  var legs = greeting + "3 SETS" + "\n" + "20X Body-Weigh-Squats" + "\n" + "10X Squat Jumps"
  + "\n" + "\n" + "3 SETS" + "\n" + "15X Front lunges(each leg)" + "\n" + "30 Second Squat hold"
  
  var back = greeting + "3 SETS" + "\n" + "10X Pull-ups" + "\n" + "15X Lower-back Extensions"
  + "\n" + "\n" + "3 SETS" + "\n" + "15X Single-arm Row (each arm)" + "\n" + "10X Lat Pull-down"

  var challenge = greeting + "WELCOME TO THE DAILY CHALLENGE"
  
  var workOutStorage = [chest, legs, back, challenge]
  
  // var workout = "Hey " + req.body.name + "!" + "\n" + "HERE IS TODAY'S WORKOUT"
  // + "\n" + "\n" + "\n" + 
  // "3 SETS" + "\n" + "20X push-ups" + "\n" + "10x SquatiJumps" + "30X sit-ups"
  var workout;
  function whichWorkout() {
    if (req.body.workout.toLowerCase() === "chest") workout = workOutStorage[0]
    if (req.body.workout.toLowerCase() === "legs") workout = workOutStorage[1]
    if (req.body.workout.toLowerCase() === "back") workout = workOutStorage[2]
    if (req.body.workout.toLowerCase() === "challenge") workout = workOutStorage[3]
  }
  whichWorkout()
  
  
  client.messages.create({
      body: workout,
      to: '+1' + req.body.number,  // Text this number
      from: '+18638046146' // From a valid Twilio number
  })
  .then((message) => {

    //console.log("message.sid") 
    res.end('sss')
  });
}
)


// app.post('/poop/shit', doSomething)
  
// function doSomething(){
// console.log(req)
//   var accountSid = 'AC7eb7244af641e79c1f6ec6e96dec6586'; // Your Account SID from www.twilio.com/console
//   var authToken = '9f4ac17db21930514de1ba0161544f74';   // Your Auth Token from www.twilio.com/console
  
//   var twilio = require('twilio');
//   var client = new twilio(accountSid, authToken);
  
//   client.messages.create({
//       body: 'Hello from Node',
//       to: '+18133979865',  // Text this number
//       from: '+18638046146' // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));
// }






