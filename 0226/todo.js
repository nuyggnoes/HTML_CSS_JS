const todoInput = document.querySelector(".todo-form input");
const todoBtn = document.querySelector(".todo-form button");
const todoList = document.querySelector(".todo-list");

function addTodo() {
  todoBtn.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerText = todoInput.value;
    todoList.appendChild(li);
    todoInput.value = "";
  });
}
addTodo();
