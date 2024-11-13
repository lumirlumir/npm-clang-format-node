# `clang-format-git`

[![NPM Version](https://img.shields.io/npm/v/clang-format-git)](https://www.npmjs.com/package/clang-format-git) [『Repository』](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-git), [『npm』](https://www.npmjs.com/package/clang-format-git)

Node repackaging of the `git-clang-format` Python script as a standalone native binary to **allow execution without a Python dependency**.

## Installation

This package already includes `clang-format-node`, so there’s no need to install it separately.

### global

```bash
npm install -g clang-format-git
```

```bash
yarn global add clang-format-git
```

```bash
pnpm add -g clang-format-git
```

```bash
bun add -g clang-format-git
```

### local(devDependencies)

```bash
npm install --save-dev clang-format-git
```

```bash
yarn add --dev clang-format-git
```

```bash
pnpm add -D clang-format-git
```

```bash
bun add -d clang-format-git
```

## Usage

You can use the commands below to run `git-clang-format`.

> `clang-format-git` is an alias for `git-clang-format` and works in exactly the same way.

```bash
npx git-clang-format
```

```bash
npx clang-format-git
```

## APIs

```javascript
const {
  gitClangFormatPath,
  clangFormatGitPath,
  getGitClangFormatPath,
  getClangFormatGitPath,
} = require('clang-format-git');
```

### `gitClangFormatPath`

The ABSOLUTE path to the `git-clang-format` executable binary based on the OS platform and architecture.

#### Alias and Version

- **Alias**: `clangFormatGitPath`. See [`clangFormatGitPath`](#clangformatgitpath).
- **Version**: `v1.2.0` Initial release.

### `clangFormatGitPath`

Alias for `gitClangFormatPath`.

#### Alias and Version

- **Alias**: `gitClangFormatPath`. See [`gitClangFormatPath`](#gitclangformatpath).
- **Version**: `v1.2.0` Initial release.

### `getGitClangFormatPath`

Returns the ABSOLUTE path to the `git-clang-format` executable binary based on the OS platform and architecture.

The possible combinations are `darwin-arm64`, `darwin-x64`, `linux-arm`, `linux-arm64`, `linux-ppc64`, `linux-s390x`, `linux-x64`, `win32-x64`.

Throws an error if the executable is not found.

#### Parameters

- **osPlatform** (`string`): The current operating system platform. (e.g., `darwin`, `linux`, `win32`)
- **architecture** (`string`): The current system architecture. (e.g., `arm`, `arm64`, `ppc64`, `s390x`, `x64`)

#### Returns

- **`string`**: The absolute path to the `git-clang-format` executable binary.

#### Throws

- **`Error`**: Throws an error if the executable binary is not found for the specified OS platform and architecture.

#### Alias and Version

- **Alias**: `getClangFormatGitPath`. See [`getClangFormatGitPath`](#getclangformatgitpath).
- **Version**: `v1.2.0` Initial release.

### `getClangFormatGitPath`

Alias for `getGitClangFormatPath`.

#### Alias and Version

- **Alias**: `getGitClangFormatPath`. See [`getGitClangFormatPath`](#getgitclangformatpath).
- **Version**: `v1.2.0` Initial release.
