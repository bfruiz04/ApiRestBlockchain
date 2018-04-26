'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// example schema 
var PersonSchema = new Schema({
  personId: {
    type: Number,
    default: 1
  },
  firstName: {
    type: String,
    default: "Jane"
  },
  lastName: {
    type: String,
    default: "Doe"
  },
  email: {
    type: String,
    default: "janedoe@example.com"
  }
 });
 

// export model persons
module.exports = mongoose.model('Persons', PersonSchema);
