<?php
  error_reporting(E_ALL);  
  ini_set('display_startup_errors', 1);
  ini_set('display_errors',1); 


  require_once 'login.php';
//  $query = "CREATE TABLE mytable (
//      name varchar(20),
//      sex char,
//      breed varchar(20),
//      weight float
//    )";
//  if(!$conn->query($query))
//    echo "Table already exists.";
//  
//  $insert = "INSERT INTO mytable
//    values 
//      ('Snoopy', 'M', 'Superdog', '10.5'),
//      ('Sleepy', 'F', 'Firedog', '11.5'),
//      ('Snowy', 'M', 'Waterdog', '10.1'),
//      ('Snappy', 'F', 'Winddog', '9.9'),
//      ('Skinny', 'M', 'Earthdog', '100.5')";
//
//  if (!$conn->query($insert))
//    echo "Insert failed.";
//  else
//    echo "Insert successful";

  

  $conn->close();
?>
