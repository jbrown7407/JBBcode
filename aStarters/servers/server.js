
/// npm init
/// npm i express
// should have package.json and package-lock.js
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

// const port = 3000;
const express = require('express'); // Adds express
const { callbackify } = require('util');
const app = express();   //app keyword to encapsulate running of Express itself


app.get('/greeting/:firstname', (req, res) => {    //response and request
    res.send('Hello Stranger' + '' + req.params.firstname);
    console.log("request received")
});

// TIP CALC
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tipInPercent = req.params.tipPercentage * .01
    let tipAmount = tipInPercent * req.params.total
    res.send("Your tip is: " + "$" + tipAmount.toFixed(2))
})
// localhost:3000/tip/100/20

// MAGIC 8 BALL
app.get('/magic/:question', (req, res) => {    //response and request
   
    console.log("request received")
  
    const userQuestion = 'The answer to your question is...';
    const randomNumber = Math.floor(Math.random() *8)
    //Math.floor rounds down from 8. generate randome 1-7let eightball = ''
    console.log(randomNumber);
let userOutput = ''
    switch (randomNumber){  
        case 0:  userOutput = ('It is certain');  break;  // let answer0 = req.params.answer0
        case 1:  userOutput =  ('It is decidedly so');  break;  
        case 2:  userOutput = ('Reply hazy try again');  break;    
        case 3:  userOutput = ('Cannot predict now');  break;    
        case 4:  userOutput = ('Do not count on it');  break;    
        case 5:  userOutput = ('My sources say no');  break;    
        case 6:  userOutput = ('Outlook not so good');  break;    
        case 7:  userOutput = ('Signs point to yes');  break;
    }
        res.send(`<h1>${req.params.question}? Your answer is:  ${userOutput} </h1>`);//prints fine without backticks
});

app.get('/', (req, res) => {    //response and request
    res.send('Hello World');
    console.log("request received")
});


app.get('/htmlstuff', (req, res) => {    // alternate route   CANT OPEN THIS ONE
    res.send(`
    <html>
        <body>
            <h1>Oh ha!</h1>
        </body>
    </html>
`);
    console.log("alternate route2")
});

app.get('/stuff', (req, res) => {    // alternate route   CANT OPEN THIS ONE
    res.send("image");
    console.log("alternate route2")
});

app.get('/magic/:question', (req, res) => {    // alternate route   CANT OPEN THIS ONE
    res.send(req.params.question);
    console.log("alternate route2")
});


app.listen(3000, () => {
    console.log("3000 is Listening for requests")
}); // port we listen to in order to make request to our server   (localhost: 3000)


// ctrl + c shuts down server