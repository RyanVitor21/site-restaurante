
function clearInput(inputId) {
    document.getElementById(inputId).value = "";
}

function togglePasswordVisibility() {
    var senhaInput = document.getElementById('senha');
    
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text'; // Se a senha estiver oculta, exibe-a
        senhaInput.style.width = senhaInput.offsetWidth + 'px'; // Mantém a largura do campo de senha
    } else {
        senhaInput.type = 'password'; // Se a senha estiver visível, oculta-a
    }
}


