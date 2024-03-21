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

  // Função para verificar se uma string contém apenas letras
  function containsOnlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
  }

  // Função para validar o email
  function isValidEmail(email) {
    // Expressão regular para validar o email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $('#nome').on('blur', function() {
    var nome = $(this).val();
    if (nome.trim() === '') {
      alert('Por favor, preencha o campo Nome.');
      return;
    } else if (!containsOnlyLetters(nome.trim())) {
      alert('Por favor, preencha APENAS COM LETRAS o campo Nome.');
      return;
    }
  });

  $('#email').on('blur', function() {
    var email = $(this).val();
    if (email.trim() === '') {
      alert('Por favor, preencha o campo Email.');
      return;
    } else if (!isValidEmail(email.trim())) {
      alert('Por favor, preencha um email válido.');
      return;
    }
  });

  $('#senha').on('blur', function() {
    var senha = $(this).val();
    if (senha.trim() === '') {
      alert('Por favor, preencha o campo Senha.');
      return;
    }
  });

})(jQuery);
