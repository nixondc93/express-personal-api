var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var starWarsSchema = new Schema({
  name: String
});

var SwSpecies = mongoose.model('starWarsSpecies', starWarsSchema);

module.exports = SwSpecies;
