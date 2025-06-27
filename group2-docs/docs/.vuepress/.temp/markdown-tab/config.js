import { CodeTabs } from "C:/Users/hp/Documents/OM Docs/Product-docs-cohort-1/group2-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/hp/Documents/OM Docs/Product-docs-cohort-1/group2-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/hp/Documents/OM Docs/Product-docs-cohort-1/group2-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
