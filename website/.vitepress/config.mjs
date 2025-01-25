/**
 * @fileoverview Vitepress site configuration.
 *
 * @see https://vitepress.dev/reference/site-config#site-config
 */

/* eslint-disable import/no-extraneous-dependencies -- TODO: Delete it after this rule is updated in `eslint-config-bananass` */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import footnote from 'markdown-it-footnote';
import { defineConfig } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

// --------------------------------------------------------------------------------
// Constants
// --------------------------------------------------------------------------------

const TITLE = 'clang-format-node';
const DESCRIPTION =
  "The official documentation website for clang-format-node, a Node.js wrapper for LLVM Clang's clang-format and git-clang-format native binaries inspired by angular/clang-format.🐉";
const AUTHOR = '루밀LuMir';
const SITE_URL = 'https://clang-format-node.lumir.page';
const GITHUB_URL = 'https://github.com/lumirlumir/npm-clang-format-node';
const NPM_URL = 'https://www.npmjs.com';
const GOOGLE_GA_ID = 'G-SVZGJNXDB2';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default defineConfig({
  /* Site Metadata */
  title: TITLE,
  description: DESCRIPTION,
  head: [
    // Basic
    ['link', { rel: 'icon', href: '/logo-lightgray.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'title', content: TITLE }],
    ['meta', { name: 'theme-color', content: '#83ba63' }],
    ['meta', { name: 'author', content: AUTHOR }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'LLVM, clang-format, clang-format-node, git-clang-format',
      },
    ],

    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: SITE_URL }],
    ['meta', { property: 'og:title', content: TITLE }],
    ['meta', { property: 'og:description', content: DESCRIPTION }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/logo-og.png` }],
    ['meta', { property: 'og:image:width', content: '1280' }],
    ['meta', { property: 'og:image:height', content: '640' }],
    ['meta', { property: 'og:site_name', content: TITLE }],
    ['meta', { property: 'og:article:author', content: AUTHOR }],

    // Twitter
    ['meta', { name: 'twitter:url', content: SITE_URL }],
    ['meta', { name: 'twitter:title', content: TITLE }],
    ['meta', { name: 'twitter:description', content: DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: `${SITE_URL}/logo-og.png` }],
    ['meta', { name: 'twitter:creator', content: AUTHOR }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],

    // Google Analytics
    [
      'script',
      { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_GA_ID}` },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GOOGLE_GA_ID}');`,
    ],
  ],
  lang: 'en-US',

  /* Routing */
  cleanUrls: true,

  /* Build */
  outDir: 'build',
  metaChunk: true,

  /* Theming */
  lastUpdated: true,

  /* Sitemap */
  sitemap: {
    hostname: SITE_URL,
  },

  /* Thme Configuration */
  themeConfig: {
    logo: {
      light: '/logo-black.svg',
      dark: '/logo-white.svg',
      alt: 'clang-format-node Logo',
    },

    outline: {
      level: 'deep',
    },

    nav: [
      {
        text: 'Get Started',
        link: '/docs/get-started',
        activeMatch: '/docs/get-started/',
      },
      {
        text: 'APIs',
        link: '/docs/apis/clang-format-node',
        activeMatch: '/docs/apis/',
      },
      {
        text: 'Others',
        activeMatch: '/docs/(?:further-reading|blog|community)/',
        items: [
          {
            text: 'Further Reading',
            link: '/docs/further-reading/guides-on-llvm-clang-format',
            activeMatch: '/docs/further-reading/',
          },
          {
            text: 'Blog',
            link: '/docs/blog/v1.2.0',
            activeMatch: '/docs/blog/',
          },
          {
            text: 'Community',
            link: '/docs/community/code-of-conduct',
            activeMatch: '/docs/community/',
          },
        ],
      },
      {
        text: 'Examples',
        link: `${GITHUB_URL}/tree/main/examples`,
      },
      {
        text: 'Packages',
        items: [
          {
            text: 'clang-format-node',
            link: `${NPM_URL}/package/clang-format-node`,
          },
          {
            text: 'clang-format-git',
            link: `${NPM_URL}/package/clang-format-git`,
          },
          {
            text: 'clang-format-git-python',
            link: `${NPM_URL}/package/clang-format-git-python`,
          },
        ],
      },
    ],

    sidebar: {
      '/docs/': [
        {
          base: '/docs/get-started/',
          text: 'Get Started',
          link: '/',
          collapsed: false, // Set it `false` to show `>` icon.
          items: [
            {
              text: 'Why We Started This Project',
              link: 'why-we-started-this-project',
            },
            {
              text: 'Introduction',
              link: 'introduction',
            },
            {
              text: 'Installation',
              link: 'installation',
            },
            {
              text: 'Configuration',
              link: 'configuration',
            },
            {
              text: 'Ignore Files',
              link: 'ignore-files',
            },
            {
              text: 'CLI',
              link: 'cli',
            },
            {
              text: 'Supported',
              link: 'supported',
            },
            {
              text: 'Migration Guide',
              link: 'migration-from-angular-clang-format',
            },
            {
              text: 'Use with <code>husky</code>, <code>lint-staged</code>',
              link: 'use-with-husky-and-lint-staged',
            },
            {
              text: 'Q & A',
              link: 'q-and-a',
            },
          ],
        },

        {
          base: '/docs/apis/',
          text: 'APIs',
          collapsed: true,
          items: [
            {
              text: 'clang-format-node',
              link: 'clang-format-node',
            },
            {
              text: 'clang-format-git',
              link: 'clang-format-git',
            },
            {
              text: 'clang-format-git-python',
              link: 'clang-format-git-python',
            },
          ],
        },

        {
          base: '/docs/further-reading/',
          text: 'Further Reading',
          collapsed: true,
          items: [
            {
              text: 'Guides on LLVM Clang Format',
              link: 'guides-on-llvm-clang-format',
            },
            {
              text: 'Build Process',
              link: 'build-process',
            },
            {
              text: '<code>os.platform()</code>, <code>os.arch()</code>',
              link: 'about-os-platform-and-os-arch-in-nodejs',
            },
            {
              text: '<code>|| exit 0</code> and <code>|| true</code>',
              link: 'difference-between-exit-0-and-true',
            },
          ],
        },

        {
          base: '/docs/blog/',
          text: 'Blog',
          collapsed: true,
          items: [
            {
              text: 'v1.2.0',
              link: 'v1.2.0',
            },
          ],
        },

        {
          base: '/docs/community/',
          text: 'Community',
          collapsed: true,
          items: [
            {
              text: 'Code of Conduct',
              link: 'code-of-conduct',
            },
            {
              text: 'Contributing',
              link: 'contributing',
            },
            {
              text: 'Change Log',
              link: 'change-log',
            },
            {
              text: 'Versioning',
              link: 'versioning',
            },
            {
              text: 'Security',
              link: 'security',
            },
            {
              text: 'License',
              link: 'license',
            },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: 'npm',
        link: `${NPM_URL}/~lumir`,
        ariaLabel: 'npm profile link for LuMir',
      },
      {
        icon: 'github',
        link: GITHUB_URL,
        ariaLabel: 'GitHub repository link for clang-format-node',
      },
    ],

    editLink: {
      pattern: `${GITHUB_URL}/edit/main/website/:path`,
      text: 'Edit this page on GitHub',
    },

    search: {
      provider: 'local',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2024-present <a href="https://github.com/lumirlumir">${AUTHOR}(lumirlumir)</a>`,
    },
  },

  markdown: {
    config(md) {
      md.use(footnote);
      md.use(groupIconMdPlugin);
    },
  },

  vite: {
    plugins: [groupIconVitePlugin()],
  },
});
