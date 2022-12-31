let todoList = new TodoList();

let todo = new TodoItem();
todo.title = "Tvätta";
todo.content = "På måndag kl 15:00 måsta jag tvätta kläder i tvättstugan";
todoList.addTodoItem(todo);

todo = new TodoItem();
todo.title = "Putsa fönster";
todo.content = "På tisdag kl 10.30 måsta jag putsa alla fönster på övervåningen";
todoList.addTodoItem(todo);

todo = new TodoItem();
todo.title = "Dammsuga";
todo.content = "På fredag morgon måste jag dammsuga alla rum i huset";
todoList.addTodoItem(todo);

todo = new TodoItem();
todo.title = "Stryka";
todo.content = "På söndag eftermiddag måste jag stryka alla skjortor";
todoList.addTodoItem(todo);

todoList.printTitles();

for (let s = 0; s < todoList.todos.length; s++) {
  // Skriv ut alla todos på HTML-sidan (DOM)
  let heading = document.createElement("p");
  let headingText = document.createTextNode('Att göra: ' + todoList.todos[s].title);
  heading.appendChild(headingText);
  document.body.appendChild(heading);

  heading = document.createElement("p");
  headingText = document.createTextNode('Beskrivning: ' + todoList.todos[s].content);
  heading.appendChild(headingText);
  document.body.appendChild(heading);
};