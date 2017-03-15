/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
});


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
  $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function () {
  var modal = this;
  var hash = modal.id;
  //window.location.hash = hash;
  //history.pushState({project:modal.id}, document.title, document.location+'#!'+$('#'+hash).data('deeplink'));

  $('.desktop-site').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    adaptiveHeight: true,
    slide: 'div',
    cssEase: 'ease'
  });

  $('.mobile-site').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    slide: 'div',
    cssEase: 'ease'
  });

  window.onhashchange = function () {
    if (!location.hash) {
      $(modal).modal('hide');
    }
  }
});

$(window).on("popstate", function(evt) {
  var state = evt.originalEvent.state;
  console.log('>>'+state);
});

$('div.modal').on('hidden.bs.modal', function () {
  $('.slider').unslick();
});



$(document).ready(function () {

});
