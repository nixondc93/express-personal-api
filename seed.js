// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var aboutMe = {
  path: '/api/aboutme',
  name: "Derry Nixon",
	githubLink:'https://github.com/nixondc93',
	githubProfileImage: 'https://avatars3.githubusercontent.com/u/17390689?v=3&s=460',
	personalSiteLink:"https://nixondc93.github.io/",
	currentCity: 'San Francisco',
	bornInCity: 'Boone',
  hobbies: ['soccer','hiking','kayaking', 'traveling', 'fishing']
}

var species = {
				path: "/api/species",
				data: [{
					"name": "Hutt",
					"classification": "gastropod",
					"designation": "sentient",
					"average_height": "300",
					"skin_colors": "green, brown, tan",
					"hair_colors": "n/a",
					"eye_colors": "yellow, red",
					"average_lifespan": "1000",
					"homeworld": "http://swapi.co/api/planets/24/",
					"language": "Huttese",
					"people": [
						"http://swapi.co/api/people/16/"
					],
					"films": [
						"http://swapi.co/api/films/3/",
						"http://swapi.co/api/films/1/"
					]
				}, {
					"name": "Yoda's species",
					"classification": "mammal",
					"designation": "sentient",
					"average_height": "66",
					"skin_colors": "green, yellow",
					"hair_colors": "brown, white",
					"eye_colors": "brown, green, yellow",
					"average_lifespan": "900",
					"homeworld": "http://swapi.co/api/planets/28/",
					"language": "Galactic basic",
					"people": [
						"http://swapi.co/api/people/20/"
					],
					"films": [
						"http://swapi.co/api/films/5/",
						"http://swapi.co/api/films/4/",
						"http://swapi.co/api/films/6/",
						"http://swapi.co/api/films/3/",
						"http://swapi.co/api/films/2/"
					]
				}, {
					"name": "Trandoshan",
					"classification": "reptile",
					"designation": "sentient",
					"average_height": "200",
					"skin_colors": "brown, green",
					"hair_colors": "none",
					"eye_colors": "yellow, orange",
					"average_lifespan": "unknown",
					"homeworld": "http://swapi.co/api/planets/29/",
					"language": "Dosh",
					"people": [
						"http://swapi.co/api/people/24/"
					],
					"films": [
						"http://swapi.co/api/films/2/"
					]
				}, {
					"name": "Mon Calamari",
					"classification": "amphibian",
					"designation": "sentient",
					"average_height": "160",
					"skin_colors": "red, blue, brown, magenta",
					"hair_colors": "none",
					"eye_colors": "yellow",
					"average_lifespan": "unknown",
					"homeworld": "http://swapi.co/api/planets/31/",
					"language": "Mon Calamarian",
					"people": [
						"http://swapi.co/api/people/27/"
					],
					"films": [
						"http://swapi.co/api/films/3/"
					]
				}, {
					"name": "Ewok",
					"classification": "mammal",
					"designation": "sentient",
					"average_height": "100",
					"skin_colors": "brown",
					"hair_colors": "white, brown, black",
					"eye_colors": "orange, brown",
					"average_lifespan": "unknown",
					"homeworld": "http://swapi.co/api/planets/7/",
					"language": "Ewokese",
					"people": [
						"http://swapi.co/api/people/30/"
					],
					"films": [
						"http://swapi.co/api/films/3/"
					]
				}, {
					"name": "Sullustan",
					"classification": "mammal",
					"designation": "sentient",
					"average_height": "180",
					"skin_colors": "pale",
					"hair_colors": "none",
					"eye_colors": "black",
					"average_lifespan": "unknown",
					"homeworld": "http://swapi.co/api/planets/33/",
					"language": "Sullutese",
					"people": [
						"http://swapi.co/api/people/31/"
					],
					"films": [
						"http://swapi.co/api/films/3/"
					]
        	}, {
					"name": "Neimodian",
					"classification": "unknown",
					"designation": "sentient",
					"average_height": "180",
					"skin_colors": "grey, green",
					"hair_colors": "none",
					"eye_colors": "red, pink",
					"average_lifespan": "unknown",
					"homeworld": "http://swapi.co/api/planets/18/",
					"language": "Neimoidia",
					"people": [
						"http://swapi.co/api/people/33/"
					],
					"films": [
						"http://swapi.co/api/films/4/"
					]
				}, {
					"name": "Gungan",
					"classification": "amphibian",
					"designation": "sentient",
					"average_height": "190",
					"skin_colors": "brown, green",
					"hair_colors": "none",
					"eye_colors": "orange",
					"average_lifespan": "unknown",
					"homeworld": "http://swapi.co/api/planets/8/",
					"language": "Gungan basic",
					"people": [
						"http://swapi.co/api/people/36/",
						"http://swapi.co/api/people/37/",
						"http://swapi.co/api/people/38/"
					],
					"films": [
						"http://swapi.co/api/films/5/",
						"http://swapi.co/api/films/4/"
					],
				}, {
					"name": "Toydarian",
					"classification": "mammal",
					"designation": "sentient",
					"average_height": "120",
					"skin_colors": "blue, green, grey",
					"hair_colors": "none",
					"eye_colors": "yellow",
					"average_lifespan": "91",
					"homeworld": "http://swapi.co/api/planets/34/",
					"language": "Toydarian",
					"people": [
						"http://swapi.co/api/people/40/"
					],
					"films": [
						"http://swapi.co/api/films/5/",
						"http://swapi.co/api/films/4/"
					]
				}, {
					"name": "Dug",
					"classification": "mammal",
					"designation": "sentient",
					"average_height": "100",
					"skin_colors": "brown, purple, grey, red",
					"hair_colors": "none",
					"eye_colors": "yellow, blue",
					"average_lifespan": "unknown",
					"homeworld": "http://swapi.co/api/planets/35/",
					"language": "Dugese",
					"people": [
						"http://swapi.co/api/people/41/"
					],
					"films": [
						"http://swapi.co/api/films/4/"
					]
				}]
			}




      db.AboutMe.remove({}, function(err, succ) {
        if (err) {
          console.error(err);
        }
        db.AboutMe.create(aboutMe, function(err, succ){
          if (err) {
            console.log(err);
          }
        });
      });

      db.SwSpecies.remove({}, function(err, succ) {
        db.SwSpecies.create(species, function(err, succ){
          if (err) {
            console.log(err);
          }
        });
      });
      // db.AboutMe.remove({}, function(err, aboutme) {
      //   if(err) {
      //     console.log('Error occurred in remove', err);
      //   } else {
      //     console.log('Removed profile');
      //     db.AboutMe.create(aboutMe, function(err, aboutme) {
      //       if (err) { return console.log('err', err); }
      //       console.log('Created profile ' + aboutMe);
      //     });
      //   }
      // });
