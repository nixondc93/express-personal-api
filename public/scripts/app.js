console.log("Sanity Check: JS is working!");

$(document).ready(function() {

	var aboutMeSource,
		speciesSource,
		aboutMeTemplate,
		speciesTemplate,
		speciesHtml;

	var speciesData = [];
	var hb = Handlebars;

	//////////////////////
	//getting profile data
	//////////////////////

	function getAboutMe() {
		aboutMeSource = $('#aboutme-template').html();
		aboutMeTemplate = hb.compile(aboutMeSource);
		$.ajax({
			method: 'GET',
			url: '/api/aboutme',
			success: aboutmeSucc,
			error: handleError
		});

		function handleError(error) {
			console.error(error);
		}

		function aboutmeSucc(json) {
			$('.aboutme-target').append(aboutMeTemplate(json[0]));
		}
	}

	//////////////////////
	//getting species data
	//////////////////////


	speciesSource = $('#species-template').html();
	speciesTemplate = hb.compile(speciesSource);


	function render() {
		$('.species-target').empty();
		speciesHtml = speciesTemplate({
			swspecies: speciesData
		});
		$('.species-target').append(speciesHtml);


	}


	function getSwSpecies() {

		$.ajax({
			method: 'GET',
			url: '/api/swspecies',
			success: speciesSucc,
			error: handleError
		});

		function handleError(error) {
			console.error(error);
		}

		function speciesSucc(json) {
			speciesData = json;
			render();
		}
	}

	getAboutMe();
	getSwSpecies();



	$('.species-target').on('click', '.deleteBtn', function(e) {
		e.preventDefault();
		var id = $(this).attr('data-id');
		console.log(id);
		$.ajax({
			method: 'Delete',
			url: '/api/swspecies/' + id,
			success: deleteSucc,
			error: handleError
		});

		function handleError(error) {
			console.error(error);
		}

		function deleteSucc(json) {
			var deleted = json;
			var id = deleted._id;

			for (var i = 0; i < speciesData.length; i++) {
				if (speciesData[i]._id === id) {
					speciesData.splice(i, 1);
					break;
				}
			}
			render();
		}

	});


	$('#add-items').on('submit', function(e) {
		e.preventDefault();
		$.ajax({
			method: 'POST',
			url: '/api/swspecies',
			data: $(this).serialize(),
			success: postSuccess,
			error: handleError
		});
	});

	function handleError(error) {
		console.error(error);
	}

	function postSuccess(json) {
		$('.clear').val('');
		speciesData.push(json)
		render();

	}
//show update fields
	$('.species-target').on('click', '.updateBtn', function(e) {
		var display = $('.display');
		$(this).parent().find(display).toggle();
		$(this).parent().find("input").removeClass('hidden');
	});




	$('.speciesUpdate').on('submit', '.saveBtn', function(e) {
    console.log('hello');
		e.preventDefault();
    console.log($(this).serialize());
		var id = $(this).attr('data-id');
		console.log(id);
		$.ajax({
			method: 'PUT',
			url: '/api/swspecies' + id,
			data: $(this).serialize(),
			success: postSuccess,
			error: handleError
		});
    function handleError(error){
      console.error(error);
    }

		function postSuccess(json) {
			console.log(json);
		}

	});



});
