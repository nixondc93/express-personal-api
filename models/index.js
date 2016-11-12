var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");


module.exports.AboutMe = require("./about-me.js");
module.exports.SwSpecies = require("./star-wars.js");
