document.querySelector(".add-todo").addEventListener("click", function () {
  var input = document.querySelector("todo-input");
  var todoText = input.value.trim();
  console.log(input);
  console.log(todoText);
  if (todoText !== "") {
    var li = document.createElement("li");
    li.textContent = todoText;
    document.querySelector(".todo-list").appendChild(li);
    input.value = "";
  }
});
