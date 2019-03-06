$(function() {

  // SETUP
  let $list;
  let itemStr = '';                                 // item is an empty string
  $list = $('ul');                               // Cache the unordered list

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
    newItem.append('<i id=\'trashcan\' class="far fa-trash-alt hide"></i>'); // add trashcan icon
    newItem.prepend('<i id=\'check\' class="far fa-circle"></i>'); // add circle icon for choosing
    $(this).val('');
    updateCount();
  });
  
  // Hover over item to show trashcan icon (a better practice should be wrapping these two in another div annd do the event listening on the div, instead of on these two elements individually)
  $list.on('mouseenter mouseleave', '.itemName', function(e){ // hover over item
    $(e.target).next().toggleClass('show hide');
  });
  $list.on('mouseenter mouseleave', '#trashcan', function(e){ // hover over trashcan itself
    $(e.target).toggleClass('show hide');
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
  
  
  // sort 'li' by item's name
  let sortByValue = array =>{
    array.sort(function(a, b){ // sort based on whether the item's name
      a = $(a).children('input').val();
      b = $(b).children('input').val();
      // compare. alphabetically ascending
      if(a > b) {
          return 1;
      } else if(a < b) {
          return -1;
      } else {
          return 0;
      }
    });
  };
  
  // handle sort action. It sorts based on item's name, and groups items based on whether they are complete or unfinished.
  $('.dropdown-menu').on('click', '#sort', function(){
    let unfinishedItems = $('.unfinished').parent().clone();
    let completeItems = $('.complete').parent().clone();
    sortByValue(unfinishedItems);
    sortByValue(completeItems);
    $list.children().remove();
    $list.append(unfinishedItems);
    $list.append(completeItems);
    updateCount();
  });
  
  // handle remove completed action.
  $('.dropdown-menu').on('click', '#removeComplete', function(){
    $('.complete').parent().remove();
    updateCount();
  });
  
  // handle remove unfinished action.
  $('.dropdown-menu').on('click', '#removeUnfinished', function(){
    $('.unfinished').parent().remove();
    updateCount();
  });
  
  // handle remove all action.
  $('.dropdown-menu').on('click', '#removeAll', function(){
    $('.item').remove();
    updateCount();
  });
  

});