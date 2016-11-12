var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var aboutMeSchema = new Schema({
  path: String, 
  name: String,
	githubLink: String,
	githubProfileImage: String,
	personalSiteLink: String,
	currentCity: String,
	bornInCity: String,
  hobbies: Array
});

var AboutMe = mongoose.model('aboutMe', aboutMeSchema);

module.exports = AboutMe;
