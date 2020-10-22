
//SETUP SERVER
/// npm init
/// npm i express
/// npm i ejs
///DELETE npm i method-override

// should have package.json and package-lock.js

// DEPENDENCIES//
const express = require('express')
// CONFIGURATION
const app = express()
const PORT = 3000
const methodOverride=require('method-override') //FIX

//MIDDLEWARE//
app.use(express.json());  // allows us to recognize the incoming request as a JSON object. 
app.use(express.urlencoded({extended: false})); //  recognize the incoming object as strings or arrays.
app.use(express.static(__dirname + '/public'));  // ???
app.use(methodOverride('_method'))

// bring in the fruits
const fruits = require('./models/budget.js')  //gives us access to the fruits data in the models directory

console.log(fruits)

// ROUTES//
// index
app.get('/budget/', (req, res) => {
  // res.send(fruits)
  res.render('index.ejs', {
    allFruits: fruits //gives all fruits variable name for fruit
    //declare variable here or in data
  })
})

//NEW// route ABOVE show route
app.get('/budget/new', (req, res) => {
 
    res.render('new.ejs');
})

//HOME INDEX
app.get('/', (rec, res) => {
    res.send('Welcome to the Budget App!')
})

// create
app.post('/budget', (req, res) => {
    console.log(req.body)
    // if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
    //   req.body.readyToEat = true
    // } else { // if not checked, req.body.readyToEat is undefined
    //   req.body.readyToEat = false
    // }
    fruits.push(req.body)
    res.redirect('/budget')
  })

//SHOW//    //ERROR HERE?
app.get('/budget/:indexOfBudgetArray', (req, res) => {
  res.render('show.ejs', {
    budget: budget[req.params.indexOfBudgetArray]
  })
})


app.delete('/budget/:indexOfBudgetArray', (req, res) => {
  fruits.splice(req.param.indexOfFruits,1);
  res.redirect('/budget');
})

// Listener //
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})