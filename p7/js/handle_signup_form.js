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
        usernameField: "#username"
  };
  $('#password').pwstrength(options);
  
  
  // username and password input validate
  $("#signup_form").validate({
    rules:{
      username:{
        required: true,
        maxlength: 32, // maximum username length is 32, based on database requirement
      },
      password:{
        required: true,
        maxlength: 32,
        minlength: 8
      }
    },
    messages:{
      username: {
       required: "<div class='alert alert-warning'>Please enter a username</div>" 
      },
      password: {
       required: "<div class='alert alert-warning'>Please enter a password</div>" 
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
  
});