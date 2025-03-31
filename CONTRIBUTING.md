# Contributing

This repository uses [`npm workspaces`](https://docs.npmjs.com/cli/using-npm/workspaces) and [`lerna`](https://lerna.js.org/) to maintain a **monorepo**.

## Directory Structure

All packages are located in the `packages` directory, and the documentation can be found in the `website` directory.

## Installation

1. Fork it.

1. Clone it to your local directory. ([Git](https://git-scm.com/downloads) is required.)

    ```sh
    git clone https://github.com/lumirlumir/npm-clang-format-node.git
    ```

1. Move to the `npm-clang-format-node` directory.

    ```sh
    cd npm-clang-format-node
    ```

1. Install npm packages. ([Node.js](https://nodejs.org/en) is required.)

    ```sh
    npm install
    ```

1. Edit codes.

1. Create `my-branch` branch.

    ```sh
    git switch -c my-branch
    ```

1. Commit your changes. (`husky` and `lint-staged` will lint your changed files!)

    ```sh
    git commit -am "<type>[optional scope]: <description>"
    ```

1. Push them to your remote branch.

1. Submit a pull request.🙇‍♂️

## Others

### `node:` namespace

The `node:` namespace prefix for built-in modules was introduced in Node.js `14.18.0` and `16.0.0`. While using it is recommended for new projects, we use different approaches in this project:

- For regular application code, use standard imports without the `node:` prefix for broader compatibility:

  ```js
  // Standard import (works in all Node.js versions)
  const fs = require('fs');
  ```

- For test files (`.test.js`) that use the `node:test` runner, you may use the `node:` prefix:

  ```js
  // node: prefix allowed in test files
  const fs = require('node:fs');
  ```

This approach helps maintain compatibility across Node.js versions while allowing modern syntax in test environments where version constraints are less critical.
