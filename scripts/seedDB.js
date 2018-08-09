const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/uncbccarpool"
);

const offerSeed = [
  {
    usernameO: "test1",
    usernameR: ["test11"],
    origin: "107 louben valley",
    destination: "1500 RDU Center Drive",
    seats: 3,
    time: "10:30:AM",
    date: "7/24/2018"
  },
  {
    username: "test2",
    usernameR: ["test22"],
    origin: "107 louben valley",
    destination: "RDU airport, terminal 1",
    seats: 4,
    booked: 0,
    time: "10:30:AM",
    date: "7/24/2018"
  },
  {
    username: "test3",
    usernameR: ["test33"],
    origin: "107 louben valley",
    destination: "813 Apple down dr",
    seats: 5,
    time: "10:30:AM",
    date: "7/24/2018"
  }
  
];

db.Offer
  .remove({})
  .then(() => db.Offer.collection.insertMany(offerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
