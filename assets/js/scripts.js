// "Watch" the body:after { content } to find out how wide the viewport is.
// Thanks to http://adactio.com/journal/5429/ for details about this method
function mqtag() {
  return window.getComputedStyle(document.body,':after').getPropertyValue('content');
}
var mq_tag = mqtag();
//console.log( "mq_tag= " + mq_tag );


// Do things when the viewport dimensions or orientation change
// It is safe to put ALL resize or onLoad events in here
function on_resize_orientationchange() {

  // Check again on resize/orientation change
  var mq_tag = mqtag();
  //console.log( "mq_tag is now= " + mq_tag );

};


// When the DOM is ready, do these things. 
$(document).ready(function() {


  // Set and/or Get Cookies for log in
  // https://github.com/js-cookie/js-cookie
  $('.js-set-login').on( 'click', function(li) {
    //li.preventDefault();
    Cookies.set('authentication', '1');
    location.reload();
  });
  $('.js-set-logout').on( 'click', function(lo) {
    //lo.preventDefault();
    Cookies.remove('authentication');
    location.reload();
  });
  var loggedin = Cookies.get('authentication');
  //console.log(loggedin);
  if (loggedin === '1') {
    $('body').addClass('logged-in');
  } else {
    $('body').addClass('logged-out');
  }
  
  
  // Cloning content
  // For fun and profit... er, I mean, for cleaner source code and better A11y
  
  // Use unwrap() here instead of removing attributes? 
  
  // Clone the contents of the Category Nav and put it into the Overflow
  $('#categories.js-clone').clone().removeClass('js-clone').removeAttr('id').appendTo('#categories__clone');
  
  // Clone the contents of the Search box and put it into the Catnav
  $('#searchbox.js-clone').clone().removeClass('js-clone').removeAttr('id').appendTo('#searchbox__clone');
  
  // Clone the contents of the Meta information and put it into the Adhesive sidebar
  $('#dealmeta.js-clone').clone().removeClass('js-clone').removeAttr('id').appendTo('#dealmeta__clone');
  
  // The above code could be made into a pattern that iterates on .js-clone elements,
  // grabs the elements #id, and finds the other element with the same #id appended with __clone


  // Animate some scrolling for smoother transitions 
  // http://css-tricks.com/snippets/jquery/smooth-scrolling/
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
  
  
  // Initialize Magnific popups
  if ( document.getElementsByClassName('js-inline-modal') !== null ) {
    $('.js-inline-modal').magnificPopup({
      type: 'inline',
      midClick: true
    });
  }
  
});


// When the page and assets are ready, do some more things
$(window).load(function() {

  // Clone this element now, after the js cookie has been checked
  // and the class logged-in or logged-out has been added to body
  
  // Clone the Sign In/Join and Redeem actions, no matter the Flow we are in, for an adhesive bottom bar
  if ( $('body').hasClass('deal-single logged-out') ) {
    $('#dealredeem.js-clone').clone().removeClass('js-clone').removeAttr('id').appendTo('#dealredeem__clone');
  }


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


  // Toggle the visibility of the Search bar for Mobile
  // Toggle the visibility of the Overflow Category Nav
  // Toggle the visibility of the User Menu
  $('.js-menu-trigger').on( 'click', function(se) {
    se.preventDefault();
    $(this).toggleClass('open');
  });


  // Check the body { content: '' } to see if we have a match
  // If so, move the contents of the adhesive redemption to the adhesive aside
  if (mq_tag.indexOf("deal-sidebar-adhesive") !=-1) {
    //console.log( "'deal-sidebar-adhesive' found in body { content:''}" );

    // Append content: move from inside one element to another
    $('#dealredeem.js-clone').clone().unwrap().appendTo('#dealredeem__moved');
  }


  // Accordions
  if ( document.getElementsByClassName('js-accordion') !== null ) {
    $('.js-accordion').on('click', '.js-accordion-trigger', function(f) {
      f.preventDefault();
      target_id = $(this).attr('href');
      $(this).toggleClass('open');
      $(target_id).toggleClass('open');
    });
  }
  

  // Waypoints for the redeem options
  
  // Viewport bottom bar for mobile
  if ( document.getElementsByClassName('deal__column__container') !== null ) {
    var waypoint = new Waypoint({
      element: $('#dealredeem')[0],
      handler: function(direction) {
        // Action
        //console.log('#dealredeem__clone has hit the top of the viewport');
        //$('body').toggleClass('js-adhesive-redeem');
        $('#dealredeem__clone').toggleClass('deal__adhesion--footer--visible');
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


// Keep this at the bottom
//
// Load, Resize and Orientation change methods
// http://css-tricks.com/forums/discussion/16123/reload-jquery-functions-on-ipad-orientation-change/p1 */

// initial load
$(window).load( function() { on_resize_orientationchange(); });

//bind to resize
var resizeTimer;
$(window).resize(function () {
  if (resizeTimer) { clearTimeout(resizeTimer); }
  // set new timer
  resizeTimer = setTimeout(function() {
    resizeTimer = null;
    // put your resize logic here and it will only be called when there's been a pause in resize events
    on_resize_orientationchange();
  }, 350);
});

//check for the orientation event and bind accordingly
if (window.DeviceOrientationEvent) { window.addEventListener('orientationchange', on_resize_orientationchange, false); }