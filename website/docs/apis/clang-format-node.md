# `clang-format-node`

[![NPM Version](https://img.shields.io/npm/v/clang-format-node)](https://www.npmjs.com/package/clang-format-node)&nbsp;
![Node Current](https://img.shields.io/node/v/clang-format-node)

> [Repository](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-node) | [npm](https://www.npmjs.com/package/clang-format-node)

Node wrapper for `clang-format` native binary inspired by [angular/clang-format](https://github.com/angular/clang-format). (The **CORE** package.)

> [!TIP]
>
> This package also supports JSDoc type hints with the following APIs, so you’ll see more detailed information directly in your code editor.

## Installation

If you want to use `clang-format` without `git-clang-format`, simply follow the installation guide below. If you need `git-clang-format`, refer to the [`clang-format-git`](clang-format-git.md) or [`clang-format-git-python`](clang-format-git-python.md).

::: code-group

```sh [npm]
# Global
$ npm install -g clang-format-node
# Local
$ npm install -D clang-format-node
```

```sh [pnpm]
# Global
$ pnpm add -g clang-format-node
# Local
$ pnpm add -D clang-format-node
```

```sh [yarn]
# Global
$ yarn global add clang-format-node
# Local
$ yarn add --dev clang-format-node
```

```sh [bun]
# Global
$ bun add -g clang-format-node
# Local
$ bun add -d clang-format-node
```

:::

## CLI Commands

You can use the commands below to run `clang-format`.

> [!NOTE]
>
> `clang-format-node` is an alias for `clang-format` and works in exactly the same way.

```sh
npx clang-format
```

```sh
npx clang-format-node
```

## Node.js APIs

These APIs depends on the Node.js `fs` and `path` module and the file system, so you cannot use it in browsers.

- CommonJS

    ```js
    const {
      clangFormatPath,
      clangFormatNodePath,
      getClangFormatPath,
      getClangFormatNodePath
    } = require('clang-format-node');
    ```

- ES Modules

    ```js
    import {
      clangFormatPath,
      clangFormatNodePath,
      getClangFormatPath,
      getClangFormatNodePath
    } from 'clang-format-node';
    ```

---

### `clangFormatPath`

> Type: `string`

The ABSOLUTE path to the `clang-format` executable binary based on the OS platform and architecture.

#### Alias and Version

- Alias: `clangFormatNodePath`. See [`clangFormatNodePath`](#clangformatnodepath).
- Version: `v1.2.0` Initial release.

---

### `clangFormatNodePath`

> Type: `string`

Alias for `clangFormatPath`.

#### Alias and Version

- Alias: `clangFormatPath`. See [`clangFormatPath`](#clangformatpath).
- Version: `v1.2.0` Initial release.

---

### `getClangFormatPath`

> Type: `function`

Returns the ABSOLUTE path to the `clang-format` executable binary based on the OS platform and architecture.

The possible combinations are `darwin-arm64`, `darwin-x64`, `linux-arm`, `linux-arm64`, `linux-ppc64`, `linux-s390x`, `linux-x64`, `win32-x64`.

Throws an error if the executable is not found.

#### Parameters

- osPlatform (`string`): The current operating system platform. (e.g., `darwin`, `linux`, `win32`)
- architecture (`string`): The current system architecture. (e.g., `arm`, `arm64`, `ppc64`, `s390x`, `x64`)

#### Returns

- `string`: The absolute path to the `clang-format` executable binary.

#### Throws

- `Error`: Throws an error if the executable binary is not found for the specified OS platform and architecture.

#### Alias and Version

- Alias: `getClangFormatNodePath`. See [`getClangFormatNodePath`](#getclangformatnodepath).
- Version: `v1.2.0` Initial release.

---

### `getClangFormatNodePath`

> Type: `function`

Alias for `getClangFormatPath`.

#### Alias and Version

- Alias: `getClangFormatPath`. See [`getClangFormatPath`](#getclangformatpath).
- Version: `v1.2.0` Initial release.
