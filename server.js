// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/





// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false,
    message: "Welcome to my personal api! Here's what you need to know!",
    documenatation: "https://github.com/nixondc93/express-personal-api/blob/master/README.md",
		baseUrl: "https://pure-depths-90141.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Displays all endpoints"},
      {method: "GET", path: "/api/aboutme", description: "Info about me endpoint"},
      {method: "GET", path: "/api/swspecies", description: "Displays all Starwars species"},
      {method: "GET", path: "/api/swspecies/:id", description: "Gets a single Starwars Species"},
      {method: "POST", path: "", description: "Creates a new Species"},
      {method: "PUT", path: "", description: "Updates a Species"},
      {method: "DELETE", path: "", description: "Deletes a Species"}
    ]

  });
});



app.get('/api/aboutme', function(req, res) {
  db.AboutMe.find(function(err, aboutme){
    if (err) {
      return console.log(err);
    }
    res.json(aboutme);
  });
});

app.get('/api/swspecies', function(req, res) {
  db.SwSpecies.find(function(err, species){
    if (err) {
      return console.log(err);
    }
    res.json(species);
  });
});

app.get('/api/swspecies/:id', function(req, res) {
  db.SwSpecies.findOne({_id: req.params.id} ,function(err, species){
    if (err) {
      return console.log(err);
    }
    res.json(species);
  });
});









/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
