/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Navbar } from "./navbar";

export class WebClient extends Component {
  static template = "oxp.WebClient";
  static components = { Navbar };
}
