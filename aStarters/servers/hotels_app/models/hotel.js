//Set Up Hotel Schema


// Dependencies

const mongoose = require('mongoose'); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor



// Create a new Schema

const hotelSchema = new Schema({
    name:  { type: String, required: true, unique: true }, //can say whether we want properties to be required or unique
    location: String,
    rating: {type: Number, max: 5},
    vacancies: Boolean,
    rooms: [ { roomNumber: Number, size: String, price: Number, booked: Boolean  } ],
    tags: [{type: String}]
}, {timestamps: true});



const hotelSeed = mongoose.model('hotelSeed', hotelSchema)

module.exports = hotelSeed //use module.exports to export this mongoose.model