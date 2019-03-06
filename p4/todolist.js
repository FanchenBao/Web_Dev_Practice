$(function() {

  // SETUP
  let $list;
  let itemStr = '';                                 // item is an empty string
  $list = $('ul');                               // Cache the unordered list
  $('li').find('#trashcan').hide();


  // ITEM COUNTER
  function updateCount() {                       // Create function to update counter
    $('#unfinished').text($('.itemName.unfinished').length); // count unfinished items
    $('#completed').text($('.itemName.complete').length); // count completed items
    $('#allItems').text($('li').length); // count all items
  }
  updateCount();                                

  // Add new item to the list via input 
  $('#itemDescription').change(function(){
    itemStr = $(this).val();
    $list.append('<li class=\'item\'><input type=\'text\' class=\'itemName unfinished\' value=\'' + itemStr + '\' disabled=\'true\'></li>'); // add item
    let newItem = $list.children().last();
    newItem.append('<i id=\'trashcan\' class="far fa-trash-alt"></i>'); // add trashcan icon
    newItem.find('#trashcan').hide(); // hide the trashcan icon initially
    newItem.prepend('<i id=\'check\' class="far fa-circle"></i>'); // add circle icon for choosing
    $(this).val('');
    updateCount();
  });
  
  // Hover over item to show trashcan icon
  $list.on('mouseenter mouseleave', '.itemName', function(e){
    $(e.target).next().toggle();
  });
  
  // Click trashcan icon to delete an item
  $list.on('click', '#trashcan', function(e){
    $(e.target).parent().remove();
    updateCount();
  });

  // Click check icon to toggle completion of an item
  $list.on('click', '#check', function(e){
    let $target = $(e.target);
    $target.next().toggleClass('unfinished complete');
    $target.toggleClass('fa-circle fa-check-circle');
    updateCount();
  });
  
  // Double click an item to modify its content. This is only possible if the item is unfinished. Once item becomes complete,
  // it cannot be modified unless it reverts back to unfinished
  $list.on('dblclick', '.unfinished', function(e){
    let $target = $(e.target);
    $target.prop('disabled', false); // enable modification to the input box
    $target.addClass('edit'); // add 'edit' class to input
    $target.focus(); // focus on the input box
    itemStr = $target.val();
  });
  
  // Revert input box back to default when it loses focus, used when an item is double-clicked, but no change is made
  $list.on('blur', '.unfinished.edit', function(e){
    $(e.target).prop('disabled', true);
    $(e.target).removeClass('edit');
  });
  
  // Revert input box back to default, used to modify item value
  $list.on('change', '.unfinished.edit', function(e){
    let $target = $(e.target);
    if ($target.val() === '') // user deletes item description, revert item back to original. Item can only be removed from trashcan icon
      $target.val(itemStr);
    $target.prop('disabled', true);
    $target.removeClass('edit');
  });
  
  // HANDLE DROPDOWN MENU ACTIONS
  let isGroup = false;
  let isSort = false;
  
  // handle mark all complete action
  $('.dropdown-menu').on('click', '#markAllComplete', function(){
    $('.item').each(function(){
      let $check = $(this).children('#check');
      let $itemName = $(this).children('.itemName');
      if($check.hasClass('fa-circle')){
        $check.toggleClass('fa-circle fa-check-circle');
      }
      if($itemName.hasClass('unfinished')){
        $itemName.toggleClass('unfinished complete');
      }
        
    });
    updateCount();
  });
  
  // handle mark all unfinished action
  $('.dropdown-menu').on('click', '#markAllUnfinished', function(){
    $('.item').each(function(){
      let $check = $(this).children('#check');
      let $itemName = $(this).children('.itemName');
      if($check.hasClass('fa-check-circle')){
        $check.toggleClass('fa-circle fa-check-circle');
      }
      if($itemName.hasClass('complete')){
        $itemName.toggleClass('unfinished complete');
      }
        
    });
    updateCount();
  });
  
  // handle group action. It groups the unfinished items together, and complete items together
  
  

});