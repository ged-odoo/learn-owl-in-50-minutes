/** @odoo-module */

import { Component, useState } from "@odoo/owl";

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
    this.store = useState(this.env.todoStore);
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
