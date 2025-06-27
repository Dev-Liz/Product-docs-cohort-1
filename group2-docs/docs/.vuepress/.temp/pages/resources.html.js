import comp from "C:/Users/PC/Desktop/OpenMadness/Product-docs-cohort-1/group2-docs/docs/.vuepress/.temp/pages/resources.html.vue"
const data = JSON.parse("{\"path\":\"/resources.html\",\"title\":\"Resources\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"Resources\",\"description\":\"This page serves as a resource for users to troubleshoot, understand, and effectively use the OpenMadness library\"},\"headers\":[{\"level\":2,\"title\":\"FAQ\",\"slug\":\"faq\",\"link\":\"#faq\",\"children\":[]},{\"level\":2,\"title\":\"Glossary\",\"slug\":\"glossary\",\"link\":\"#glossary\",\"children\":[]}],\"git\":{\"updatedTime\":1751007867000,\"contributors\":[{\"name\":\"Dev-Liz\",\"username\":\"Dev-Liz\",\"email\":\"basseyelizabeth569@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Dev-Liz\"},{\"name\":\"Onwuemene Joshua\",\"username\":\"\",\"email\":\"onwuemenejoshua@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"fce1019bbce1ae44155bcf26c2fd2e1ab720ca58\",\"time\":1751007867000,\"email\":\"onwuemenejoshua@gmail.com\",\"author\":\"Onwuemene Joshua\",\"message\":\"worked on the resource page, which contains the FAQ and Glossary section\"},{\"hash\":\"fedec698b9d01ede44784b4054cf2f8dabe44849\",\"time\":1750709260000,\"email\":\"basseyelizabeth569@gmail.com\",\"author\":\"Dev-Liz\",\"message\":\"setup\"}]},\"filePathRelative\":\"resources.md\"}")
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
