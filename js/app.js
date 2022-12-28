const todoList = document.querySelector(".todo-container");

function createTodoListItem(todo) {
  let li = document.createElement("li");
  li.textContent = `
  <h3>${todo.title}</h3>
  <p>${todo.content}</p>
  `;

  return li;
}

todoList.todos.forEach(todo => {
  let li = createTodoListItem(todo);
  todoContainer.append(li);
});