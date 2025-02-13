// sticky header

$(window).on("scroll touchmove", function() {

    if ($(document).scrollTop() > $("#sticky-wrapper").position().top) {
      $('.sticky-area').css('width', '100%');
      $('.sticky-area').css('max-width', '1600px');
      $('.sticky-area').css('margin', '0 auto');
      $('.sticky-area').css('padding', '20px 105px');
      $('.sticky-area').css('position', 'fixed');
      $('.sticky-area').css('top', '0px');
      $('.sticky-area').css('left', '0px');
      $('.sticky-area').css('background', '#0b0d26');
      $('.sticky-area').css('z-index', '1111');
      // $('.sticky-area').css('box-shadow', '0 3px 16px -2px #ebe8e8');
      $('#sticky-wrapper').addClass('is-sticky');
  
    }
    else{
    $('.sticky-area').removeAttr('style');
  
    }
    
  });