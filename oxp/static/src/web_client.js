/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Navbar } from "./navbar";
import { TodoList } from "./todoo/todo_list";

export class WebClient extends Component {
  static template = "oxp.WebClient";
  static components = { Navbar, TodoList };
}
