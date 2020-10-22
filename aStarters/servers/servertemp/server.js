
//SETUP SERVER
/// npm init
/// npm i express
/// npm i ejs

// should have package.json and package-lock.js

// DEPENDENCIES//
const express = require('express')
// CONFIGURATION
const app = express()
const PORT = 3000

//MIDDLEWARE//
app.use(express.json());  // allows us to recognize the incoming request as a JSON object. 
app.use(express.urlencoded({extended: false})); //  recognize the incoming object as strings or arrays.
app.use(express.static(__dirname + '/public'));  // PUBLIC STYLESHEET

// bring in the fruits
const fruits = require('./models/fruits.js')  //gives us access to the fruits data in the models directory

console.log(fruits)

// ROUTES//
// index
app.get('/fruits/', (req, res) => {
  // res.send(fruits)
  res.render('index.ejs', {
    allFruits: fruits
  })
})

//NEW// route ABOVE show route
app.get('/fruits/new', (req, res) => {
 
    res.render('new.ejs');
})

//HOME INDEX
app.get('/', (rec, res) => {
    res.send('Welcome to the Fruit App!')
})


// create
app.post('/fruits', (req, res) => {
    console.log(req.body)
    if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true
    } else { // if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/fruits')
  })

//SHOW//
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
  res.render('show.ejs', {
    fruit: fruits[req.params.indexOfFruitsArray]
  })
})

// Listener //
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})