const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  usernameO: { type: String, required: false },
  usernameR: [],
  origin: { type: String, required: false },
  destination: { type: String, required: false },
  seats: { type: String, required: false },
  avaiable: { type: String, required: false },
  time: { type: String, required: false },
  date: { type: String, required: false }
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
