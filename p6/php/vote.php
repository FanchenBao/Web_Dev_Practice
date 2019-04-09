<?php
  require_once "connect_db.php";
  
  if (isset($_POST["vote"])){
    $votename = trim($_POST["name"]);
    $gender = $_POST["gender"];
    
    echo json_encode(array("votename"=>$votename, "gender"=>$gender));
  }


?>