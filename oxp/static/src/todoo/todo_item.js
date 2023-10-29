/** @odoo-module */

import { Component } from "@odoo/owl";
import { useTodoStore } from "./todo_store";

export class TodoItem extends Component {
  static template = "oxp.TodoItem";
  static props = {
    todo: {
      type: Object,
      shape: {
        id: Number,
        listId: Number,
        description: String,
        isCompleted: Boolean,
      },
    },
  };

  setup() {
    this.store = useTodoStore();
  }

  onChange() {
    const todo = this.props.todo;
    this.store.toggleTodo(todo.listId, todo.id);
  }

  onRemove() {
    const todo = this.props.todo;
    this.store.removeTodo(todo.listId, todo.id);
  }
}
