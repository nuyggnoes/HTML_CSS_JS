const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");

function addToDo(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  console.log(newToDo);
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", addToDo);
