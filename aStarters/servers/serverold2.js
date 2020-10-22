/// npm init -y in target directory
/// npm i express
/// should have package.json and package-lock.js
/// npm i ejs (embedded javascript)

//DEPENDENCIES
const express = require('express'); // Adds express

//CONFIGURATION
const app = express();   //app keyword to encapsulate running of Express itself
const PORT = 3000

const fruits = require('./models/fruits')  // LOGIC GIVES ACCESS TO FRUITS DATA

//Default route
app.get('/', (req, res) => {    //response and request
    console.log("request received")
    res.send('Hello World');
});

//////////
//ROUTES//  
//////////

//INDEX Route
app.get('/fruits', (req, res) => {    //Display the fruits array (INDEX ROUTE)
    console.log(req.params)
    res.send(fruits);
    console.log(req.params)
});


app.get('/SuperHeroes', (req, res) => {    //Display the fruits array (INDEX ROUTE)
    console.log(req.params)
    res.send(Superheroes);
    console.log(req.params)
});

//SHOW Route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray])     //localhost:3000/fruits/0  should yield apple



res.render('show.ejs', {
    fruit: fruits[req.param.indexOfFruitsArray]
})
})


app.get('/Superheroes/:indexOfSuperheroes', (req, res) => {
    const superheroName = superheroes[req.params.indexOfSuperheroes].name
    const superheroPowers = superheroes[req.params.indexOfSuperheroes].powers
    res.send(`<h1>${superheroName}</h1> <li>${superheroPowers}</li>`)
})


app.get('/somedata', (req, res) => {    // alternate route
    console.log("alternate route")
    res.send('alternate route ("somedata") accessed')

});


//LISTENER-
app.listen(PORT, () => {
    console.log(PORT + " is Listening for requests")
}); // port we listen to in order to make request to our server   (localhost: 3000)

