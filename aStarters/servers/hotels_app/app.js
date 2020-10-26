//npm init
//npm install mongoose

//SETUP SERVER

/// npm i express
/// npm i ejs
///DELETE npm i method-override


// Dependencies

const mongoose = require('mongoose') //require mongoose
const db = mongoose.connection //set mongoose connection


// Global Configuration

const mongoURI = 'mongodb://localhost:27017/hotel' //configure mongoURI with db called hotel

//configure mongoose Promise: mongoose.Promise = global.Promise * Optional - may or may not get a warning in terminal about this

// Models
const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')

// Connect to Mongo
mongoose.connect(mongoURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('the connection with mongod is established');
});

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events

//connect to mongo with db.on(), show errors on fail, show disconnection:
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));


//Create a Document with Mongoose/////
// Hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
//   //get control of terminal back
//   db.close();
// })

//run node app.js once then comment out the create function///////// DONE


// Hotel.collection.drop()


//Count documents that match specified conditions/////

// Hotel.countDocuments({}, (err, data) => {
//   if (err) console.log(err.message)
//   console.log(`There are ${data} hotels in this database`)
//   // get control of terminal back
//   db.close();
// })

//run node app.js 


//Using Mongoose to CRUD our data////////
///////////
//CREATE//
///////////

//Create a hotel using the above schema/////////
// const newHotel = {
//     name: "Bellagio Hotel and Casino",
//     location: "Las Vegas, NV",
//     rating: 5,
//     vacancies: true,
//     rooms: [ 
//         { "roomNumber": 819, "size": "Resort King", "price": 300, "booked": false },
//         { "roomNumber": 2504, "size": "Penthouse Fountain View Suite", "price": 759, "booked": false },
//         {"roomNumber": 3612, "size": "Two Bedroom Grand Lakeview Suite", "price": 1259, "booked": false} 
// ],
//     tags: ["Fountains of Bellagio", "Poolside Cabanas", "LAGO Restaurant"]
// };

// Hotel.create(newHotel, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
//   // get control of terminal back
//   // you can also just use control-c
//   db.close();
// })

//now 13 hotels
/////////////
//R - READ////
///////////////
//find all or find specific hotels
//with each prompt, complete it, then comment it out

// let's find all our hotels and console.log them
// Hotel.find((err, data) => {
//     console.log(data);
//     db.close();
// });

// find all the hotels but only return the hotel name and console.log them////
// Hotel.find({}, 'name', (err, data) => {
//     console.log(data);
//     db.close();
// });

// find just your hotel using a search parameter that would only match your hotel////
// Hotel.find({name: "Bellagio Hotel and Casino"}, (err, data) => {
//     console.log(data);
//     db.close();
// });

// find all the hotels that have vacancies, also exclude ratings.///
// Hotel.find({vacancies: true}, (err, data) => {
//     console.log(data);
//     db.close();
// });

/////////////
///UPDATE/////
////////////

//If we want to have our updated document returned to us in the callback, we have to set an option of { upsert: true } as the third argument

// //Update rating of Great Northern to 5

// Hotel.update({ name: "The Great Northern" }, { $set: {rating: 5} }, {upsert: true}, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//     db.close();
// });

// //to check that update is made
// Hotel.find({name: "The Great Northern"}, (err, data) => {
//     console.log(data);
//     db.close();
// });
//U - 
//have to delete this extra one  because it was added by mistake DONE
// Hotel.remove({_id: "5f95cda2e211390a60ed0ad8"}, {justOne: true}, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//     console.log('This is the deleted hotel:', data);
//     }
//     db.close();
// })

// // Motel Bambi is now fully booked, change the vacancies to false DONE

// Hotel.update({ name: "Motel Bambi" }, { $set: {vacancies: false} }, {upsert: true}, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//     db.close();
// });

// //to check that update is made
// Hotel.find({name: "Motel Bambi"}, (err, data) => {
//     console.log(data);
//     db.close();
// });

// // Things are on the decline for the Motel in 'White Bay, Oregon', change the rating to 2

// Hotel.update({ location: "White Bay, Oregon" }, { $set: {rating: 2} }, {upsert: true}, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//     db.close();
// });

// //to check that update is made
// Hotel.find({location: "White Bay, Oregon"}, (err, data) => {
//     console.log(data);
//     db.close();
// });

////////////
// DELETE //
////////////

// // turns out Hotelicopter was an April Fool's prank! Let's delete that one from our database DONE

// Hotel.remove({name: 'Hotelicopter'}, {justOne: true}, (err, data) => {     //justOne: true to select specific item
//     if (err) {
//         console.log(err);
//     } else {
//     console.log('This is the deleted hotel:', data);
//     }
//     db.close();
// })

// // check that hotel was removed DONE
// Hotel.find({name: 'Hotelicopter'}, (err, data) => {
//     console.log(data);
//     db.close();
// });

// //another way to check if hotel was removed DONE
// Hotel.find((err, data) => {
//     console.log(data);
//     db.close();
// });


// Hilbert's Hotel is getting terrible ratings all it does is give everyone headaches and no room service. Let's just remove that one as well

// Hotel.remove({name: "Hilbert's Hotel"}, {justOne: true}, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//     console.log('This is the deleted hotel:', data);
//     }
//     db.close();
// })

// //to check that hotel was removed DONE
// Hotel.find({name: "Hilbert's Hotel"}, (err, data) => {
//     console.log(data);
//     db.close();
// });

// //another way to check if hotel was removed DONE
// Hotel.find((err, data) => {
//     console.log(data);
//     db.close();
// });


// The hotel in the Colorado Rockies has been closed for undisclosed reasons. Delete this hotel too DONE

// Hotel.remove({location: "Colorado Rockies"}, {justOne: true}, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//     console.log('This is the deleted hotel:', data);
//     }
//     db.close();
// })

// //to check that hotel was removed DONE
// Hotel.find({location: "Colorado Rockies"}, (err, data) => {
//     console.log(data);
//     db.close();
// });

// //another way to check if hotel was removed DONE
// Hotel.find((err, data) => {
//     console.log(data);
//     db.close();
// });
