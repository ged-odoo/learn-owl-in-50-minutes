/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { TodoList } from "./todo_list";

export class Todoo extends Component {
  static template = "oxp.Todoo";
  static components = { TodoList };

  setup() {
    this.nextId = 1;
    this.lists = useState([]);
  }

  addNewList() {
    const id = this.nextId++;
    this.lists.push({ id, name: `List ${id}` });
  }
}
