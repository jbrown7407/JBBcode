const $gameScene1 = document.getElementsByClassName("gameScene1")
const $gameScene2 = document.getElementsByClassName("gameScene2")
const $titleScene = document.getElementsByClassName("titleScene")
const $gameOverScene = document.getElementsByClassName("gameOverScene")

//npm init
//npm install mongoose

//SETUP SERVER

/// npm i express
/// npm i ejs
///DELETE npm i method-override


// Dependencies

const mongoose = require('mongoose') //require mongoose
const db = mongoose.connection //set mongoose connection


// Global Configuration

const mongoURI = 'mongodb://localhost:27017/hotel' //configure mongoURI with db called hotel

//configure mongoose Promise: mongoose.Promise = global.Promise * Optional - may or may not get a warning in terminal about this

// Models
const Message = require('./models/message.js')
const hotelSeed = require('./models/seed.js')

// Connect to Mongo
mongoose.connect(mongoURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('the connection with mongod is established');
});

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events

//connect to mongo with db.on(), show errors on fail, show disconnection:
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

//Create a Document with Mongoose/////
// Hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
//   //get control of terminal back
//   db.close();
// })

//run node app.js once then comment out the create function///////// DONE


// Hotel.collection.drop()


//Count documents that match specified conditions/////

// Hotel.countDocuments({}, (err, data) => {
//   if (err) console.log(err.message)
//   console.log(`There are ${data} hotels in this database`)
//   // get control of terminal back
//   db.close();
// })

//run node app.js 





$(document).ready(function(){



    let cl = (value) => console.log(value);
    cl("Jquery Active")
    let counter =  0
    let $div = $('<div>')
    $($div).addClass('title')
    $('body').append($div)
    $($div).text("This is the first div title")

    let user =''
    let message = ''
   // $($div).style.color("blue")
//JQUERY HERE


function initialSetup() {
    $($gameScene1, $gameScene2, $gameOverScene).hide()   //HIDE ENTIRE DIV
    $($titleScene).show     // SHOW TITLE SCENE /LOGIN
    console.log("log In")
}

function createUser () {
    // db.jbj.insert(newUser : true)
    console.log("function executed")
}

function userLogIn () {
    console.log("function executed")
}

function validateUser () {
    console.log("function executed")
   // user = string entered by user
}

function selectBoard () {
    console.log("function executed")
    //select board
    //load selected board
    //display selected board
}

function newBoard () {
    console.log("function executed")
}

function generateNewBoard () {
    console.log("function executed")
}

function selectRoom () {
    console.log("function executed")
}

function displayRoom () {
    console.log("function executed")
}

function refreshRoom () {
    console.log("update Room chat to refelect new image")
}

function updateStorage () {
    console.log("function executed")
}

function sendMessage () {

    db.jbj.messages.insert({"user" : user, "message" : message })  //WRITE MESSAGE



    console.log("function executed")
    refreshRoom ();
    updateStorage ();
}


user = "jeff"
message = "hello computer"


$(".generate").click(function btn1(){ //TITLE SCREEN
 
    db.jbj.messages.insert({"user" : user, "message" : message })
    console.log("message added to db")
       });

    
initialSetup();
        ///////////////// 
       //SCENE CHANGES//
       $(".btn1").click(function btn1(){ //TITLE SCREEN
           $(".titleScene").fadeIn(700).show()
           $($gameScene1, $gameScene2, $gameOverScene).hide()
              });
       $(".btn2").click(function btn2(){ //Game Scene 1
           $(".gameScene1").fadeIn(700).show()
           $($titleScene, $gameScene2, $gameOverScene).hide()
           });
       $(".btn3").click(function btn3(){ //Game Scene 2
           $(".titleScene").hide()
           $(".gameScene1").hide()
           $(".gameScene2").fadeIn(700).show()
           $(".gameOverScene").hide()
           });
       $(".btn4").click(function btn4(){ //Game Over Scene
           $(".titleScene").hide()
           $(".gameScene1").hide()
           $(".gameScene2").hide()
           $(".gameOverScene").fadeIn(700).show()
           });  

        })
