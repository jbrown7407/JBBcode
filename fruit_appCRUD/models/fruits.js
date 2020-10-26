const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  color:  { type: String, required: true },
  readyToEat: Boolean,
}, {timestamps: true});

const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit


// const mongoose = require('mongoose')

// const messageSchema = new mongoose.Schema({
//   message:  { type: String, required: true },
//   user:  { type: String, required: true },
//   superUser: Boolean,
// }, {timestamps: true});

// const Fruit = mongoose.model('Fruit', fruitSchema)

// module.exports = Fruit

