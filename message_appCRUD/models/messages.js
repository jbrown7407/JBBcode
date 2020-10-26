const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  message:   { type: String, required: true },
  user:  { type: String, required: true },
  // level:  { type: String, required: true },
  // superUser: Boolean,
}, {timestamps: true});

const Message = mongoose.model('Message', messageSchema)
// const messageSeed = mongoose.model('messageSeed', messageSchema)

module.exports = Message


// const mongoose = require('mongoose')

// const messageSchema = new mongoose.Schema({
//   message:  { type: String, required: true },
//   user:  { type: String, required: true },
//   superUser: Boolean,
// }, {timestamps: true});

// const Fruit = mongoose.model('Fruit', fruitSchema)



