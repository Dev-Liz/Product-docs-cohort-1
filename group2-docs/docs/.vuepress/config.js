import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      '/',
      '/get-started',
      '/tutorials',
      {
        text: 'Guides',
        children:[
         {
           text: 'Array 101',
           link: '/guides/array101/introduction.md',
         }
        ]
      },
      '/om-functions',
      '/resources',
      '/changelog'],

    sidebar: {
      '/guides/': [
        {
          text: 'Guides',
          children: [
            '/guides/array101/introduction.md',
            '/guides/array101/creatingArrays.md',
            '/guides/array101/accessingArrays.md',
            '/guides/array101/basicArrayOperation.md'
          ]
        }
      ],

    }
  }),

  bundler: viteBundler(),
})
