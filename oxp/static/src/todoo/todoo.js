/** @odoo-module **/

import { Component } from "@odoo/owl";
import { TodoList } from "./todo_list";

export class Todoo extends Component {
  static template = "oxp.Todoo";
  static components = { TodoList };
}
