const db = require("../models");


// Defining methods for the OffersController
module.exports = {
  findAll: function(req, res) {
    db.Offer
      .find(req.query)
      .sort({ date: -1 })
     
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Offer
      .findById(req.params.id)
      .sort({ date: -1 })
      
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function(req, res) {
    db.Offer
      .findById(req.params.username)
      .sort({ date: -1 })
      
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("inserting");
    console.log(req.body);
    db.Offer
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("req",req);
   db.Offer
   .findOneAndUpdate({ _id: req.params.id }, req.body)
   .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Offer
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
