/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { TodoList } from "./todo_list";

export class Todoo extends Component {
  static template = "oxp.Todoo";
  static components = { TodoList };

  setup() {
    this.store = useState(this.env.todoStore);
  }

  addNewList() {
    this.store.createList();
  }
}
