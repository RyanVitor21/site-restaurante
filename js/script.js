$(document).ready(function() {
  // Verifica se o botão "I Accept" foi clicado anteriormente e oculta a barra de cookies se necessário
  if(localStorage.getItem('cookieAccepted')) {
      $('#cookie-notice').hide();
  }

  // Adiciona um evento de clique ao botão "I Accept"
  $('#accept-button').on('click', function() {
      // Oculta a barra de cookies
      $('#cookie-notice').fadeOut();
      // Define uma flag no armazenamento local indicando que o usuário aceitou os cookies
      localStorage.setItem('cookieAccepted', true);
  });
});
