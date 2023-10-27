/** @odoo-module **/

import { mount, whenReady } from "@odoo/owl";
import { Page } from "./page";
import { templates } from "@web/core/assets";

// Mount the Page component when the document.body is ready
whenReady(() => {
  mount(Page, document.body, { templates, dev: true, name: "OXP Demo App" });
});
