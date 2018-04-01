$(document).ready(function() {

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  layoutMode: 'fitRows',
  // sortBy : 'random'
});

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');

});

$('#frontBtn').on('click', function(event){
  event.preventDefault();
  $('#frontBtn').addClass("underline");
  $('#allBtn').removeClass("underline");
  $('#fullBtn').removeClass("underline");
  $grid.isotope({ filter: '.front-end' });
});

$('#allBtn').on('click', function(event){
  event.preventDefault();
  $('#allBtn').addClass("underline");
  $('#fullBtn').removeClass("underline");
  $('#frontBtn').removeClass("underline");
  $grid.isotope({ filter: '*' });

});

$('#fullBtn').on('click', function(event){
  event.preventDefault();
  $('#fullBtn').addClass("underline");
  $('#allBtn').removeClass("underline");
  $('#frontBtn').removeClass("underline");
  $grid.isotope({ filter: '.full-stack' });
});
});
