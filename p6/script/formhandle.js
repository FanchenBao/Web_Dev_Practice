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
      },
      
      success: function(response){
        console.log(response);
        $("#vote").html("Vote!");
        if (response.error){
          $("#display").html("<span>Something is wrong</span>");
        }
        
      }
      
    });
  }
  
  $.validator.addMethod( "spelling", function( value, element ) { // allowing only english letter and ' and !
      return this.optional( element ) || /^[a-zA-Z'!'\s]+$/i.test( value );
  }, "English letters, apostrophe, exclamation mark, and white space only please" );

});