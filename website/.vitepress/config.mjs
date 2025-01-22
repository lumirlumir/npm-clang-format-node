/**
 * @fileoverview Vitepress site configuration.
 *
 * @see https://vitepress.dev/reference/site-config#site-config
 */

/* eslint-disable import/no-extraneous-dependencies -- TODO: Delete it after this rule is updated in `eslint-config-bananass` */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { defineConfig } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

// --------------------------------------------------------------------------------
// Constants
// --------------------------------------------------------------------------------

const REPO_URL = 'https://github.com/lumirlumir/npm-clang-format-node';
const NPM_URL = 'https://www.npmjs.com/package';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default defineConfig({
  /* Site Metadata */
  title: 'clang-format-node',
  description:
    "The official documentation site for the clang-format-node npm package. clang-format-node is a Node.js wrapper for LLVM Clang's clang-format and git-clang-format native binaries, inspired by angular/clang-format.🐉",
  head: [
    ['link', { rel: 'icon', href: '/logo-lightgray.svg' }],
    // TODO: Add more meta tags like keywords, author, etc.
  ],

  /* Routing */
  cleanUrls: true,

  /* Theming */
  lastUpdated: true,

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
        link: '/docs/1-get-started/1-installation',
        activeMatch: '/docs/1-get-started/',
      },
      {
        text: 'APIs',
        link: '/docs/2-apis/1-clang-format-node',
        activeMatch: '/docs/2-apis/',
      },
      {
        text: 'Others',
        items: [
          {
            text: 'Further Reading',
            link: '/docs/3-further-reading/1-migration-from-angular-clang-format',
            activeMatch: '/docs/3-further-reading/',
          },
          {
            text: 'Blog',
            link: '/docs/4-blog/v1.2.0',
            activeMatch: '/docs/4-blog/',
          },
          {
            text: 'Community',
            link: '/docs/5-community/1-code-of-conduct',
            activeMatch: '/docs/5-community/',
          },
        ],
      },
      {
        text: 'Examples',
        link: `${REPO_URL}/tree/main/examples`,
      },
      {
        text: 'Packages',
        items: [
          {
            text: 'clang-format-node',
            link: `${NPM_URL}/clang-format-node`,
          },
          {
            text: 'clang-format-git',
            link: `${NPM_URL}/clang-format-git`,
          },
          {
            text: 'clang-format-git-python',
            link: `${NPM_URL}/clang-format-git-python`,
          },
        ],
      },
    ],

    sidebar: {
      '/docs/': [
        {
          base: '/docs/1-get-started/',
          text: 'Get Started',
          items: [
            {
              text: 'Installation',
              link: '1-installation',
            },
          ],
        },

        {
          base: '/docs/2-apis/',
          text: 'APIs',
          items: [
            {
              text: 'clang-format-node',
              link: '1-clang-format-node',
            },
          ],
        },

        {
          base: '/docs/3-further-reading/',
          text: 'Further Reading',
          collapsed: true,
          items: [
            {
              text: "Migration from 'angular/clang-format'",
              link: '1-migration-from-angular-clang-format',
            },
            {
              text: '<code>|| exit 0</code> and <code>|| true</code>',
              link: '5-difference-between-exit-0-and-true',
            },
          ],
        },

        {
          base: '/docs/4-blog/',
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
          base: '/docs/5-community/',
          text: 'Community',
          collapsed: true,
          items: [
            {
              text: 'Code of Conduct',
              link: '1-code-of-conduct',
            },
            {
              text: 'Contributing',
              link: '2-contributing',
            },
            {
              text: 'Change Log',
              link: '3-change-log',
            },
            {
              text: 'Versioning',
              link: '4-versioning',
            },
            {
              text: 'Security',
              link: '5-security',
            },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/~lumir',
        ariaLabel: 'npm profile link for LuMir',
      },
      {
        icon: 'github',
        link: 'https://github.com/lumirlumir/npm-clang-format-node',
        ariaLabel: 'GitHub repository link for clang-format-node',
      },
    ],

    editLink: {
      pattern: `${REPO_URL}/edit/main/website/:path`,
      text: 'Edit this page on GitHub',
    },

    search: {
      provider: 'local',
    },
  },

  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },

  vite: {
    plugins: [groupIconVitePlugin()],
  },
});
