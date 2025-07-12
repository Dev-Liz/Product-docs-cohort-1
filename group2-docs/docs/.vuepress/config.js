import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'en-US',
  head: [
    ['link', { rel: 'icon', href: '/openmadness-icon.png' }] 
  ],
  description: 'My first VuePress Site',
  
  plugins: [
      searchPlugin({
        isSearchable: (page) => page.path !== '/',
        getExtraFields: (page) => page.frontmatter.tags ?? [],
    }),
  ],

  theme: defaultTheme({
    logo: '/om-logo-dark.svg',
    logoAlt: 'openmadness-logo',
    logoDark: '/om-logo-light.svg',
    colorMode: 'auto',
    colorModeSwitch: 'true',
    externalLinkIcon: 'true',

     navbar: [
      // NavbarLink
       {
        text: 'Home',
        link: 'Readme.md',
      },
      {
        text: 'Getting Started',
        link: '/getting-started/introduction.md',
      },
      {
        text: 'OM-Functions',
        link: '/om-functions/introduction.md',
      },
      // NavbarGroup
      {
        text: 'Operation',
        children: [
              {
                text: 'Fundamentals',
                link: 'tutorials/fundamentals/basic-arithmetics',
              },
              {
                text: 'Advanced',
                link: 'tutorials/advanced/2d-array.md',
              },
          ],
      },
      {
        text: 'Guides',
        children: [
              {
                text: 'Fundamentals',
                link: 'guides/fundamentals/array-elements',
              },
              {
                text: 'Intermediate',
                link: 'guides/intermediate/making-sense-of-data',
              },
              {
                text: 'Advanced',
                link: 'tutorials/advanced/building-a-network.md',
              },

          ],
        },
      {
        text: 'Resources',
        children: [
              {
                text: 'FAQs',
                link: 'resources/faq.md',
              },
              {
                text: 'Glossary',
                link: 'resources/glossary.md',
              },
              {
                text: 'Contributing',
                link: 'resources/contributing.md',
              },
          ],
        },
      // string - page file path
      'changelog.md',
      {
        text: 'Github',
        link: 'https://github.com/Dev-Liz/Product-docs-cohort-1',
      },
    ],  
    
    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          collapsible: true,

          // prefix will be prepended to relative paths
          children: [
            'introduction.md', // resolved to `/guide/introduction.md`
            'quickstart.md', // resolved to `/guide/getting-started.md`
            'installation.md',
          ],
        },
      ],
      '/tutorials/': [
        {
          text: 'Tutorials',
          children: [
            {
            text: 'Fundamentals',
            collapsible: true,
            prefix: 'fundamentals/',
            // for project links, .md or .html suffix is optional
            children: ['basic-arithmetics', 'data-types', 'shapes', 'size', 'axes', 'arrays','statistics', 'logic'],
          },
          {
            text: 'Advanced',
            collapsible: true,
            prefix: 'advanced/',
            // for project links, .md or .html suffix is optional
            children: ['2d-array', '3d-array', 'algebra', 'average', 'variance'],
          },
        ]
        }
      ],
       '/guides/': [
        {
          text: 'Guides',
          children: [
            {
            text: 'Fundamentals',
            collapsible: true,
            prefix: 'fundamentals/',
            // for project links, .md or .html suffix is optional
            children: ['array-elements', 'basic-array-operations', 'creating-arrays'],
          },
           {
            text: 'Intermediate',
            collapsible: true,
            prefix: 'intermediate/',
            // for project links, .md or .html suffix is optional
            children: ['logic-n-filters', 'making-sense-of-data', 'working-with-2d-data'],
          },
          {
            text: 'Advanced',
            collapsible: true,
            prefix: 'advanced/',
            // for project links, .md or .html suffix is optional
            children: ['building-a-network', 'data-broadcasting', 'mini-linear-algebra'],
          },
        ]
       }
      ],
      '/om-functions/': [
        {
          text: 'OM-Functions',
          collapsible: true,

          // prefix will be prepended to relative paths
          children: [
            'arithmetic-operations.md', // resolved to `/guide/introduction.md`
            'array-operations.md', // resolved to `/guide/getting-started.md`
            'logical-operations.md',
            'statistics.md',
            'transformations.md',
            'utilities.md'
          ],
    },
  ],
   '/resources/': [
        {
          text: 'Resources',
          collapsible: true,

          // prefix will be prepended to relative paths
          children: [
            'faq.md', // resolved to `/guide/introduction.md`
            'glossary.md', // resolved to `/guide/getting-started.md`
            'contributing.md',
          ],
        },
      ],
    'changelog' : 'changelog',
}
}),
  bundler: viteBundler(),
})
