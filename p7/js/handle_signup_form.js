$(function(){
//  $("#username").val("");
//  $("#password").val("");
  
  // password strength
  "use strict";
  var options = {};
  options.ui = {
      container: "#password_container",
      viewports: {
          progress: ".pwstrength_viewport_progress"
      },
      showVerdictsInsideProgressBar: true
  };
  options.common = {
        debug: true,
        usernameField: "#username" // set password strength the lowest if it is identical to username
  };
  $('#password').pwstrength(options);
  
  
  
  // username and password input validate, excluding check for username uniqueness (that is achieved via the ajax call on keyup event in the next code block)
  $("#signup_form").validate({
    rules:{
      username:{
        required: true,
        maxlength: 32, // maximum username length is 32, based on database requirement
      },
      password:{
        required: true,
      },
      password_repeat:{
        required: true,
      }
    },
    messages:{
      username: {
       required: "<div class='alert alert-warning'>Please enter a username</div>" 
      },
      password: {
        required: "<div class='alert alert-warning'>Please enter a new password</div>"
      },
      password_repeat: {
       required: "<div class='alert alert-warning'>Please repeat the password</div>" 
      }
    },
    submitHandler: submitSignup
  });
  
  function submitSignup(){
    let data = $("#signup_form").serialize();
    $.ajax({
      type: "POST",
      url: "../users/adduser.php",
      dataType: "json",
      data: data,
      beforeSend: function(){
        $("#signup").html("signing up...");
      },
      
      success: function(response){
        console.log(response);
//        $("#login").html("Login");
//        if (response.error == 1)
//          $("#login_result").text("Username or Password error");
//        else{
//          $(location).attr('href', "../index.php?user=" + response.username);
//        }
      }
      
    });
  }
  
  // detect whether the username has been used already
  $("#username").on("keyup", function(){
    $.ajax({
        type: "POST",
        url: "../users/checkExistingUsername.php",
        data: {username : $(this).val()}, // check username that has just been put in.
        dataType: "json",
//        beforeSend: function(){console.log($("#username").val());}, // Note: I initially used console.log($(this).val()), but there was error. Apparently, $(this) doesn't work anymore inside this function because it loses scope (it belongs to the event handler function, not the one attached to beforeSend).
        success: function(response){
//          console.log(response);
          if (response.error) // if username is unique, hide error message
            $("#unique-error").hide();
          else // otherwise show error message
            $("#unique-error").show();
      }
      
    });
  });
  
});