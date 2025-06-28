import { CodeTabs } from "/Users/roseakoth/Desktop/product-docs/TWMP-Product-docs-guides-2/group2-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/roseakoth/Desktop/product-docs/TWMP-Product-docs-guides-2/group2-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/roseakoth/Desktop/product-docs/TWMP-Product-docs-guides-2/group2-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
