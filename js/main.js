
// Initialize Firebase
var config = {
};
// The firebase variable is available here because the script
// tag that loads the firebase library is before the script
// tag that loads this javascript file
//
// We need to set firebase up with our configuration
firebase.initializeApp(config);

// This is the connection to the firebase database
var database = firebase.database();

// This is a reference to the /shopping data in our firebase database
var shoppingList = database.ref('/shopping');

// get a single HTML tag
// selector is a CSS style selector e.g. 'li.myclass'
// number is which of the tags to get from the list of them
function getTag(selector, number) {
  var elements = document.querySelectorAll(selector);
  var el = elements[number];
  return el;
}

// Get all the tags for a specific selector
// selector is a CSS style selector e.g. 'li.myclass'
function getAllTags(selector) {
  return document.querySelectorAll(selector);
}

// This will clear the shopping list ready to be redrawn
function clearList() {
  var htmlList = getTag("ul", 0);
  while(htmlList.firstChild) {
    htmlList.removeChild(htmlList.firstChild);
  }
}

// Takes the name of an item to add to the list
// Creates the new HTML element with the name given
// itemName is the string value with the new item's name
function addItemElementToList(itemName) {
  var htmlList = getTag("ul", 0);
  var newItemElement = document.createElement("li");
  newItemElement.innerText = itemName;
  newItemElement.className = "list__item";
  htmlList.appendChild(newItemElement);
}

// Get the input box element from the HTML and
// return the string value from it
function getItemNameFromInput(){
  var inputElement = getTag("input", 0);
  return inputElement.value;
}

// Clear the value of the input box
function clearInput() {
  var inputElement = getTag("input", 0);
  inputElement.value = '';
}

// Loop through all the items in the list and
// set a class to style them as 'completed'
function completeAllItems() {
  var listItemElements = getAllTags("li");
  for (var i = 0; i < listItemElements.length; i = i + 1) {
    var el = listItemElements[i];
    el.className = "list__item--completed";
  }
}

// This is the callback that gets triggered when a
// user clicks on the button
function buttonClickHandler(){
  var itemName = getItemNameFromInput();

  if (itemName.length > 0) {
    var newItem = {
      name: itemName,
    };
    clearInput();
  } else {
    alert("You didn't enter an item!");
  }
}

var button = getTag("button", 0);
button.addEventListener("click", buttonClickHandler)
