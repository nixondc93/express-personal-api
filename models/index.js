var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");


module.exports.aboutMe = require("./about-me.js");
module.exports.SWSpecies = require("./star-wars.js");
