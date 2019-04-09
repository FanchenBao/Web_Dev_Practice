<?php // login.php
  $hn = 'localhost';
  $db = 'fanchenDB';
  $un = 'root'; // Change this
  $pw = 'root'; // Change this

  $conn = new mysqli($hn, $un, $pw, $db);
  if ($conn->connect_error) die("Fatal Error connecting to database.");
?>

