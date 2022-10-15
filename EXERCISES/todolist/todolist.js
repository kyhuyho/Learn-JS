const form = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
let todos =
  localStorage.length > 0 ? JSON.parse(localStorage.getItem("todoList")) : [];
if (Array.isArray(todos) && todos.length > 0) {
  todos.forEach((item) => createTodItem(item));
}
function createTodItem(title) {
  const template = `<div class="todo-item">
  <span class="todo-text">${title}</span>
  <i class="fa fa-trash todo-remove"></i>
</div>`;
  todoList.insertAdjacentHTML("beforeend", template);
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const todoVal = this.elements["todo"].value;
  createTodItem(todoVal);
  todos.push(todoVal);
  localStorage.length > 0 &&
    localStorage.setItem("todoList", JSON.stringify(todos));
  this.elements["todo"].value = "";
});
todoList.addEventListener("click", function (e) {
  if (e.target.matches(".todo-remove")) {
    const todo = e.target.parentNode;
    todo.parentNode.removeChild(todo);
    const todoText = e.target.previousElementSibling.textContent;
    const newTodo = todos.filter((item) => item !== todoText);
    localStorage.setItem("todoList", JSON.stringify(newTodo));
  }
});
