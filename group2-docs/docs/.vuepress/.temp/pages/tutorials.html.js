import comp from "C:/Users/DDR3/Desktop/Product-docs-cohort-1/group2-docs/docs/.vuepress/.temp/pages/tutorials.html.vue"
const data = JSON.parse("{\"path\":\"/tutorials.html\",\"title\":\"Tutorials\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Fundamentals\",\"slug\":\"fundamentals\",\"link\":\"#fundamentals\",\"children\":[{\"level\":3,\"title\":\"Arrays\",\"slug\":\"arrays\",\"link\":\"#arrays\",\"children\":[]},{\"level\":3,\"title\":\"Arrays\",\"slug\":\"arrays-1\",\"link\":\"#arrays-1\",\"children\":[]},{\"level\":3,\"title\":\"Arrays\",\"slug\":\"arrays-2\",\"link\":\"#arrays-2\",\"children\":[]}]},{\"level\":2,\"title\":\"Advanced\",\"slug\":\"advanced\",\"link\":\"#advanced\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"tutorials.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
