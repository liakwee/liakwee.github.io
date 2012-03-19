/* Author:

*/


$(function(){
	var $container = $('#container');
	
	
	// initialize Isotope
	$container.imagesLoaded( function(){
		console.log($container.width()/4);
		$container.isotope({
			itemSelector : '.items',
			resizable: false, // disable normal resizing
			// set columnWidth to a percentage of container width
			masonry: { columnWidth: $container.width() / 4 }
		});
	});
		
	// update columnWidth on window resize
    $(window).smartresize(function(){
      $container.isotope({
        // set columnWidth to a percentage of container width
        masonry: {
          columnWidth: $container.width() / 5
        }
      });
    });
	
	// $('#filters').find('a').click(function(){
	  	// var selector = $(this).attr('data-filter');
	  	// $container.isotope({ filter: selector });
	  	// coonsole.log(selector)
	  	// return false;
	// });

});


	
	