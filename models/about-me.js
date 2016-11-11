var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var aboutMeSchema = new Schema({
  name: String,
	githubLink: String,
	githubProfileImage: String,
	personalSiteLink: String,
	currentCity: String,
	bornInCity: String,
  hobbies: []
});

var aboutMe = mongoose.model('aboutMe', aboutMeSchema);

module.exports = aboutMe;
