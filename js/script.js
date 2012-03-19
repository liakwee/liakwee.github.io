/* Author:

*/


$(document).ready(function() {
	var $container = $('#container')
	// initialize Isotope
	$container.isotope({
		itemSelector : '.items',
		// options...
		resizable: false, // disable normal resizing
		// set columnWidth to a percentage of container width
		masonry: { columnWidth: $container.width() / 4},
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});
	
	// update columnWidth on window resize
	$(window).smartresize(function(){
	  $container.isotope({

			// set columnWidth to a percentage of container width
			masonry: { columnWidth: $container.width() / 4},
			
	  });
	});
	
	$('#filters').find('a').click(function(){
	  	var selector = $(this).attr('data-filter');
	  	$container.isotope({ filter: selector });
	  	coonsole.log(selector)
	  	return false;
	});
	

});


	