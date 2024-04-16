<?php
include_once('config.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $genero = $_POST['genero'];
    $data_nasc = $_POST['data_nascimento'];
    $estado = $_POST['estado'];
    $endereco = $_POST['endereco'];
    $cidade = $_POST['cidade'];

    $stmt = $conexao->prepare("INSERT INTO usuarios(nome, email, telefone, sexo, data_nasc, cidade, estado, endereco) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

    if (!$stmt) {
        die('Erro na preparação da consulta: ' . $conexao->error);
    }
    
    $stmt->bind_param("ssssssss", $nome, $email, $telefone, $genero, $data_nasc, $cidade, $estado, $endereco);
    
    if (!$stmt->execute()) {
        die('Erro ao executar a consulta: ' . $stmt->error);
    }
    
    $stmt->close();
    $conexao->close();
}
?>
