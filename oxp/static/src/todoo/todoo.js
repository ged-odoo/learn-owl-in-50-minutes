/** @odoo-module **/

import { Component } from "@odoo/owl";
import { TodoList } from "./todo_list";
import { useTodoStore } from "./todo_store";
import { Layout } from "../layout";

export class Todoo extends Component {
  static template = "oxp.Todoo";
  static components = { TodoList, Layout };

  setup() {
    this.store = useTodoStore();
  }

  addNewList() {
    this.store.createList();
  }
}
