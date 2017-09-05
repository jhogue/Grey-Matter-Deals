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
  
  // Always clone the Sign In actions, they are the same
  $('body.logged-out .deal__redeem.logged-out').clone().prop('id', 'deal-redeem__js-clone' ).addClass('deal__redeem deal__redeem--adhesive').appendTo('.deal__details');
  
  // Clone the Flow 1 Redeem if we are in Flow 1
  $('body.logged-in.flow-1-body .flow-1 .deal__redeem.logged-in').clone().prop('id', 'deal-redeem__js-clone' ).addClass('deal__redeem deal__redeem--adhesive').appendTo('.deal__details');
  // Same for Flow 2
  $('body.logged-in.flow-2-body .flow-2 .deal__redeem.logged-in').clone().prop('id', 'deal-redeem__js-clone' ).addClass('deal__redeem deal__redeem--adhesive').appendTo('.deal__details');
  
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

  // The wayfinding navigation on Flow-2 Deal
  var sticky = new Waypoint.Sticky({
    element: $('.js-adhesive')[0]
  });
  // When the height of the adhesive nav hits the bottom of the container, stop it from adhering
  var navheight = $(".wayfinding__wrapper").outerHeight(true), // returns 325, is actually 240
      barheight = $("#wayfinding").outerHeight(true), // returns 3146, is actually 2188
      height_difference = barheight - navheight;
  
  console.log(height_difference + ' = ' + barheight + ' - ' + navheight);
  
  var scrolltobottom = new Waypoint({
    element: $("#wayfinding")[0],
    handler: function(direction) {
      $(".wayfinding__wrapper").toggleClass('hit-bottom');
    },
    offset: - height_difference
  });
  

  // Initialize Magnific popups
  $('.js-inline-modal').magnificPopup({
    type: 'inline',
    midClick: true
  });
  $('.js-inline-modal-signin').magnificPopup({
    type: 'inline',
    midClick: true
  });
  $('.js-inline-modal-redeem').magnificPopup({
    type: 'inline',
    midClick: true
  });
  
  // In Flow-2, open the pop-up immediately after a user signs in
  $('body.flow-2-body.logged-in .js-inline-modal-redeem').magnificPopup({
    type: 'inline'
  }).magnificPopup('open');


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
