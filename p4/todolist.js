$(function() {

  // SETUP
  let $list;
  let item = '';                                 // item is an empty string
  $list = $('ul');                               // Cache the unordered list
  $('li').find('#trashcan').hide();


  // ITEM COUNTER
  function updateCount() {                       // Create function to update counter
    $('#unfinished').text($('li[class!=complete]').length); // count unfinished items
    $('#completed').text($('li[class=complete]').length); // count completed items
    $('#allItems').text($('li').length); // count all items
  }
  updateCount();                                

  // Add new item to the list via input 
  $('#itemDescription').change(function(){
    item = $(this).val();
    $list.append('<li class=\"hot\"><span>' + item + '</span></li>'); // add item
    let newItem = $list.children().last();
    newItem.append('<i id=\'trashcan\' class="far fa-trash-alt"></i>'); // add trashcan icon
    newItem.find('#trashcan').hide(); // hide the trashcan icon initially
    newItem.prepend('<i id=\'check\' class="far fa-circle"></i>'); // add circle icon for choosing
    $(this).val('');
    updateCount();
  });
  
  // Hover over item to show trashcan icon
  $list.on('mouseenter mouseleave', 'li', function(){
    $(this).find('#trashcan').toggle();
  });
  
  // Click trashcan icon to delete an item
  $list.on('click', '#trashcan', function(e){
    $(e.target).parent().remove();
    updateCount();
  });

  // Click uncheck icon to mark completion of an item
  $list.on('click', '#check', function(e){
    let $target = $(e.target);
    $target.parent().toggleClass('hot complete');
    $target.toggleClass('fa-circle fa-check-circle');
    updateCount();
  });
  

});