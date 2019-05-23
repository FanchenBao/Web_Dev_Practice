<?php
  error_reporting(E_ALL);  
  ini_set('display_startup_errors', 1);
  ini_set('display_errors',1);   
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <?php include("./php/header.php"); ?>
  </head>
  <body>
  
    <!--  creat database for users-->
    <?php include("./php/createDB.php"); ?>
	
    <h1>Welcome to PicShare</h1>
    <h2>Log In</h2>
    <div id="login_section">
      <form method="post" id="login_form">
        <div class="container">
          <div>
            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" id="username">
          </div>
          <div>
            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" id="password">
          </div>
          <div>
            <button class="btn btn-primary" type="submit" id="login" name="login">Login</button>
          </div>
        </div>

        <div class="container" style="background-color:#f1f1f1">
          <button type="button" class="cancel">Cancel</button>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>
    <h2>Don't have an account? Sign up!</h2>
    <p id="login_result"></p>

	<!--jQuery CDN-->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <!--  jQuery validation plug-in-->
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.0/dist/jquery.validate.min.js"></script>
    <!--bootstrap JS CDN-->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <!--Popper CDN-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

	
    <!--	Custom JS scripts-->
	<script src="functions.js"></script>
    <script type="text/javascript" src="./js/handle_login_form.js"></script>

  </body>
</html>