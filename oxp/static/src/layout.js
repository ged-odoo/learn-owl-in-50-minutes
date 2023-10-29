/** @odoo-module */

import { Component } from "@odoo/owl";

export class Layout extends Component {
  static template = "oxp.Layout";
  static props = {
    slots: Object,
    contentClass: { type: String, optional: true },
  };
}
