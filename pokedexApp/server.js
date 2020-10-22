
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

// bring in the pokdex
const pokedex = require('./models/pokedex.js')  //gives us access to the pokedex data in the models directory


// ROUTES//
// index
app.get('/pokedex/', (req, res) => {
  // res.send(pokedex)
  res.render('index.ejs', {
    allPokedex: pokedex //gives all pokedex variable name
    //declare variable here or in data
  })
})

//NEW// route ABOVE show route
app.get('/pokedex/new', (req, res) => {
 
    res.render('new.ejs');
})

//HOME INDEX
app.get('/', (rec, res) => {
    res.send('Welcome to the pokedex App!')
})

// CREATE NEW //
app.post('/pokedex', (req, res) => {
    console.log(req.body)
    // if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
    //   req.body.readyToEat = true
    // } else { // if not checked, req.body.readyToEat is undefined
    //   req.body.readyToEat = false
    // }
    pokedex.push(req.body)
    res.redirect('/pokedex')
  })

//SHOW//    //ERROR HERE?
app.get('/pokedex/:indexOfPokedexArray', (req, res) => {
  res.render('show.ejs', {
    pokedex: pokedex[req.params.indexOfPokedexArray]
  })
})

//DELETE
app.delete('/pokedex/:indexOfPokedexArray', (req, res) => {
  pokedex.splice(req.param.indexOfPokedex,1);
  res.redirect('/pokedex');
})

//EDIT//
app.get('/fruits/:index/edit', (req, res)=>{
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			fruit: fruits[req.params.index], //the fruit object
			index: req.params.index //... and its index in the array
		}
	)
})


//UPDATE
app.put('/fruits/:index', (req, res) => { // :index is the index of our fruits array that we want to change
	if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
		req.body.readyToEat = true
	} else { //if not checked, req.body.readyToEat is undefined
		req.body.readyToEat = false
	}
	fruits[req.params.index] = req.body //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
	res.redirect('/fruits'); //redirect to the index page
})
  
  

// Listener //
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})