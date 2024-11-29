# `clang-format-git-python`

[![NPM Version](https://img.shields.io/npm/v/clang-format-git-python)](https://www.npmjs.com/package/clang-format-git-python)
![Node Current](https://img.shields.io/node/v/clang-format-git-python)

> [Repository](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-git-python) | [npm](https://www.npmjs.com/package/clang-format-git-python)

Node wrapper for `git-clang-format` Python script. **This package requires Python3 as a dependency**.

## Installation

This package already includes `clang-format-node`, so there’s no need to install it separately.

### global

```bash
npm install -g clang-format-git-python
```

```bash
yarn global add clang-format-git-python
```

```bash
pnpm add -g clang-format-git-python
```

```bash
bun add -g clang-format-git-python
```

### local(devDependencies)

```bash
npm install --save-dev clang-format-git-python
```

```bash
yarn add --dev clang-format-git-python
```

```bash
pnpm add -D clang-format-git-python
```

```bash
bun add -d clang-format-git-python
```

## Usage

You can use the commands below to run `git-clang-format`.

> `clang-format-git-python` is an alias for `git-clang-format` and works in exactly the same way.

```bash
npx git-clang-format
```

```bash
npx clang-format-git-python
```

## Node.js APIs

These APIs depends on the Node.js `fs` and `path` module and the file system, so you cannot use it in browsers.

- CommonJS

    ```javascript
    const {
      gitClangFormatPath,
      clangFormatGitPythonPath,
    } = require('clang-format-git-python');
    ```

- ES Modules

    ```javascript
    import {
      gitClangFormatPath,
      clangFormatGitPythonPath,
    } from 'clang-format-git-python';
    ```

### `gitClangFormatPath`

The ABSOLUTE path to the [`git-clang-format`](https://github.com/lumirlumir/npm-clang-format-node/blob/main/packages/clang-format-git-python/src/script/git-clang-format) Python script.

- Type: `string`
- Alias: `clangFormatGitPythonPath`. See [`clangFormatGitPythonPath`](#clangformatgitpythonpath).
- Version: `v1.2.0` Initial release.

### `clangFormatGitPythonPath`

Alias for `gitClangFormatPath`.

- Alias: `gitClangFormatPath`. See [`gitClangFormatPath`](#gitclangformatpath).
- Version: `v1.2.0` Initial release.
