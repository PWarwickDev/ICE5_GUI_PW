// ADD NEW ITEM TO END OF LIST
var ul = document.querySelector('ul');
var li = document.createElement('li');
li.textContent = 'cream';
ul.appendChild(li);

// ADD NEW ITEM START OF LIST
var firstLi = document.createElement('li');
firstLi.textContent = 'kale';
ul.insertBefore(firstLi, ul.firstElementChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll('li');
listItems.forEach(function(item) {
  item.classList.add('cool');
});

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
if (heading) {
  var numberOfItems = listItems.length;
  var span = document.createElement('span');
  span.textContent = numberOfItems;
  heading.appendChild(span);
}


