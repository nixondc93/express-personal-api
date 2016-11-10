// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }
//
//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var data = {
  message: "Welcome to my personal api!",
  documenatation: "https://github.com/nixondc93/express-personal-api/blob/master/README.md",
  baseUrl: "https://pure-depths-90141.herokuapp.com"
  endpoints: [
      method: "Get",
      path: '/api/profile',
      data: 'about me'
  ]
}
