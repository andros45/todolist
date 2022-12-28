class TodoItem {
  constructor() {
    this.title = "Placeholder title...";
    this.content = "Placeholder content...";
  }
}

class TodoList {
  constructor() {
    this.todos = []; // empty array
  }

  addTodoItem(todoItem) {
    this.todos.push(todoItem);
  }

  printTitles() {
    console.log(`There are ${this.todos.length} entries in the todo list`);
    this.todos.forEach(todo => console.log(todo.title));
  }

  getTodosByTitle(titleQuery) {
    // To-be implemented
  }
}
