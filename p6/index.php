<?php
  error_reporting(E_ALL);  
  ini_set('display_startup_errors', 1);
  ini_set('display_errors',1);   
?>

<html>
  <head>
    <?php include('./php/header.php'); ?>
  </head>
  <body>
    <!--    create two databases, one for voting, the other for all names in 2017-->
    <?php include("./php/createDB.php"); ?>
    
    <h1>Vote for your favorite baby names</h1>
    
    <!--    note that all fields that are to be submitted MUST have 'name' field-->
    <form method="post" id="babyname_form">
      <div id="input_box">
        <input type="text" name="name" id="name" placeholder="Enter a name" autocomplete=off>
        <div id="suggesstion-box">
          <ul id="name-list"></ul>
        </div>
      </div>
      <div id="options">
        <label>Boy</label><input type="radio" name="gender" id="gender" value="M" checked="checked">
        <br>
        <label>Girl</label><input type="radio" name="gender" id="gender" value="F">
      </div>
      <button class="button" type="submit" name="vote" id="vote">Vote!</button>
          
    </form>
    <div id="display"></div>

    <footer>
      <?php include('./php/footer.php'); ?>
    </footer>
    
    
    <!--  jQuery CDN-->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <!--  jQuery validation plug-in-->
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.0/dist/jquery.validate.min.js"></script>
    <!--  custome JS scripts-->
    <script type="text/javascript" src="./script/formhandle.js"></script>
    <script type="text/javascript" src="./script/autosuggest.js"></script>
  </body>
</html>