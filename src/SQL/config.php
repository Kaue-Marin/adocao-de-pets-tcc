<?php
  
  $dbHost = 'localhost'; // Alterado para minúsculas
  $dbUsername = 'root';
  $dbPassword = "";
  $dbName = "formulario_teste_renan";

  $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

  echo "Conexão efetuada com sucesso"; // Adicionado ponto-e-vírgula

?>