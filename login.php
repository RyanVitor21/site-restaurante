<?php
session_start();
include './conexao.php';

header('Content-Type: application/json');

$response = array();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $stmt = $db->prepare('SELECT * FROM dadosdousuario WHERE email = :email');
    $stmt->bindValue(':email', $email, SQLITE3_TEXT);
    $result = $stmt->execute();

    $user = $result->fetchArray(SQLITE3_ASSOC);

    if ($user && $user['senha'] == $senha) {
        $_SESSION['email'] = $user['email'];
        $_SESSION['nome'] = $user['nome'];
        $response['success'] = true;
        $response['message'] = 'Login bem-sucedido. Redirecionando...';
        $response['redirect'] = '/html/Inicio/inicio2.html';
    } else {
        $response['success'] = false;
        $response['message'] = 'Email ou senha incorretos.';
    }
} else {
    $response['success'] = false;
    $response['message'] = 'Método de requisição inválido.';
}

echo json_encode($response);
