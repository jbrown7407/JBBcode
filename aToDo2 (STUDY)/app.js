// wait until web page loads
$(()=>{
  $('form').on('submit', addToDo);
}); // closing document on ready

// get the value and display it on the page
const addToDo = () => {
  // grab the element
  event.preventDefault()   //prevent REFRESH
  const $inputBox = $('#input-box');

  const todo = $inputBox.val();    // get the value store in a variable - just text not a jQuery element
  $inputBox.val('');        // change the value to an empty string to make it clear
  const $div = $('<div>')      // make a div
    .addClass('to-do-item')     // add the class of to-do-item
    .html('<h3>'+ todo + '</h3>');    // inside the div add an h3 with the text of our todo

  $('#to-do-list').append($div);       // APPEND the div

  const $button = $('<button>')      // add a COMPLETED button to our div item
    .text('Complete')
    .on('click', moveToDo)        // add an event listner
    .appendTo($div)              // append to div 
}

// move to do div to completed
const moveToDo = () => {

  const $toDoDiv = $(event.currentTarget).parent();     // get the parent of the button we clicked on

  $toDoDiv
    .removeClass('to-do-item')       // remove the class of to-do-item
    .addClass('done-item')            // add the class of done-item
    
    .appendTo($('#completed'))  //TO NEW LIST detach from current container and append to completed div (appendTo does both detach and append!)
   
    .children()       //target the children of this div
    .eq(1)          // access the button EQ1   EQ1 IS SECOND CHILD
    .text('REMOVE')      // change the text from complete to remove
    .on('click', removeToDo)       // add event listner to this button
}

const removeToDo = () => {        // remove the to do from the page entirely

  $(event.currentTarget).parent().remove();    // target the clicked button's parent and remove it
}
