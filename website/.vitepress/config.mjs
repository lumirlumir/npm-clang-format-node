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

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default defineConfig({
  /* Site Metadata */
  title: 'clang-format-node',
  description:
    "The official documentation site for the clang-format-node npm package. clang-format-node is a Node.js wrapper for LLVM Clang's clang-format and git-clang-format native binaries, inspired by angular/clang-format.🐉",
  head: [['link', { rel: 'icon', href: '/logo-lightgray.svg' }]],

  /* Routing */
  cleanUrls: true,

  /* Theming */
  lastUpdated: true,

  themeConfig: {
    logo: {
      light: '/logo-black.svg',
      dark: '/logo-white.svg',
      alt: 'clang-format-node Logo',
    },

    nav: [
      {
        text: 'Getting Started',
        link: '/',
      },
      {
        text: 'APIs',
        link: '/',
      },
      {
        text: 'Blog',
        link: '/docs/blog/',
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
            link: 'https://www.npmjs.com/package/clang-format-node',
          },
          {
            text: 'clang-format-git',
            link: 'https://www.npmjs.com/package/clang-format-git',
          },
          {
            text: 'clang-format-git-python',
            link: 'https://www.npmjs.com/package/clang-format-git-python',
          },
        ],
      },
    ],

    sidebar: {
      '/docs/blog/': [
        {
          text: 'Articles',
          items: [
            {
              text: '<code>|| exit 0</code> and <code>|| true</code>',
              link: '/docs/blog/articles/difference-between-exit-0-and-true',
            },
          ],
        },
        {
          text: 'Releases',
          items: [
            {
              text: 'v1.2.0',
              link: '/docs/blog/releases/v1.2.0',
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
