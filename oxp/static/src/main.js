/** @odoo-module **/

import { mount, whenReady } from "@odoo/owl";
import { WebClient } from "./webclient/web_client";
import { templates } from "@web/core/assets";

// Mount the WebClient component when the document.body is ready
whenReady(() => {
  mount(WebClient, document.body, {
    templates,
    dev: true,
    name: "OXP Demo App: Web Client",
  });
});
