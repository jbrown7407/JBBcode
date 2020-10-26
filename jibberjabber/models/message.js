//Set Up MESSAGE Schema


// Dependencies

const mongoose = require('mongoose'); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor



// Create a new Schema
//REVISE SCHEMA
const messageSchema = new Schema({
    name:  { type: String, required: true, unique: true }, //can say whether we want properties to be required or unique
    location: String,
    message: String,
    superUser: Boolean,
   // rooms: [ { roomNumber: Number, size: String, price: Number, booked: Boolean  } ],
   // tags: [{type: String}]
}, {timestamps: true});


const messageSeed = mongoose.model('messageSeed', messageSchema)

module.exports = messageSeed //use module.exports to export this mongoose.model