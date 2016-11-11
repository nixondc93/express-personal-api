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
		baseUrl: "https://pure-depths-90141.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Displays all endpoints"},
      {method: "GET", path: "/api/profile", description: "About me endpoint"},
      {method: "GET", path: "", description: "Displays all the items in my wishlist"},
      {method: "GET", path: "", description: "Gets a single item from my wishlist"},
      {method: "POST", path: "", description: "Creates a new item for my wishlist"},
      {method: "PUT", path: "", description: "Updates a single item in my wishlist"},
      {method: "DELETE", path: "", description: "Deletes a single item in my wishlist"}
    ]

  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
