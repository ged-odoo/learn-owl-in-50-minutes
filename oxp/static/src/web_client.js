/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Navbar } from "./navbar";
import { Todoo } from "./todoo/todoo";

export class WebClient extends Component {
  static template = "oxp.WebClient";
  static components = { Navbar, Todoo };
}
