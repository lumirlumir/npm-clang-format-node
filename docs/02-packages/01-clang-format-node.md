# `clang-format-node`

[![NPM Version](https://img.shields.io/npm/v/clang-format-node)](https://www.npmjs.com/package/clang-format-node)
![Node Current](https://img.shields.io/node/v/clang-format-node)

> [Repository](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-node) | [npm](https://www.npmjs.com/package/clang-format-node)

Node wrapper for `clang-format` native binary inspired by angular/clang-format. (The **CORE** package.)

## Installation

If you want to use `clang-format` without `git-clang-format`, simply follow the installation guide below. If you need `git-clang-format`, refer to the [`clang-format-git`](/02-clang-format-git.md) or [`clang-format-git-python`](/03-clang-format-git-python.md).

### global

```bash
npm install -g clang-format-node
```

```bash
yarn global add clang-format-node
```

```bash
pnpm add -g clang-format-node
```

```bash
bun add -g clang-format-node
```

### local(devDependencies)

```bash
npm install --save-dev clang-format-node
```

```bash
yarn add --dev clang-format-node
```

```bash
pnpm add -D clang-format-node
```

```bash
bun add -d clang-format-node
```

## Usage

You can use the commands below to run `clang-format`.

> `clang-format-node` is an alias for `clang-format` and works in exactly the same way.

```bash
npx clang-format
```

```bash
npx clang-format-node
```

## Node.js APIs

These APIs depends on the Node.js `fs` and `path` module and the file system, so you cannot use it in browsers.

- CommonJS

    ```javascript
    const {
      clangFormatPath,
      clangFormatNodePath,
      getClangFormatPath,
      getClangFormatNodePath
    } = require('clang-format-node');
    ```

- ES Modules

    ```javascript
    import {
      clangFormatPath,
      clangFormatNodePath,
      getClangFormatPath,
      getClangFormatNodePath
    } from 'clang-format-node';
    ```

### `clangFormatPath`

The ABSOLUTE path to the `clang-format` executable binary based on the OS platform and architecture.

#### Alias and Version

- Alias: `clangFormatNodePath`. See [`clangFormatNodePath`](#clangformatnodepath).
- Version: `v1.2.0` Initial release.

### `clangFormatNodePath`

Alias for `clangFormatPath`.

#### Alias and Version

- Alias: `clangFormatPath`. See [`clangFormatPath`](#clangformatpath).
- Version: `v1.2.0` Initial release.

### `getClangFormatPath`

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

### `getClangFormatNodePath`

Alias for `getClangFormatPath`.

#### Alias and Version

- Alias: `getClangFormatPath`. See [`getClangFormatPath`](#getclangformatpath).
- Version: `v1.2.0` Initial release.
