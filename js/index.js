$('.popup_video').magnificPopup({
  type: 'iframe',
});

// button popup here
$('.button-for-click').magnificPopup({
  type: 'inline',
  midClick: true,
});
// menu sidebar start here
$(document).ready(function(){
  $('.hamberger_menu').click(function(){
    $('.sidebar').toggleClass('show_menu');
  });
});
new WOW().init();

// tiny slider

var slider = tns({
  container: '.my-slider',
  items: 2,
  slideBy: 'page',
  autoplay: true, 
  controls: false,
  nav: false,
  responsive: {
      320: {
        edgePadding: 20,
        gutter: 20,
        items: 1
      },
      700: {
        gutter: 30
      },
      768: {
        items:2 
      }
    }
});