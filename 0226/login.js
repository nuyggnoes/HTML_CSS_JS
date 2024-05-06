const loginForm = document.querySelector(".login-form");
const loginDiv = document.querySelector(".login");
const loginInput = loginForm.querySelector(".login-input");
const userBtn = document.querySelector(".nav-item-downloadBtn a");
const todoContainer = document.querySelector(".todo-container");
const greeting = document.querySelector(".greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
  greeting.innerText = `Hello! ${username}`;
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  //   localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  todoContainer.classList.remove(HIDDEN_CLASSNAME);
  userBtn.innerText = `Hello! ${username}`;
  paintGreeting(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
