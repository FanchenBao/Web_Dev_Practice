$(function(){
  let rawObj;
  let $from_list = $('#from_currency');
  let $to_list = $('#to_currency');
  let currencyObj = {}; // create a new object with key being currencyName and value being currency ID
  let currencyArray = []; // record all currency name for sorting purpose
  
  // get full currency list using API
  $.ajax({				
    url  : 'currency_list.php',
    dataType:'json',
    success : function(response){
      rawObj = response.results;
      for (let key in rawObj){
        currencyObj[rawObj[key].currencyName] = key;
        currencyArray.push(rawObj[key].currencyName);
      }
      currencyArray.sort();

      for (let currencyName of currencyArray){ // populate $from_list
        if (currencyName === 'United States Dollar')
          $from_list.append('<option value="' + currencyObj[currencyName] + '" selected="1">' + currencyName + '</option>');
        else
          $from_list.append('<option value="' + currencyObj[currencyName] + '">' + currencyName + '</option>');
      }
      for (let currencyName of currencyArray){ // populate $to_list
        if(currencyName === 'Chinese Yuan')
          $to_list.append('<option value="' + currencyObj[currencyName] + '" selected="1">' + currencyName + '</option>');
        else
          $to_list.append('<option value="' + currencyObj[currencyName] + '">' + currencyName + '</option>');
      }
    }
  });
  
  // functionality of the switch button
  $('#switch').on('click', function(){
    let temp = $('#from_currency').val();
    $('#from_currency').val($('#to_currency').val());
    $('#to_currency').val(temp);
    $('form').submit(); // after switching the currencies, submit form again.
  });
  
});