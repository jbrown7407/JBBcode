const express = require('express')
// const { get } = require('http')
const app = express()
const port = 3000
const Pokemon = require('./models/pokemon.js')
console.log('pokemon')
app.get('/', (rec, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    // res.send(pokemon)
     res.render('index.ejs', {
         allPokemon: Pokemon
     })
})

app.get('/pokemon/:id', (req, res) => {
 // res.send(pokemon)

 res.render('show.ejs', {
//   res.send(Pokemon[req.params.id])
     Pokemon: Pokemon[req.params.id]
})
})

app.listen(port, () => {
    console.log("Welcome to the Pokemon App", port)
})