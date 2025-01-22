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
        items: [
          {
            text: 'Further Reading',
            link: '/docs/further-reading/guides-on-llvm-and-clang-format',
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
          base: '/docs/get-started/',
          text: 'Get Started',
          link: '/',
          collapsed: true,
          items: [
            {
              text: 'Why We Started This Project',
              link: 'why-we-started-this-project',
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
              text: 'Migration Guide',
              link: 'migration-from-angular-clang-format',
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
              text: 'Guides on LLVM and Clang-Format',
              link: 'guides-on-llvm-and-clang-format',
            },
            {
              text: 'Build Process',
              link: 'build-process',
            },
            {
              text: 'About <code>os.platform()</code> and <code>os.arch()</code>',
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
      md.use(footnote);
      md.use(groupIconMdPlugin);
    },
  },

  vite: {
    plugins: [groupIconVitePlugin()],
  },
});
