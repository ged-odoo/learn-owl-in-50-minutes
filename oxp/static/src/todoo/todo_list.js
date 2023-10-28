/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { useAutofocus } from "../utils";
import { TodoItem } from "./todo_item";

export class TodoList extends Component {
  static template = "oxp.TodoList";
  static components = { TodoItem };
  static props = { name: String };

  setup() {
    this.nextId = 4;
    this.todos = useState([]);
    useAutofocus("input");
  }

  addTodo(ev) {
    if (ev.keyCode === 13 && ev.target.value != "") {
      this.todos.push({
        id: this.nextId++,
        description: ev.target.value,
        isCompleted: false,
      });
      ev.target.value = "";
    }
  }

  toggleTodo(todoId) {
    const todo = this.todos.find((todo) => todo.id === todoId);
    if (todo) {
      todo.isCompleted = !todo.isCompleted;
    }
  }

  removeTodo(todoId) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex >= 0) {
      this.todos.splice(todoIndex, 1);
    }
  }
}
