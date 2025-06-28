import { GitContributors } from "/Users/roseakoth/Desktop/product-docs/TWMP-Product-docs-guides-2/group2-docs/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/roseakoth/Desktop/product-docs/TWMP-Product-docs-guides-2/group2-docs/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
