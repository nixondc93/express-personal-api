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

//////////////////////
//getting species data
//////////////////////

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
    $('.species-target').append(allSpecies);
  }
}

getAboutMe();
getSwSpecies();


$('.deleteBtn').click(function(e){
  alert('hello')
    var id = $(this).attr('data-id')
    console.log(id);
    console.log(this);
  $.ajax({
    method: 'Delete',
    url: '/api/swspecies/' + $(this).attr('data-id'),
    success: speciesSucc,
    error: handleError
  });
  function speciesSucc(){
    getSwSpecies();
    console.log('deleted');
  }
});






});
