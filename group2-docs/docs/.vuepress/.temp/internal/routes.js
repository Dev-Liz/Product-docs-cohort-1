export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/changelog.html", { loader: () => import(/* webpackChunkName: "changelog.html" */"C:/Users/USER/Product-docs-cohort-1/group2-docs/docs/.vuepress/.temp/pages/changelog.html.js"), meta: {"title":"Changelog"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/USER/Product-docs-cohort-1/group2-docs/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/getting-started.html", { loader: () => import(/* webpackChunkName: "getting-started.html" */"C:/Users/USER/Product-docs-cohort-1/group2-docs/docs/.vuepress/.temp/pages/getting-started.html.js"), meta: {"title":"Getting Started"} }],
  ["/guides.html", { loader: () => import(/* webpackChunkName: "guides.html" */"C:/Users/USER/Product-docs-cohort-1/group2-docs/docs/.vuepress/.temp/pages/guides.html.js"), meta: {"title":"Guides"} }],
  ["/om-functions.html", { loader: () => import(/* webpackChunkName: "om-functions.html" */"C:/Users/USER/Product-docs-cohort-1/group2-docs/docs/.vuepress/.temp/pages/om-functions.html.js"), meta: {"title":"OM-Functions"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/USER/Product-docs-cohort-1/group2-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/resources.html", { loader: () => import(/* webpackChunkName: "resources.html" */"C:/Users/USER/Product-docs-cohort-1/group2-docs/docs/.vuepress/.temp/pages/resources.html.js"), meta: {"title":"Resources"} }],
  ["/tutorials.html", { loader: () => import(/* webpackChunkName: "tutorials.html" */"C:/Users/USER/Product-docs-cohort-1/group2-docs/docs/.vuepress/.temp/pages/tutorials.html.js"), meta: {"title":"Tutorials"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/USER/Product-docs-cohort-1/group2-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/CONTRIBUTING%20GUIDE.html", { loader: () => import(/* webpackChunkName: "CONTRIBUTING GUIDE.html" */"C:/Users/USER/Product-docs-cohort-1/group2-docs/docs/.vuepress/.temp/pages/CONTRIBUTING GUIDE.html.js"), meta: {"title":"Contributing to Open Madness 📘"} }],
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
