<?php
  error_reporting(E_ALL);  
  ini_set('display_startup_errors', 1);
  ini_set('display_errors',1);   
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <?php include('./php/header.php'); ?>
  </head>
  <body id="page-top" class="d-flex flex-column">
    <!--    create two databases, one for voting, the other for all names in 2017-->
    <?php include("./php/createDB.php"); ?>
    
    <div id="page-content">
      <?php include("./php/navigation.php")?>
    
      <header class="masthead">
        <div class="container">
          <div class="intro-text">
            <div class="intro-heading">Vote for your favorite baby names!</div>
            <!--    note that all fields that are to be submitted MUST have 'name' field-->
            <form method="post" id="babyname_form">
              <div class="row text-center">
                <div class="col-md-4">
                  <img src="./img/boy.png" alt="Boy"><input type="radio" name="gender" id="gender" value="M" checked="checked">
                  <img src="./img/girl.png" alt="Girl"><input type="radio" name="gender" id="gender" value="F">
                </div>
                <div class="col-md-4">
                  <input type="text" name="name" id="name" placeholder="Enter a name" autocomplete=off>
                  <div class="list-group" id="suggestion-box">
                  </div>
                </div>
                <div class="col-md-4">
                  <button class="btn btn-primary" type="submit" name="vote" id="vote">Vote!</button>
                </div>
              </div>

            </form>
            <div id="display"></div>
          </div>
        </div>
      </header>
    </div>

    <?php include('./php/footer.php'); ?>
    
    
    <!--  jQuery CDN-->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <!--  jQuery validation plug-in-->
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.0/dist/jquery.validate.min.js"></script>
    <!--    Bootstrap popper and js CDN-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.bundle.min.js"></script>
    
    <!--  custome JS scripts-->
    <script type="text/javascript" src="./script/formhandle.js"></script>
    <script type="text/javascript" src="./script/autosuggest.js"></script>
  </body>
</html>