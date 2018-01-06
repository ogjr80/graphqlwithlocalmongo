const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  id: String,
  firstname: String,
  lastname: String,
  middlename: String,
  age: String
});


module.exports = mongoose.model('NewUser', UserSchema);
