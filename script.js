const inputArea = document.querySelector('.textarea');
const buttonToAdd = document.querySelector('.buttoninput');
const todoListContainer = document.querySelector('.todolist');

function clickButton(e) {
  e.preventDefault();
  addTodo();
}

function addTodo() {
  const currentTodoItem = document.createElement('div');
  currentTodoItem.classList.add('item-all');

  const item = document.createElement('p');
  item.classList.add('item');
  item.innerText = inputArea.value;
  currentTodoItem.appendChild(item);

  if (inputArea.value === '') return;

  const doneBtn = document.createElement('button');
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  doneBtn.classList.add('check-button');
  currentTodoItem.appendChild(doneBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.classList.add('trash-button');
  currentTodoItem.appendChild(deleteBtn);

  todoListContainer.appendChild(currentTodoItem);
  inputArea.value = '';
}

// checking and delete todoList
function deleteAndCheckItemHandler(e) {
  const item = e.target;

  // check
  if (item.classList[0] === 'check-button') {
    const todolist = item.parentElement;
    todolist.classList.toggle('checklist');
  }

  // delete
  if (item.classList[0] === 'trash-button') {
    const todolist = item.parentElement;
    todolist.remove();
  }
}

buttonToAdd.addEventListener('click', clickButton);
todoListContainer.addEventListener('click', deleteAndCheckItemHandler);
