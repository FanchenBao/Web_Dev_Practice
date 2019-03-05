$(function() {

  // SETUP
  let $list;
  let item = '';                                 // item is an empty string
  $list = $('ul');                               // Cache the unordered list
  $('li').find('#trashcan').hide();


  // ITEM COUNTER
  function updateCount() {                       // Create function to update counter
    $('#unfinished').text($('input[class=hot]').length); // count unfinished items
    $('#completed').text($('input[class=complete]').length); // count completed items
    $('#allItems').text($('li').length); // count all items
  }
  updateCount();                                

  // Add new item to the list via input 
  $('#itemDescription').change(function(){
    item = $(this).val();
    $list.append('<li class=\'item\'><input type=\'text\' class=\'hot\' value=\'' + item + '\' disabled=\'true\'></li>'); // add item
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

  // Click check icon to toggle completion of an item
  $list.on('click', '#check', function(e){
    let $target = $(e.target);
    $target.next().toggleClass('hot complete');
    $target.toggleClass('fa-circle fa-check-circle');
    updateCount();
  });
  
  // Double click an item to modify its content. This is only possible if the item is hot. Once item becomes complete,
  // it cannot be modified unless it reverts back to hot
  $list.on('dblclick', '.hot', function(e){
    $(e.target).prop('disabled', false); // enable modification to the input box
    $(e.target).addClass('edit'); // add 'edit' class to input
    $(e.target).focus(); // focus on the input box
  });
  
  // Revert input box back to default when it loses focus, used when an item is double-clicked, but no change is made
  $list.on('blur', '.hot.edit', function(e){
    $(e.target).prop('disabled', true);
    $(e.target).removeClass('edit');
  });
  
  // Revert input box back to default, used to modify item value
  $list.on('change', '.hot.edit', function(e){
    $(e.target).prop('disabled', true);
    $(e.target).removeClass('edit');
  });
  

});