<?php
include './conexao.php';

if ($db) {
    $email = $_POST['email'];
    $nome = $_POST['nome'];
    $senha = $_POST['senha'];

    // Usar prepared statements para evitar SQL injection
    $stmt = $db->prepare('INSERT INTO dadosdousuario (email, nome, senha) VALUES (:email, :nome, :senha)');
    $stmt->bindValue(':email', $email, SQLITE3_TEXT);
    $stmt->bindValue(':nome', $nome, SQLITE3_TEXT);
    $stmt->bindValue(':senha', $senha, SQLITE3_TEXT);

    $result = $stmt->execute();

    if ($result) {
        echo "Dados inseridos com sucesso na tabela 'dadosdousuario'!";
    } else {
        echo "Erro ao inserir os dados na tabela 'dadosdousuario'.";
    }
} else {
    echo "Desculpe, não foi possível conectar ao banco de dados SQLite 'db_usuario'.";
}
?>
