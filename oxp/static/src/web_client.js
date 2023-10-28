/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { Navbar } from "./navbar";
import { Todoo } from "./todoo/todoo";
import { Dashboard } from "./dashboard/dashboard";
import { Contacts } from "./contacts/contacts";

export class WebClient extends Component {
  static template = "oxp.WebClient";
  static components = { Navbar, Todoo, Dashboard, Contacts };

  setup() {
    this.apps = [
      { id: "todoo", name: "Todoo" },
      { id: "dashboard", name: "Dashboard" },
      { id: "contacts", name: "Contacts" },
    ];
    this.state = useState({
      currentApp: "todoo",
    });
  }

  selectApp(appId) {
    this.state.currentApp = appId;
  }
}
