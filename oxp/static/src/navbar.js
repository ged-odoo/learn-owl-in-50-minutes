/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Navbar extends Component {
  static template = "oxp.Navbar";
  static props = {
    currentApp: String,
  };
}
