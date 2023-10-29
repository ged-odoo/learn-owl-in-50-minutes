/** @odoo-module */

export class TodoStore {
  static nextId = 1;

  constructor() {
    this.lists = [];
  }

  createList() {
    const id = TodoStore.nextId++;
    this.lists.push({ id, name: `List ${id}`, todos: [] });
  }

  addTodo(listId, description) {
    const list = this.lists.find((l) => l.id === listId);
    const todo = {
      id: TodoStore.nextId++,
      listId,
      description,
      isCompleted: false,
    };
    list.todos.push(todo);
  }

  toggleTodo(listId, todoId) {
    const list = this.lists.find((l) => l.id === listId);
    const todo = list.todos.find((t) => t.id === todoId);
    todo.isCompleted = !todo.isCompleted;
  }

  removeTodo(listId, todoId) {
    const list = this.lists.find((l) => l.id === listId);
    const index = list.todos.findIndex((t) => t.id === todoId);
    list.todos.splice(index, 1);
  }
}
