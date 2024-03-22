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

  // Função para verificar se uma string contém apenas letras
  function containsOnlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
  }

  // Função para validar o email
  function isValidEmail(email) {
    // Expressão regular para validar o email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Evento de desfoco para o campo de nome
  $('#nome').on('blur', function() {
    var nome = $(this).val();
    // Verifica se o campo está vazio
    if (nome.trim() === '') {
      alert('Por favor, preencha o campo Nome.');
      return;
    } else if (!containsOnlyLetters(nome.trim())) { // Verifica se contém apenas letras
      alert('Por favor, preencha APENAS COM LETRAS o campo Nome.');
      return;
    }
  });

  // Evento de desfoco para o campo de email
  $('#email').on('blur', function() {
    var email = $(this).val();
    // Verifica se o campo está vazio
    if (email.trim() === '') {
      alert('Por favor, preencha o campo Email.');
      return;
    } else if (!isValidEmail(email.trim())) { // Verifica se é um email válido
      alert('Por favor, preencha um email válido.');
      return;
    }
  });

  // Evento de desfoco para o campo de senha
  $('#senha').on('blur', function() {
    var senha = $(this).val();
    // Verifica se o campo está vazio
    if (senha.trim() === '') {
      alert('Por favor, preencha o campo Senha.');
      return;
    }

    // Verifica se a senha tem pelo menos 6 caracteres
    if (senha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
  });

})(jQuery);
