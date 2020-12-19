// group1 = ["WeeZhuan", "RuiJie", "Sarah", "Rachel", "FangTing"];
// group2 = ["Natalie", "Calista", "Alysha", "Ryan", "Reynard"];
// group3 = ["Laura", "Kyla", "Zoe", "Edward", "Jordian"]
//
// const express = require("express");
//
// const https = require("https");
//
// const app = express();
//
// const bodyParser = require("body-parser");
//
// app.use(bodyParser.urlencoded({extended:true}));
//
// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/index.html")
// });
//
// app.post("/", function(req, res) {
//   const name = req.body.name;
//   console.log(name);
//   groupingMessage(name);
// })
//
// function groupingMessage(name) {
//   if ($.inArray(name, group1) > - 1) {
//     res.sendFile(__dirname + "/group1.html")
//   } else if ($.inArray(name, group2) > - 1) {
//     res.sendFile(__dirname + "/group2.html")
//   } else{
//     res.sendFile(__dirname + "/group3.html")
//   }
// };
//
// app.listen(3000, function() {
//   console.log("Server is running on port 3000");
// });


// Set the date we're counting down to
var countDownDate = new Date("Dec 20, 2020 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "CG Christmas has started, BLESS YOUR SOUL IF YOU ARE LATE.";
  }
}, 1000);
