<?php
  require_once "connect_db.php";
  
  if (!$conn->query("SELECT 1 FROM allnames LIMIT 1")){ // check whether allnames table has been created already
    $createAllNames_stmt = "CREATE TABLE allnames(
        id INT NOT NULL AUTO_INCREMENT,
        name varchar(20) NOT NULL,
        gender char NOT NULL,
        count INT NOT NULL,
        PRIMARY KEY(id))";
    if (!$conn->query($createAllNames_stmt)){ // create allnames table
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
    $insert_stmt = substr($insert_stmt, 0, -1) . ";"; // last char has to be semicolon, not comma
    if (!$conn->query($insert_stmt)){
      echo "<p>" . $conn->error . "<br>Populating table failed.</p>";
    }
    else
      echo"<p>successful insertions</p>";
    
    fclose($fh);
  }
  
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
  }
  
  $conn->close();
?>