'use strict';


var mongoose = require('mongoose'),
  Person = mongoose.model('Persons');

exports.list_all_person = function(req, res) {
  Person.find({}, function(err, Person) {
    if (err)
      res.send(err);
    res.json(Person);
  });
};

exports.create_a_person = function(req, res) {
  var new_Person = new Person(req.body);
  new_Person.save(function(err, Person) {
    if (err)
      res.send(err);
    res.json(Person);
  });
};


exports.read_a_person = function(req, res) {
  Person.findById(req.params.personId, function(err, Person) {
    if (err)
      res.send(err);
    res.json(Person);
  });
};


exports.update_a_person = function(req, res) {
  Person.findOneAndUpdate({personId: req.params.personId}, req.body, {new: true}, function(err, Person) {
    if (err)
      res.send(err);
    res.json(Person);
  });
};


exports.delete_a_person = function(req, res) {


  Person.remove({
    personId: req.params.personId
  }, function(err, Person) {
    if (err)
      res.send(err);
    res.json({ message: 'Person Deleted' });
  });
};
