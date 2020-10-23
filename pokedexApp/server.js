
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
// index //
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
    // res.send('Welcome to the pokedex App!')
    res.redirect('/pokedex');
})

// CREATE NEW //
app.post('/pokedex', (req, res) => {
  console.log(req.body)
  // if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
  //   req.body.readyToEat = true
  // } else { // if not checked, req.body.readyToEat is undefined
  //   req.body.readyToEat = false
  // }
  req.body.stats = {}
  req.body.name = req.body.name
  req.body.id = req.body.id
  req.body.stats.speed = req.body.speed
  req.body.stats.hp = req.body.hp
  req.body.stats.attack = req.body.attack
  req.body.stats.defense = req.body.defense
  req.body.stats.spattack = req.body.spattack
  req.body.stats.spdefense = req.body.spdefense
  pokedex.push(req.body)
  res.redirect('/pokedex')
})

//SHOW//    //ERROR HERE?
app.get('/pokedex/:indexOfPokedexArray', (req, res) => {
  res.render('show.ejs', {
    pokedex: pokedex[req.params.indexOfPokedexArray] // upper case? or allPokemon
  })
})

//DELETE//
app.delete('/pokedex/:indexOfPokedexArray', (req, res) => {
  pokedex.splice(req.params.indexOfPokedexArray,1);
  res.redirect('/pokedex');
})

//EDIT//
app.get('/pokedex/:index/edit', (req, res)=>{
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			pokedex: pokedex[req.params.index], //the pokedex object
			index: req.params.index //... and its index in the array
		}
	)
})


//UPDATE//
app.put('/pokedex/:indexOfPokedexArray', (req, res) => { // :index is the index of our pokedex array that we want to change
	 if(req.body.captured === 'on'){ //if checked, req.body.captured is set to 'on'
	 	req.body.captured = true
	 } else { //if not checked, req.body.readyToEat is undefined
	 	req.body.captured = false
   }
  //  console.log(pokedex[req.params.index])
  console.log(req.body)
	// pokedex[req.params.index] = req.body //in our pokedex array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
 ///
  //  req.body.stats = {}
  //  req.body.name = req.body.name
  //  let name = req.body.name
  //  req.body.id = req.body.id
  //  req.body.stats.speed = req.body.speed
  //  req.body.stats.hp = req.body.hp
  //  req.body.stats.attack = req.body.attack
  //  req.body.stats.defense = req.body.defense
  //  req.body.stats.spattack = req.body.spattack
  //  req.body.stats.spdefense = req.body.spdefense
  ///
  pokeman = {stats: {}}
  pokeman.name = req.body.name
  pokeman.id = req.body.id
  pokeman.stats.speed = req.body.speed
  pokeman.stats.hp = req.body.hp
  pokeman.stats.attack = req.body.attack
  pokeman.stats.defense = req.body.defense
  pokeman.stats.spattack = req.body.spattack
  pokeman.stats.spdefense = req.body.spdefense
  console.log(req.params.indexOfPokedexArray)
  pokedex[req.params.indexOfPokedexArray] = pokeman
  // pokedex.push()
  // pokedex.push(req.body)
  res.redirect('/pokedex'); //redirect to the index page
})

// Listener //
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})


// <!-- <% for (let i = 0; i < pokemon.length; i++)  { %> 
//   <a href="/pokedex/<%= i %> "><img id="shrinky" src="<%= pokedex[i].img %> "></a>
// <% } %> -->   PRINT ONLY THE IMAGES