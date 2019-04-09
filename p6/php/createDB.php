<?php
  require_once "connect_db.php";
  
  // create allnames table
  if (!$conn->query("SELECT 1 FROM allnames LIMIT 1")){ // check whether allnames table has been created already
    $createAllNames_stmt = "CREATE TABLE allnames(
        id INT NOT NULL AUTO_INCREMENT,
        name varchar(20) NOT NULL,
        gender char NOT NULL,
        count INT NOT NULL,
        PRIMARY KEY(id))";
    if (!$conn->query($createAllNames_stmt)){ 
      echo "<p>" . $conn->error . "<br>Creating Database failed.</p>";
    }
    
    // populate allnames table
    if(!$fh = fopen(__DIR__ . "/../info/yob2017.txt", "r")) // use __DIR__ to retrieve the current directory
      echo "open file failed";
    
    $insert_stmt = "INSERT INTO allnames(id, name, gender, count) VALUES";
    while($line = fgets($fh)){
      $nameinfo = explode(",", trim($line));
      $insert_stmt = $insert_stmt . "(NULL, '$nameinfo[0]', '$nameinfo[1]', $nameinfo[2]),";
    }
    $insert_stmt = substr($insert_stmt, 0, -1) . ";"; // last char cannot be comma
    if (!$conn->query($insert_stmt)){
      echo "<p>" . $conn->error . "<br>Populating allnames table failed.</p>";
    }
    else
      echo"<p>successful insertions into allnames</p>";
    
    fclose($fh);
  }
  
  // create votenames db
  if (!$conn->query("SELECT 1 FROM votenames LIMIT 1")){ // check whether votenames table has been created already
    $createVoteNames_stmt = "CREATE TABLE votenames(
        id INT NOT NULL AUTO_INCREMENT,
        name varchar(20) NOT NULL,
        gender char NOT NULL,
        count INT NOT NULL,
        PRIMARY KEY(id))";
    if (!$conn->query($createVoteNames_stmt)){ // create votenames table
      echo "<p>" . $conn->error . "<br>Creating Database failed.</p>";
    }
  
    // pre-populate votenames db
    if(!$fh_boy = fopen(__DIR__ . "/../info/yob2017_boy.txt", "r") or !$fh_girl = fopen(__DIR__ . "/../info/yob2017_girl.txt", "r"))
      echo "open file failed";
    
    $insert_stmt = "INSERT INTO votenames(id, name, gender, count) VALUES";
    $count = 10;
    while($line_boy = fgets($fh_boy) and $line_girl = fgets($fh_girl) and $count){
      $name_boy = explode(",", trim($line_boy));
      $name_girl = explode(",", trim($line_girl));
      $insert_stmt = $insert_stmt . "(NULL, '$name_boy[0]', '$name_boy[1]'," . random_int(5, 20) . ")," .
        "(NULL, '$name_girl[0]', '$name_girl[1]'," . random_int(5, 20) . "),";
      $count--;
    }
    $insert_stmt = substr($insert_stmt, 0, -1) . ";"; // last char cannot be comma
    if (!$conn->query($insert_stmt)){
      echo "<p>" . $conn->error . "<br>Populating votenames table failed.</p>";
    }
    else
      echo"<p>successful insertions into votenames</p>";
    
    fclose($fh_boy);
    fclose($fh_girl);
  }
  
  $conn->close();
?>