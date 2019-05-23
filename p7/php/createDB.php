<?php
  require_once "db_connect.php";
  
  // create allnames table
  if (!$db->query("SELECT 1 FROM users LIMIT 1")){ // check whether allnames table has been created already
    $createUsers_stmt = "CREATE TABLE users(
        username varchar(32) NOT NULL UNIQUE,
        passhash varchar(255) NOT NULL,
        PRIMARY KEY(username))";
    if (!$db->query($createUsers_stmt)){ 
      echo "<p>" . $db->error . "<br>Creating Database failed.</p>";
    }
    
    // add a couple default users
    $insert_stmt = "INSERT INTO users (username, passhash) VALUES";
    
    $username1 = "john";
    $password1 = "12345";
    $hash1 = password_hash($password1, PASSWORD_DEFAULT);
    
    $username2 = "jane";
    $password2 = "password";
    $hash2 = password_hash($password2, PASSWORD_DEFAULT);
    $insert_stmt = $insert_stmt  . "('$username1', '$hash1'),('$username2', '$hash2')";
    
    if (!$db->query($insert_stmt)){
      echo "<p>" . $db->error . "<br>Add default users failed.</p>";
    }
    else
      echo"<p>Add default users success</p>";
  }
  
  
  
  $db->close();
?>