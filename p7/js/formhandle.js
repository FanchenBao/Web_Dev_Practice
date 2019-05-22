$(function(){
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
    submitHandler: submitForm
  });
  
  function submitForm(){
    let data = $("#login_form").serialize();
    $.ajax({
      type: "POST",
      url: "../php/login.php",
      dataType: "json",
      data: data,
      beforeSend: function(){
        $("#login").html("logging in...");
        console.log("i a here");
      },
      
      success: function(response){
//        console.log(response);
//        $("#vote").html("Vote!");
//        $("#vote-result").show();
//        if (response.error){
//          $("#vote-result").addClass("alert-danger");
//          if (response.error == 1)
//            $("#vote-result").html("Database insertion error!");
//          else if (response.error == 2)
//            $("#vote-result").html("Database query error!");
//        }
//        else{
//          $("#suggesstion-box").hide();
//          
//          // show successful voting message
//          $("#vote-result").addClass("alert-success");
//          $("#vote-result").html("<i class='far fa-grin-hearts'></i> Your vote has been counted! Thanks!");
//          
//          // display rankings
//          $(".table").show();
//          let rank = 1;
//          for(let row of response.girl){
//            $("#display-girl").append("<tr><td>" + rank + "</td>" +
//                                      "<td>" + row.name + "</td>" + 
//                                      "<td>" + row.count + "</td></tr>");
//            rank+=1;
//          }
//          rank = 1;
//          for(let row of response.boy){
//            $("#display-boy").append("<tr><td>" + rank + "</td>" +
//                                      "<td>" + row.name + "</td>" + 
//                                      "<td>" + row.count + "</td></tr>");
//            rank+=1;
//          }
//          
//        }
        
      }
      
    });
  }
  
  $.validator.addMethod( "spelling", function( value, element ) { // allowing only english letter and ' and !
      return this.optional( element ) || /^[a-zA-Z'!'\s]+$/i.test( value );
  }, "<div class='alert alert-warning'>English letters, apostrophe, exclamation mark, and white space only please</div>" );
  
  
});