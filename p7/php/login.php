<?php
  require_once "db_connect.php";
  
  if (isset($_POST["login"])){
    $username = $_POST["username"];
    $password = $_POST["password"];
    
  }

  $db->close();
?>