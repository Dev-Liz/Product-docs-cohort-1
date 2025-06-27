import comp from "C:/Users/PC/Desktop/OpenMadness/Product-docs-cohort-1/group2-docs/docs/.vuepress/.temp/pages/getting-started.html.vue"
const data = JSON.parse("{\"path\":\"/getting-started.html\",\"title\":\"Getting Started\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1750709260000,\"contributors\":[{\"name\":\"Dev-Liz\",\"username\":\"Dev-Liz\",\"email\":\"basseyelizabeth569@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Dev-Liz\"}],\"changelog\":[{\"hash\":\"fedec698b9d01ede44784b4054cf2f8dabe44849\",\"time\":1750709260000,\"email\":\"basseyelizabeth569@gmail.com\",\"author\":\"Dev-Liz\",\"message\":\"setup\"}]},\"filePathRelative\":\"getting-started.md\"}")
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
