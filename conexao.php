<?php
try {
    // Tentar abrir o banco de dados
    $db = new SQLite3('db/db_usuario');
    
    // Verificar se a conexão foi estabelecida
    if (!$db) {
        throw new Exception('Desculpe, não foi possível conectar ao banco de dados SQLite "db_usuario".');
    }

    // Criar a tabela se ela não existir
    $query = "CREATE TABLE IF NOT EXISTS dadosdousuario(
                email TEXT PRIMARY KEY,
                nome TEXT,
                senha TEXT
              )";
    
    // Executar a query e verificar o resultado
    if (!$db->exec($query)) {
        throw new Exception('Erro ao criar a tabela dadosdousuario: ' . $db->lastErrorMsg());
    }

} catch (Exception $e) {
    // Capturar e exibir erros
    echo $e->getMessage();
}
?>
