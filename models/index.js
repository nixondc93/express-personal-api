var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

// module.exports.Campsite = require("./campsite.js.example");

var CampsiteSchema = new Schema({
  description: String
});

var Campsite = mongoose.model('Campsite', CampsiteSchema);

module.exports = Campsite;
