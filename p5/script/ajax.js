$('document').ready(function() { 
  /* handling form validation */
  $("#currency-form").validate({
    rules: {
      amount: {
          required: true
      },
    },
    messages: {
      amount:{
        required: ""
       },			
    },
    submitHandler: submitForm	
  });	   
  /* Handling login functionality */
  function submitForm() {		
    var data = $("#currency-form").serialize();				
    $.ajax({				
      type : 'POST',
      url  : 'convert.php',
      dataType:'json',
      data : data,
      beforeSend: function(){	
        $("#convert").html('<i class="fas fa-exchange-alt"></i> &nbsp; converting ...');
      },
      success : function(response){
        if(response.error){
          switch(response.error){
            case 1:
              $("#converted_rate").html('<span class="form-group has-error">Error: Please select different currency</span>');
              break;
            case 2:
              $("#converted_rate").html('<span class="form-group has-error">Error: Please enter a number</span>');
              break;
            case 3:
              $("#converted_rate").html('<span class="form-group has-error">Error: Please enter a positive number</span>');
              break;
            default:
              $("#converted_rate").html('<span class="form-group has-error">Internal error</span>');
          }
          $("#converted_amount").html("&nbsp;");
          $("#convert").html('Convert');
//          $("#converted_rate").show();
        } 
        else if(response.rate){									
          $("#converted_rate").html("Exchange Rate ("+response.to_Currency+") : "+response.rate);
//          $("#converted_rate").show();
          $("#converted_amount").html("Converted Amount ("+response.to_Currency+") : "+response.converted_amount);
//          $("#converted_amount").show();
          $("#convert").html('Convert');
        } 
        else {	
          $("#converted_rate").html("No Result");	
//          $("#converted_rate").show();
          $("#converted_amount").html("&nbsp;");
        }
      }
    });
    return false;
  }   
});