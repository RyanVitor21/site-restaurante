//login testado


function clearInput(inputId) {
    document.getElementById(inputId).value = "";
}


document.getElementById("BotaoDeVoltar").addEventListener("click", function() {
    window.history.back();
});

function clearInput(id) {
    document.getElementById(id).value = '';
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        const messageDiv = document.getElementById("message");
        messageDiv.style.display = 'block';
        if (data.success) {
            messageDiv.className = 'message success visible';
            messageDiv.textContent = data.message;
            setTimeout(() => {
                window.location.href = data.redirect;
            }, 2000);
        } else {
            messageDiv.className = 'message error visible';
            messageDiv.textContent = data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
