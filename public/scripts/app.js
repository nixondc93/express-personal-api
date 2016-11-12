console.log("Sanity Check: JS is working!");

$(document).ready(function(){

var $species,
  aboutMeSource,
  speciesSource,
  aboutMeTemplate,
  speciesTemplate;

var hb = Handlebars;

//////////////////////
//getting profile data
//////////////////////

function getAboutMe(){
  aboutMeSource = $('#aboutme-template').html();
  aboutMeTemplate = hb.compile(aboutMeSource);
  $.ajax({
    method: 'GET',
    url: '/api/aboutme',
    success: aboutmeSucc,
    error: handleError
  });
  function handleError(error){
    console.error(error);
  }
  function aboutmeSucc(json){
    $('.aboutme-target').append(aboutMeTemplate(json[0]));
  }
}



function getSwSpecies(){
  speciesSource = $('#species-template').html();
  speciesTemplate = hb.compile(speciesSource);

  $.ajax({
    method: 'GET',
    url: '/api/swspecies',
    success: speciesSucc,
    error: handleError
  });

  function handleError(error){
    console.error(error);
  }

  function speciesSucc(json) {
    var allSpecies = speciesTemplate({swspecies: json});
    $('.aboutme-target').append(allSpecies);
  }
}








getAboutMe();
getSwSpecies();
});
