# `clang-format-git`

[![NPM Version](https://img.shields.io/npm/v/clang-format-git)](https://www.npmjs.com/package/clang-format-git)&nbsp;
![Node Current](https://img.shields.io/node/v/clang-format-git)

> [Repository](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-git) | [npm](https://www.npmjs.com/package/clang-format-git)

Node wrapper for `git-clang-format` Python script as a standalone native binary to <u>**allow execution without a Python dependency**</u>.

> [!TIP]
>
> This package also supports JSDoc type hints with the following APIs, so you’ll see more detailed information directly in your code editor.

## Installation

This package already includes `clang-format-node` as a dependency, so there’s no need to install it separately.

::: code-group

```sh [npm]
# Global
$ npm install -g clang-format-git
# Local
$ npm install -D clang-format-git
```

```sh [pnpm]
# Global
$ pnpm add -g clang-format-git
# Local
$ pnpm add -D clang-format-git
```

```sh [yarn]
# Global
$ yarn global add clang-format-git
# Local
$ yarn add --dev clang-format-git
```

```sh [bun]
# Global
$ bun add -g clang-format-git
# Local
$ bun add -d clang-format-git
```

:::

## CLI Commands

You can use the commands below to run `git-clang-format`.

> [!NOTE]
>
> `clang-format-git` is an alias for `git-clang-format` and works in exactly the same way.

```sh
npx git-clang-format
```

```sh
npx clang-format-git
```

## Node.js APIs

These APIs depends on the Node.js `fs` and `path` module and the file system, so you cannot use it in browsers.

- CommonJS

    ```js
    const {
      gitClangFormatPath,
      clangFormatGitPath,
      getGitClangFormatPath,
      getClangFormatGitPath,
    } = require('clang-format-git');
    ```

- ES Modules

    ```js
    import {
      gitClangFormatPath,
      clangFormatGitPath,
      getGitClangFormatPath,
      getClangFormatGitPath,
    } from 'clang-format-git';
    ```

---

### `gitClangFormatPath`

> Type: `string`

The ABSOLUTE path to the `git-clang-format` executable binary based on the OS platform and architecture.

#### Alias and Version

- Alias: `clangFormatGitPath`. See [`clangFormatGitPath`](#clangformatgitpath).
- Version: `v1.2.0` Initial release.

---

### `clangFormatGitPath`

> Type: `string`

Alias for `gitClangFormatPath`.

#### Alias and Version

- Alias: `gitClangFormatPath`. See [`gitClangFormatPath`](#gitclangformatpath).
- Version: `v1.2.0` Initial release.

---

### `getGitClangFormatPath`

> Type: `function`

Returns the ABSOLUTE path to the `git-clang-format` executable binary based on the OS platform and architecture.

The possible combinations are `darwin-arm64`, `darwin-x64`, `linux-arm`, `linux-arm64`, `linux-ppc64`, `linux-s390x`, `linux-x64`, `win32-x64`.

Throws an error if the executable is not found.

#### Parameters

- osPlatform (`string`): The current operating system platform. (e.g., `darwin`, `linux`, `win32`)
- architecture (`string`): The current system architecture. (e.g., `arm`, `arm64`, `ppc64`, `s390x`, `x64`)

#### Returns

- `string`: The absolute path to the `git-clang-format` executable binary.

#### Throws

- `Error`: Throws an error if the executable binary is not found for the specified OS platform and architecture.

#### Alias and Version

- Alias: `getClangFormatGitPath`. See [`getClangFormatGitPath`](#getclangformatgitpath).
- Version: `v1.2.0` Initial release.

---

### `getClangFormatGitPath`

> Type: `function`

Alias for `getGitClangFormatPath`.

#### Alias and Version

- Alias: `getGitClangFormatPath`. See [`getGitClangFormatPath`](#getgitclangformatpath).
- Version: `v1.2.0` Initial release.
