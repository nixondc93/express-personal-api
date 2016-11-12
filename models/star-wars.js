var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var starWarsSchema = new Schema({
  name: String,
  classification: String,
  designation: String ,
  average_height: String,
  skin_colors: String,
  hair_colors: String,
  eye_colors: String,
  average_lifespan: String,
  language: String
});

var SwSpecies = mongoose.model('SwSpecies', starWarsSchema);

module.exports = SwSpecies;
