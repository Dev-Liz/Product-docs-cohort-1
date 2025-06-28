export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/roseakoth/Desktop/product-docs/TWMP-Product-docs-guides-2/group2-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/advanced-guide.html", { loader: () => import(/* webpackChunkName: "advanced-guide.html" */"/Users/roseakoth/Desktop/product-docs/TWMP-Product-docs-guides-2/group2-docs/docs/.vuepress/.temp/pages/advanced-guide.html.js"), meta: {"title":"Advanced Guide"} }],
  ["/changelog.html", { loader: () => import(/* webpackChunkName: "changelog.html" */"/Users/roseakoth/Desktop/product-docs/TWMP-Product-docs-guides-2/group2-docs/docs/.vuepress/.temp/pages/changelog.html.js"), meta: {"title":"Changelog"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/roseakoth/Desktop/product-docs/TWMP-Product-docs-guides-2/group2-docs/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/intermediate-guide.html", { loader: () => import(/* webpackChunkName: "intermediate-guide.html" */"/Users/roseakoth/Desktop/product-docs/TWMP-Product-docs-guides-2/group2-docs/docs/.vuepress/.temp/pages/intermediate-guide.html.js"), meta: {"title":"Intermediate Guide"} }],
  ["/tutorials.html", { loader: () => import(/* webpackChunkName: "tutorials.html" */"/Users/roseakoth/Desktop/product-docs/TWMP-Product-docs-guides-2/group2-docs/docs/.vuepress/.temp/pages/tutorials.html.js"), meta: {"title":"Tutorials"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/roseakoth/Desktop/product-docs/TWMP-Product-docs-guides-2/group2-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
