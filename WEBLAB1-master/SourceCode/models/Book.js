var mongoose = require('mongoose');

var users = new mongoose.Schema({
  fName: String,
  lName: String,
  uName: String,
  pass: String,
  confirmPass: String,
  mobilePhone: String,
  class1: String,
  class2: String,
  class3: String,
  security: String,
  answer: String
});

module.exports = mongoose.model('users_tb', users);
