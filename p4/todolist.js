$(function() {

  // SETUP
  let $list;
  let item = '';                                 // item is an empty string
  $list = $('ul');                               // Cache the unordered list
  $('li').find('#trashcan').hide();


  // ITEM COUNTER
  function updateCount() {                       // Create function to update counter
    var items = $('li[class!=complete]').length; // Number of items in list
    $('#unfinished').text(items);                   // Added into counter circle
  }
  updateCount();                                 // Call the function

  // Add new item to the list via input 
  $('#itemDescription').change(function(){
    item = $(this).val();
    $list.append('<li class=\"hot\"><span>' + item + '</span></li>'); // add item
    let newItem = $list.children().last();
    newItem.append('<i id=\'trashcan\' class="far fa-trash-alt"></i>'); // add trashcan icon
    newItem.find('#trashcan').hide(); // hide the trashcan icon initially
    newItem.prepend('<i id=\'uncheck\' class="far fa-circle"></i>'); // add circle icon for choosing
    $(this).val('');
    updateCount();
  })
  
  // Hover over item to show trashcan icon
  $list.on('mouseenter mouseleave', 'li', function(){
    $(this).find('#trashcan').toggle();
  })
  
  // Click trashcan icon to delete an item
  $list.on('click', '#trashcan', function(e){
    $(e.target).parent().remove();
    updateCount();
  })

  // Click uncheck icon to mark completion of an item
  $list.on('click', '#uncheck', function(e){
    let $target = $(e.target);
    $target.parent().toggleClass('hot complete');
    $target.toggleClass('fa-circle fa-check-circle');
    updateCount();
  })
  // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
//  $list.on('click', 'li', function() {
//    var $this = $(this);               // Cache the element in a jQuery object
//    var complete = $this.hasClass('complete');  // Is item complete
//
//    if (complete === true) {           // Check if item is complete
//      $this.animate({                  // If so, animate opacity + padding
//        opacity: 0.0,
//        paddingLeft: '+=180'
//      }, 500, 'swing', function() {    // Use callback when animation completes
//        $this.remove();                // Then completely remove this item
//      });
//    } else {                           // Otherwise indicate it is complete
//      item = $this.text();             // Get the text from the list item
//      $this.remove();                  // Remove the list item
//      $list                            // Add back to end of list as complete
//        .append('<li class=\"complete\">' + item + '</li>')
//        .hide().fadeIn(300);           // Hide it so it can be faded in
//      updateCount();                   // Update the counter
//    }                                  // End of else option
//  });                                  // End of event handler

});