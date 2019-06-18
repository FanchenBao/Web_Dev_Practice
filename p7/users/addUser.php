<?php
  require_once "../php/db_connect.php";

  if (isset($_POST["signup"])){
    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);
    
    if ($stmt = $db->prepare("INSERT INTO users (username, passhash) VALUES (?, ?)")) { // use prepare to avoid SQL injection
      $stmt->bind_param("ss", $username, password_hash($password, PASSWORD_DEFAULT));  /* bind parameters for markers */
      $stmt->execute();      /* execute query */
      
      // directly call $db->affected_rows because the statement is not SELECT, so no need to call $stmt->get_result() first
      if ($db->affected_rows == 0) // insert fail, return error 1
        echo json_encode(array("error"=>1));
      else // insert success
        echo json_encode(array("error"=>0));
 
      /* close statement */
      $stmt->close();
    }
  }
  
  $db->close();
?>