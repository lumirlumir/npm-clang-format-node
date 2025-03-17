# `clang-format-git-python`

[![NPM Version](https://img.shields.io/npm/v/clang-format-git-python)](https://www.npmjs.com/package/clang-format-git-python)&nbsp;
![Node Current](https://img.shields.io/node/v/clang-format-git-python)

> [Repository](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-git-python) | [npm](https://www.npmjs.com/package/clang-format-git-python)

Node wrapper for `git-clang-format` Python script. <u>**This package requires Python3 as a dependency**</u>.

> [!TIP]
>
> This package also supports JSDoc type hints with the following APIs, so you'll see more detailed information directly in your code editor.

## Installation

This package already includes `clang-format-node` as a dependency, so there's no need to install it separately.

::: code-group

```sh [npm]
# Global
$ npm install -g clang-format-git-python
# Local
$ npm install -D clang-format-git-python
```

```sh [pnpm]
# Global
$ pnpm add -g clang-format-git-python
# Local
$ pnpm add -D clang-format-git-python
```

```sh [yarn]
# Global
$ yarn global add clang-format-git-python
# Local
$ yarn add --dev clang-format-git-python
```

```sh [bun]
# Global
$ bun add -g clang-format-git-python
# Local
$ bun add -d clang-format-git-python
```

:::

## CLI Commands

You can use the commands below to run `git-clang-format`.

> [!NOTE]
>
> `clang-format-git-python` is an alias for `git-clang-format` and works in exactly the same way.

```sh
npx git-clang-format
```

```sh
npx clang-format-git-python
```

## Node.js APIs

These APIs depends on the Node.js `fs` and `path` module and the file system, so you cannot use it in browsers.

- CommonJS

    ```js
    const {
      gitClangFormatPath,
      clangFormatGitPythonPath,
    } = require('clang-format-git-python');
    ```

- ES Modules

    ```js
    import {
      gitClangFormatPath,
      clangFormatGitPythonPath,
    } from 'clang-format-git-python';
    ```

---

### `gitClangFormatPath`

> Type: `string`

The ABSOLUTE path to the [`git-clang-format`](https://github.com/lumirlumir/npm-clang-format-node/blob/main/packages/clang-format-git-python/src/script/git-clang-format) Python script.

- Type: `string`
- Alias: `clangFormatGitPythonPath`. See [`clangFormatGitPythonPath`](#clangformatgitpythonpath).
- Version: `v1.2.0` Initial release.

---

### `clangFormatGitPythonPath`

> Type: `string`

Alias for `gitClangFormatPath`.

- Alias: `gitClangFormatPath`. See [`gitClangFormatPath`](#gitclangformatpath).
- Version: `v1.2.0` Initial release.
