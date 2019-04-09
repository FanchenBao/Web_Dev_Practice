$(function(){
  
  $("#name").on("keyup", function(){
    $.ajax({
      type: "POST",
      url: "../php/suggestName.php",
      data: {keyword : $(this).val(), gender: $("#gender:checked").val()}, // suggest also based on gender
      dataType: "json",
      beforeSend: function(){
        $("#name").css({"height":30, "width":200, 
                  "background-image": "url('../img/spinner.gif')",
                  "background-repeat": "no-repeat",
                  "background-attachment": "fixed",
                  "background-position": "30px 10px", 
                 });  // load a spinner. Must adjust input box size to accomodate the spinner
      },
      success: function(response){
//        console.log(response);
        $("#suggesstion-box").show();
        $("#name-list").empty();
        $("#name").css({"height":30, "width":200, "background-image":""}); // remove the background image
        if (response.error == 1){
          $("#suggesstion-box").append("<p>Suggestion failed due to error in querying database</p>");
        }
        else{
          for (let suggname of response.data)
            $("#name-list").append("<li>"+suggname.name+"</li>");
        }
        
      }
      
    });
  });

});