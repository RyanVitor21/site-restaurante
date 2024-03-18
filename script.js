// script.js

(function($) {
    $('#i-accept').on('click', function() {   
      if(localStorage.hidecookiebar !== '1') {
        $('#cookie-notice').hide();
        localStorage.hidecookiebar='1';
      }  
    });
    
    if(localStorage.hidecookiebar == '1') {
      $('#cookie-notice').hide();
    }
    
    $(window).on('load', function() {
      $("#loader-wrapper").fadeOut(700);
    });
  })(jQuery);
  