/** @odoo-module **/

import { Component } from "@odoo/owl";
import { useTodoStore } from "../todoo/todo_store";

export class Navbar extends Component {
  static template = "oxp.Navbar";
  static props = {
    currentApp: String,
    apps: Array,
    selectApp: Function,
  };

  setup() {
    this.todoStore = useTodoStore();
  }
}
