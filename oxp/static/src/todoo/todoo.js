/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { TodoList } from "./todo_list";
import { useTodoStore } from "./todo_store";

export class Todoo extends Component {
  static template = "oxp.Todoo";
  static components = { TodoList };

  setup() {
    this.store = useTodoStore();
  }

  addNewList() {
    this.store.createList();
  }
}
