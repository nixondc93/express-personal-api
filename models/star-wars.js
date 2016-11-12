var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var starWarsSchema = new Schema({
  path: String,
  data: Array
});

var SwSpecies = mongoose.model('SwSpecies', starWarsSchema);

module.exports = SwSpecies;
