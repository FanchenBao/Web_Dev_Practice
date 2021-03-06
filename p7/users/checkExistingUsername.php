<?php
  require_once "../php/db_connect.php";
  
  if (isset($_POST["username"])){
    $username = trim($_POST["username"]);
    if ($username){
      $username .= "%";
      if ($stmt = $db->prepare("SELECT * FROM users WHERE username LIKE ?")) { // use prepare to avoid SQL injection
        $stmt->bind_param("s", $username);      /* bind parameters for markers */
        $stmt->execute();      /* execute query */
        $result = $stmt->get_result(); // to use affected_rows when the query is SELECT, one must call get_result() first. This is not needed if the query is CREATE TABLE, UPDATE, DELETE, ALTER TABLE.
        if ($db->affected_rows == 0) // current username input is unique
          echo json_encode(array("error"=>true));
        else
          echo json_encode(array("error"=>false));
        
        /* close $result */
        $result->close();

        /* close statement */
        $stmt->close();
      }
    }
    else
      echo json_encode(array("error"=>true)); // empty username is unique. This return value is crucial, otherwise the error message would have conflict with empty username error generated by validator
  }

  $db->close();
?>