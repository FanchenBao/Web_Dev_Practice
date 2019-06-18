<?php
  error_reporting(E_ALL);  
  ini_set('display_startup_errors', 1);
  ini_set('display_errors',1);   
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <?php include("../php/header.php"); ?>
    <title>PicShare - Sign Up</title>
  </head>
  <body>
    <div id="signup_section">
      <form method="post" id="signup_form">
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr>

          <div>
            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" id="username">
<!--            specifically include unique username error message here, because I cannot use validator to achieve this goal. This message appears when unique username fails, and hides otherwise-->
            <label id="unique-error" for="username" style="display:none">
              <div class='alert alert-danger'>Username already exists</div>
            </label>
          </div>

          <div id="password_container">
            <label for="password"><b>New Password</b></label>
            <input type="password" placeholder="Enter New Password" name="password" id="password">
            <div class="pwstrength_viewport_progress"></div>
          </div>

          <div>
            <label for="password_repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="password_repeat" id="password_repeat">
          </div>
<!--
          <label>
            <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
          </label>
-->

          <div>
            <button type="submit" class="btn-primary" id="signup" name="signup">Sign Up</button>
            <button type="button" class="btn-secondary" id="cancel">Cancel</button>
          </div>
        </div>
      </form>
    </div>
    
    
	<!--jQuery CDN-->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <!--  jQuery validation plug-in-->
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.0/dist/jquery.validate.min.js"></script>
    <!--Popper CDN-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <!--bootstrap JS CDN-->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

	
    <!--	Custom JS scripts-->
    <script type="text/javascript" src="../js/pwstrength-bootstrap.js"></script>
    <script type="text/javascript" src="../js/handle_signup_form.js"></script>

  </body>
</html>