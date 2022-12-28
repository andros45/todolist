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

let todoList = new TodoList();

let todo = new Todo();
todo.title = "Laundry";
todo.content = "On monday at 15:00 I have to do laundry before parents arrive";

todoList.addTodoItem(todo);

todoList.printTitles();