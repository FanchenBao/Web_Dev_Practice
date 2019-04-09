<?php
  require_once "connect_db.php";
  
  if (isset($_POST["keyword"])){
    $keyword = trim($_POST["keyword"]);
    $gender = $_POST["gender"];
    $data = array();
    if ($keyword){ // there must be a keyword to make this work
      $keyword = $keyword . "%";
      if ($stmt = $conn->prepare("SELECT name FROM allnames WHERE gender=? AND name LIKE ? ORDER BY name LIMIT 6")) {
        $stmt->bind_param("ss", $gender, $keyword);
        $stmt->execute();
        $result = $stmt->get_result();        
        while($row = $result->fetch_assoc()){
          array_push($data, $row);
        }
        /* close statement */
        $stmt->close();
      }
      else{
        echo json_encode(array("error"=>1)); // failed database query
      }
    }
    echo json_encode(array("data"=>$data));
  }

  $conn->close();
?>