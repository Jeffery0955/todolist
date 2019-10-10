// init
let list = document.querySelector("#my-todo");
let myDone = document.querySelector("#my-done");
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];
for (let todo of todos) {
  addItem(todo);
}

function addItem(text) {
  if (text !== "") {
    //非空項目才加入
    let newItem = document.createElement("li");
    newItem.innerHTML = `<label for="todo">${text}</label><i class="delete fa fa-trash"></i>`;
    list.appendChild(newItem);
  }
}
function cancelItem(event) {
  //刪除項目

  let li = event.target.parentElement;
  let newText = li.children[0].innerText;
  let newLi = document.createElement("li");
  if (event.target.classList.contains("delete")) {
    //按trash can 刪除項目
    li.remove();
  } else if (event.target.tagName === "LABEL" && this.id === "my-todo") {
    //按todo list文字劃掉刪除項目且加入done list
    newLi.innerHTML = `<label for="todo" class="done checked">${newText}</label><i class=" undo fas fa-undo"></i>`;
    myDone.append(newLi);
    li.remove();
  } else if (event.target.classList.contains("undo")) {
    //按done list還原項目至todo list
    newLi.innerHTML = `<label for="todo" class="done">${newText}</label><i class="delete fa fa-trash"></i>`;
    list.append(newLi);
    li.remove();
  }
}
// Create
const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function (event) {
  let inputValue = document.querySelector("#newTodo").value;
  addItem(inputValue);
});

// Delete and check
myDone.addEventListener("click", cancelItem);
list.addEventListener("click", cancelItem);
//按enter加入todo list項目
const newTodo = document.querySelector("#newTodo");
newTodo.addEventListener("keypress", function (event) {
  let text = newTodo.value;
  if (event.keyCode === 13 || event.keyCode === 108) {
    addItem(text);
    newTodo.value = "";
  }
});
