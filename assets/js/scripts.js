//Insert awesome js here!

$(document).ready(function() {
  
  // Clone the Main nav to create the mobile drawer
  $('#b365-mainnav .utility').clone().prop('id', 'utility__js-clone' ).addClass('drawer__nav').appendTo('.drawer');
  $('#b365-mainnav .catnav').clone().prop('id', 'catnav__js-clone' ).addClass('drawer__nav').appendTo('.drawer');
  
  // Deals page
  // Clone the Sign In/Join and Redeem actions, no matter the Flow we are in, for an adhesive bottom bar
  if ( $('body').hasClass('flow-1-body') ) {
    $('#redeem').clone().prop('id', 'redeem__js-clone' ).addClass('redeem redeem--adhesive').appendTo('#deal-wrapper');
  }


  // Initialize Magnific popups
  if ( document.getElementsByClassName('js-inline-modal') !== null ) {
    $('.js-inline-modal').magnificPopup({
      type: 'inline',
      midClick: true
    });
  }
  
  if ( document.getElementsByClassName('js-inline-modal-signin') !== null ) {
    $('.js-inline-modal-signin').magnificPopup({
      type: 'inline',
      midClick: true
    });
  }
  
  if ( document.getElementsByClassName('js-inline-modal-redeem') !== null ) {
    $('.js-inline-modal-redeem').magnificPopup({
      type: 'inline',
      midClick: true
    });
  }
  
  // In Flow-1, open the pop-up immediately after a user signs in
  if ( document.getElementsByClassName('js-inline-modal-redeem') !== null ) {
    $('body.flow-1-body.logged-in .js-inline-modal-redeem').magnificPopup({
      type: 'inline'
    }).magnificPopup('open');
  }


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


$(window).load(function() {

  // Javascript to toggle the mobile menus
  $( '.js-menu-toggle' ).on( 'click', function(e) {
    e.preventDefault();
    $( 'body' ).toggleClass( 'js-menu-open' );
  });
  
  // Close it with the close overlay
  $( '.js-menu-close' ).on( 'click', function(f) {
    f.preventDefault();
    $( 'body' ).removeClass( 'js-menu-open' );
  });


  // Accordions
  if ( document.getElementsByClassName('js-accordion') !== null ) {
    $('.js-accordion').on('click', '.js-accordion-trigger', function(g) {
      g.preventDefault();
      target_id = $(this).attr('href');
      $(this).toggleClass('open');
      $(target_id).toggleClass('open');
    });
  }
  

  // Waypoints for the redeem options
  if ( document.getElementById('deal-wrapper') !== null ) {
    var waypoint = new Waypoint({
      element: $('#deal-wrapper')[0],
      handler: function(direction) {
        // Action
        //console.log('#deal-wrapper has hit the top of the viewport');
        $('body').toggleClass('js-adhesive-redeem');
        $('#redeem__js-clone').toggleClass('redeem--visible');
      },
      offset: 0
    });
  }

  // The wayfinding navigation on Flow-2 Deal
  if ( document.getElementsByClassName('js-adhesive') !== null ) {
    var sticky = new Waypoint.Sticky({
      element: $('.js-adhesive')[0]
    });
    // When the height of the adhesive nav hits the bottom of the container, stop it from adhering
    var navheight = $(".wayfinding__wrapper").outerHeight(true),
        barheight = $("#wayfinding").outerHeight(true),
        height_difference = barheight - navheight - 32;
  
    //console.log(height_difference + ' = ' + barheight + ' - ' + navheight);
  
    var scrolltobottom = new Waypoint({
      element: $("#wayfinding")[0],
      handler: function(direction) {
        $(".wayfinding__wrapper").toggleClass('hit-bottom');
      },
      offset: - height_difference
    });
  }
});