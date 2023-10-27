/** @odoo-module **/

import { Component } from "@odoo/owl";
import { TodoItem } from "./todo_item";

export class TodoList extends Component {
  static template = "oxp.TodoList";
  static components = { TodoItem };

  setup() {
    this.todos = [
      { id: 2, description: "write tutorial", isCompleted: true },
      { id: 3, description: "buy milk", isCompleted: false },
    ];
  }
}
