/** @odoo-module */

import { useEnv, useState } from "@odoo/owl";

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

  getNumbers() {
    let completed = 0;
    let total = 0;
    for (let list of this.lists) {
      total += list.todos.length;
      for (let todo of list.todos) {
        if (todo.isCompleted) {
          completed++;
        }
      }
    }
    return { completed, total };
  }
}

export function useTodoStore() {
  const env = useEnv();
  return useState(env.todoStore);
}
