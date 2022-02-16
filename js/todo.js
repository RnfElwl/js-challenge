const toDoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

const colors = [
  "#FF6666",
  "#FFE5CC",
  "#FFFFCC",
  "#CCFFE5",
  "#CCFFFF",
  "#CCE5FF",
  "#CCCCFF",
  "#E5CCFF",
];
const TODOS_KEY = "todos";
let toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;

  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

const paintTodo = (newTodo) => {
  const li = document.createElement("li");

  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = newTodo.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.style.backgroundColor = newTodo.backgroundColor;
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
};

function hanleToDoSubmit(event) {
  event.preventDefault();
  const count = toDos.length;
  if (count > 7) {
    alert("many messege write");
    toDoInput.value = "";
    return;
  }
  const newTodo = toDoInput.value;

  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
  };

  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", hanleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
