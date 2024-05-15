(function($) {
  // Função para ocultar a barra de cookies quando o botão "I Accept" é clicado
  $('#i-accept').on('click', function() {   
    if(localStorage.hidecookiebar !== '1') {
      $('#cookie-notice').hide();
      localStorage.hidecookiebar='1';
    }  
  });
  
  // Verifica se a barra de cookies foi ocultada anteriormente e a oculta se necessário
  if(localStorage.hidecookiebar == '1') {
    $('#cookie-notice').hide();
  }
  
  // Oculta a tela de carregamento após o carregamento completo da página
  $(window).on('load', function() {
    $("#loader-wrapper").fadeOut(700);
  });
})(jQuery); // Certifique-se de que o jQuery seja passado como argumento para a função anônima
