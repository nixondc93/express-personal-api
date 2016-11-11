var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var aboutMeSchema = new Schema({
  name: String,
  age: Number,
  height: Number,
  hobbies: Array,
  location: String
});

var aboutMe = mongoose.model('aboutMe', AuthorSchema);

module.exports = aboutMe;
