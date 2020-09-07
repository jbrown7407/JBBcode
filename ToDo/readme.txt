/*
  // Make a container element for the list
  listContainer = document.createElement('div'),
  // Make the list
  listElement = document.createElement('ul'),
  // Set up a loop that goes through the items in listItems one at a time
  numberOfListItems = listData.length,
  listItem,
  i;

  // Add it to the page
  document.getElementsByTagName('body')[0].appendChild(listContainer);
  listContainer.appendChild(listElement);

  for (i = 0; i < numberOfListItems; ++i) {
      // create an item for each one
      listItem = document.createElement('li');

      // Add the item text
      listItem.innerHTML = listData[i];

      // Add listItem to the listElement
      listElement.appendChild(listItem);
  }
}
*/

/*
//ADD AN ITEM
//-input in form then select add
//-item pushed to end of array

//DELETE AN ITEM
// -Select X button on right side
// -Remove from todos array andSend to a "deleted array"

//PRIORITIZE AN ITEM
//-select priority from 1 to 5
//- default prioriity is "1"

//CHECKED 
//-Click on completion button
//use loop?
//if iscCompleted = false, no text-decoration.
//if id.isCompleted = true, put add "crossed" class to item in array
//document.querySelector("toDoList")
//-add to "Completed List"

//AND UNCHECKED
//-Click on completion button
//use loop?
//if iscCompleted = false, no text-decoration.
//if id.isCompleted = true, put add "crossed" class to item in array
//document.querySelector("toDoList")
*/