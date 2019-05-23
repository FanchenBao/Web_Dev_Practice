$(function(){
  $("#username").val("john");
  $("#password").val("12345");
  
  $("#login_form").validate({
    rules:{
      username:{
        required: true,
        maxlength: 32, // maximum username length is 32, based on database requirement
      },
      password: "required"
    },
    messages:{
      username: {
       required: "<div class='alert alert-warning'>Please enter a username</div>" 
      },
      password: {
       required: "<div class='alert alert-warning'>Please enter a password</div>" 
      }
    },
    submitHandler: submitLogin
  });
  
  function submitLogin(){
    let data = $("#login_form").serialize();
    $.ajax({
      type: "POST",
      url: "../users/authenticate.php",
      dataType: "json",
      data: data,
      beforeSend: function(){
        $("#login").html("logging in...");
      },
      
      success: function(response){
//        console.log(response);
        $("#login").html("Login");
        if (response.error == 1)
          $("#login_result").text("Username or Password error");
        else{
          $(location).attr('href', "../index.php?user=" + response.username); // redirect to index page with attached username information
        }
      }
      
    });
  }
  
});