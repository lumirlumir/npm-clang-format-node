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
  title: 'clang-format-node',
  description:
    "The official documentation site for the clang-format-node npm package. clang-format-node is a Node.js wrapper for LLVM Clang's clang-format and git-clang-format native binaries, inspired by angular/clang-format.🐉",

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
        link: '/',
      },
      {
        text: 'Examples',
        link: `${REPO_URL}/tree/main/examples`,
      },
      {
        text: 'Playground',
        link: '/',
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

    sidebar: [
      {
        text: 'Getting Started',
        items: [{ text: 'Contributing', link: '/community/contributing' }],
      },
    ],

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
