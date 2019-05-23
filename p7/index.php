<?php
  error_reporting(E_ALL);  
  ini_set('display_startup_errors', 1);
  ini_set('display_errors',1);   
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <?php include("./php/header.php"); ?>
    <title>PicShare - Wall</title>
  </head>
  <body>
    <!--  creat database for users-->
    <?php include("./php/createDB.php"); ?>
    
    
	<a href="./users/login.php" id="login_link">Log In</a>
    <h1 id="welcome_msg">Welcome <span id="username"></span>!</h1>
    <br>
    <a href="" id="logout_link">Log Out</a>
    <a href="./users/signup.php" id="signup_link">Sign Up</a>
    
    <h1>Pic Wall</h1>
    
    

	<!--jQuery CDN-->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <!--  jQuery validation plug-in-->
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.0/dist/jquery.validate.min.js"></script>
    <!--Popper CDN-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <!--bootstrap JS CDN-->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

	
    <!--	Custom JS scripts-->
	<script>
      $("#welcome_msg").toggle(); // hide welcome message until log in successful
      $("#logout_link").toggle();
      let url = window.location.href; // get current url
      if (url.includes("user=")){ // user successfully logged in
        let username = url.split('user=').pop();
        $("#welcome_msg").toggle();
        $("#username").text(username);
        $("#logout_link").toggle();
        
        $("#login_link").toggle();
        $("#signup_link").toggle();
      }
    </script>

  </body>
</html>