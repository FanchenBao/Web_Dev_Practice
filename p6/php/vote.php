<?php
  require_once "connect_db.php";
  
  if (isset($_POST["vote"])){
    $votename = trim($_POST["name"]);
    $gender = $_POST["gender"];
    
    // Update the count of input name if already exists in votenames db, else add it to the db
    if ($stmt = $conn->prepare("UPDATE votenames SET count = count + 1 WHERE name=? and gender=?")) { // use prepare to avoid SQL injection
      $stmt->bind_param("ss", $votename, $gender);      /* bind parameters for markers */
      $stmt->execute();      /* execute query */
      if ($conn->affected_rows == 0){ // name, gender pair not in votenames db, insert it
        
        if ($insert_stmt = $conn->prepare("INSERT INTO votenames VALUES(NULL, ?, ?, 1)")){
          $insert_stmt->bind_param("ss", $votename, $gender);
          $insert_stmt->execute();
          if ($conn->affected_rows < 1){ // insertion failed
            echo json_encode(array("error"=>1));
            exit;
          }
//          else echo json_encode("insertion success");
          $insert_stmt->close();
        }
        
      }
//      else echo json_encode("update success");
      /* close statement */
      $stmt->close();
    }
  }

  $conn->close();
?>