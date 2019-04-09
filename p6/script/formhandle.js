$(function(){
  $("#babyname_form").validate({
    rules:{
      name:{
        required: true,
        maxlength: 20, // maximum name length is 20, based on database requirement
        spelling: true
      },
      gender: "required"
    },
    messages:{
      name: {
       required: "Please enter a name" 
      }
    },
    submitHandler: submitForm
  });
  
  function submitForm(){
    let data = $("#babyname_form").serialize();
    $.ajax({
      type: "POST",
      url: "../php/vote.php",
      dataType: "json",
      data: data,
      beforeSend: function(){
        $("#vote").html("voting...");
        $("#display").empty();
      },
      
      success: function(response){
//        console.log(response);
        $("#vote").html("Vote!");
        if (response.error){
          if (response.error == 1)
            $("#display").html("<span>Database insertion error!</span>");
          else if (response.error == 2)
            $("#display").html("<span>Database query error!</span>");
        }
        else{
          $("#display").append("<p>Thanks! Your vote has been counted.</p>");
          $("#display").append("<p>Girls<\p>");
          for(let row of response.girl){
            $("#display").append("<p>" + row.name + " " + row.count + "</p>");
          }
          $("#display").append("<p>Boys<\p>");
          for(let row of response.boy){
            $("#display").append("<p>" + row.name + " " + row.count + "</p>");
          }
          
        }
        
      }
      
    });
  }
  
  $.validator.addMethod( "spelling", function( value, element ) { // allowing only english letter and ' and !
      return this.optional( element ) || /^[a-zA-Z'!'\s]+$/i.test( value );
  }, "English letters, apostrophe, exclamation mark, and white space only please" );

});