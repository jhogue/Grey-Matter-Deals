//Insert awesome js here!

$(document).ready(function() {
  
  //Clone the Main nav to create the mobile drawer
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
  
  
  /* 
   * Animate some scrolling for smoother transitions 
   * http://css-tricks.com/snippets/jquery/smooth-scrolling/
   */
  $(function() {
    $('.smooth-scroll').click(function(e) {
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
