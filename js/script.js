$(document).ready(function() {
  // Verifica se o usuário já aceitou os cookies
  if (localStorage.getItem('cookieAccepted')) {
      $('#cookie-notice').hide();
  } else {
      $('#cookie-notice').show();
  }

  // Adiciona um evento de clique ao botão "I Accept"
  $('#accept-button').on('click', function() {
      // Oculta a barra de cookies
      $('#cookie-notice').fadeOut();
      // Define uma flag no armazenamento local indicando que o usuário aceitou os cookies
      localStorage.setItem('cookieAccepted', 'true');
  });
});

