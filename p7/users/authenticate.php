<?php
  require_once "../php/db_connect.php";
  
  if (isset($_POST["login"])){
    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);
    
    if ($stmt = $db->prepare("SELECT * FROM users WHERE username=?")) { // use prepare to avoid SQL injection
      $stmt->bind_param("s", $username);      /* bind parameters for markers */
      $stmt->execute();      /* execute query */
      $result = $stmt->get_result(); // to use affected_rows when the query is SELECT, one must call get_result() first. This is not needed if the query is CREATE TABLE, UPDATE, DELETE, ALTER TABLE.
      
      if ($db->affected_rows == 0){ // username not found, return error 1
        echo json_encode(array("error"=>1));
      }
      else{
        $myRow = $result->fetch_assoc();
        if (password_verify($password, $myRow["passhash"]))
          echo json_encode(array("error"=>0, "username"=>$myRow["username"]));
        else // password error, still return error 1
          echo json_encode(array("error"=>1));
      }
      
      /* close $result */
      $result->close();
      
      /* close statement */
      $stmt->close();
    }
  }

  $db->close();
?>