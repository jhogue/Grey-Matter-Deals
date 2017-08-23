//Insert awesome js here!

$(document).ready(function() {
  
  // Clone the Main nav to create the mobile drawer
  $('#b365-mainnav').clone().prop('id', 'b365-mainnav__js-clone' ).addClass('drawer__nav').appendTo('.drawer');
  
  // Javascript to toggle the mobile menus on Primary Source & .com
  $( '.js-menu-toggle' ).on( 'click', function(e) {
    e.preventDefault();
    $( 'body' ).toggleClass( 'js-menu-open' );
  });
  
  // Close it with the close overlay
  $( '.js-menu-close' ).on( 'click', function(e) {
    e.preventDefault();
    $( 'body' ).removeClass( 'js-menu-open' );
  });
  
  
  // Deals page
  // Clone the Redeem actions for an adhesive bottom bar
  $('#deal-redeem').clone().prop('id', 'deal-redeem__js-clone' ).addClass('deal__redeem deal__redeem--adhesive').appendTo('.deal__details');
  $('#deal-brand').clone().prop('id', 'deal-actions__js-clone' ).addClass('deal__title__brand').prependTo('#deal-redeem__js-clone');
  
  // Waypoints for the redeem options
  var waypoint = new Waypoint({
    element: document.getElementById('deal-wrapper'),
    handler: function(direction) {
      // Action
      //console.log('#deal-wrapper has hit the top of the viewport');
      $('body').toggleClass('js-adhesive-redeem');
      $('#deal-redeem__js-clone').toggleClass('deal__redeem--visible');
    },
    offset: 0
  });


  // Initialize Magnific popup
  $('.js-inline-modal').magnificPopup({
    type: 'inline',
    midClick: true
  });


  /* 
   * Animate some scrolling for smoother transitions 
   * http://css-tricks.com/snippets/jquery/smooth-scrolling/
   */
  $(function() {
    $('.js-smooth-scroll').click(function(e) {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          e.preventDefault();
        }
      }
    });
  });
});
