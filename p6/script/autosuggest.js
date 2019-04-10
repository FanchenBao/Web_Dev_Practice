$(function(){
  
  $("#name").on("keyup", function(){
    $.ajax({
      type: "POST",
      url: "../php/suggestName.php",
      data: {keyword : $(this).val(), gender: $("#gender:checked").val()}, // suggest also based on gender
      dataType: "json",
      beforeSend: function(){
        $("#name").css({ 
                  "background-image": "url('../img/spinner.gif')",
                  "background-repeat": "no-repeat",
                  "background-attachment": "fixed",
                  "background-position": "30px 10px", 
                 });  // load a spinner. Must adjust input box size to accomodate the spinner
      },
      success: function(response){
//        console.log(response);
        $("#vote-result").hide();
        $("#suggestion-box").show();
        $("#suggestion-box").empty();
        $("#name").css({"background-image":""}); // remove the background image
        if (response.error == 1){
          $("#suggestion-box").append("<p>Suggestion failed due to error in querying database</p>");
        }
        else{
          for (let suggname of response.data)
            $("#suggestion-box").append("<button type='button' class='list-group-item list-group-item-action list-group-item-light suggname'>"+suggname.name+"</button>");
        }
        
      }
      
    });
  });
  
  $("body").on("click", function(){ // hide auto suggestion when user click anywhere on the page
      $("#suggestion-box").hide();
    });
  
  $("#suggestion-box").on("click", ".suggname", function(e){ // click auto suggestion item to get value transfered to input box.
    $("#name").val($(e.target).text());
    $("#suggestion-box").hide();
  });

});