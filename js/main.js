// User clicks on the add buttonClick
// If there is any text inside the item field, add that text to the todo list

function buttonClick() {
  var value = document.getElementById('item').value;

  if (value) {
    addItemTodo(value);
    document.getElementById('item').value = '';
  }
}

function completeItem() {
  var parent = this.parentNode.parentNode;

  parent.style.backgroundColor = "lightgreen";
  parent.style.color = "#333";
  this.innerText = "";
}

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  console.log(item);

  item.style.opacity = "0";
  item.style.transform = "scale(0.5)"

  setTimeout(function(){parent.removeChild(item);}, 300);
}

// Adds a new item to the todo list
function addItemTodo(text) {
  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('section-todo__list--buttons');

  var complete = document.createElement('button');
  complete.classList.add('section-todo__list--buttons---complete');
  complete.innerText = "OK";

  // Add click event for finishing a task
  complete.addEventListener('click', completeItem);

  var remove = document.createElement('button');
  remove.classList.add('section-todo__list--buttons---remove');
  remove.innerText = "X";

  // Add click event for removing
  remove.addEventListener('click', removeItem);

  buttons.appendChild(complete);
  buttons.appendChild(remove);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
}

document.getElementById('add').addEventListener('click', buttonClick);
