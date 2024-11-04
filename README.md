# clang-format-node

⭐If you like this package, please give it a star on [GitHub](https://github.com/lumirlumir/npm-clang-format-node)! Your support helps us improve and maintain the project.⭐

<image align="center" src="https://llvm.org/img/LLVMWyvernSmall.png" />

![GitHub Release](https://img.shields.io/github/v/release/lumirlumir/npm-clang-format-node?label=release%20(LLVM%20version)&color=violet&display_name=release)
[![NPM Version](https://img.shields.io/npm/v/clang-format-node)](https://www.npmjs.com/package/clang-format-node)
![NPM Downloads](https://img.shields.io/npm/dw/clang-format-node)
![Node Current](https://img.shields.io/node/v/clang-format-node)

[![lint](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/lint.yml/badge.svg)](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/lint.yml)
[![test](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test.yml/badge.svg)](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test.yml)
[![test-cross-platform](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test-cross-platform.yml/badge.svg)](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test-cross-platform.yml)
[![codecov](https://codecov.io/gh/lumirlumir/npm-clang-format-node/graph/badge.svg?token=69BF05THA2)](https://codecov.io/gh/lumirlumir/npm-clang-format-node)

[![Static Badge](https://img.shields.io/badge/Official_Documentation-skyblue?style=flat&logo=gitbook&labelColor=gray)](https://clang-format-node.lumir.page)

Node repackaging(wrapping) of the **LLVM clang's** `clang-format` and `git-clang-format` native binary inspired by ['angular/clang-format'](https://github.com/angular/clang-format).🐉

This package's repository is maintained as a **monorepo** and includes the following three packages.

1. `clang-format-node` [![NPM Version](https://img.shields.io/npm/v/clang-format-node)](https://www.npmjs.com/package/clang-format-node):
Node repackaging of the `clang-format` native binary. 『Docs』, [『Repository』](/packages/clang-format-node), [『npm』](https://www.npmjs.com/package/clang-format-node)

1. `clang-format-git` [![NPM Version](https://img.shields.io/npm/v/clang-format-git)](https://www.npmjs.com/package/clang-format-git): Node repackaging of the `git-clang-format` Python script as a standalone native binary to **allow execution without a Python dependency**. 『Docs』, [『Repository』](/packages/clang-format-git), [『npm』](https://www.npmjs.com/package/clang-format-git)

1. `clang-format-git-python` [![NPM Version](https://img.shields.io/npm/v/clang-format-git-python)](https://www.npmjs.com/package/clang-format-git-python): Node repackaging of the `git-clang-format` Python script. **This package requires Python3 as a dependency**. 『Docs』, [『Repository』](/packages/clang-format-git-python), [『npm』](https://www.npmjs.com/package/clang-format-git-python)

This package intends to release a new npm package for every **latest** release of the `clang-format` and `git-clang-format`. It **checks** for the latest LLVM release every week, builds all `clang-format` related packages using its own pipeline, and makes a pull request. **All processes are run automatically**. If you are interested in the build process, take a look at [`.github/workflows/llvm-build-bump-pr.yml`](/.github/workflows/llvm-build-bump-pr.yml).

For full documentation, have a look at the [official documentation of the `clang-format-node`](https://clang-format-node.lumir.page).

> [!IMPORTANT]
>
> Please participate in the issue regarding the introduction of a **glob pattern**. Click [here](https://github.com/lumirlumir/npm-clang-format-node/issues/14).

## Why I started this project

['angular/clang-format'](https://github.com/angular/clang-format) is no longer maintained. (See [#79](https://github.com/angular/clang-format/issues/79) [#82](https://github.com/angular/clang-format/issues/82) [#83](https://github.com/angular/clang-format/pull/83)) Nevertheless, new versions of `clang-format` continue to be released. Bugs are fixed, and new features are added. However, using `clang-format` directly in a Node.js environment without any support can be somewhat cumbersome. So I decided to make a **new**, **maintained** one.

Note that some feautures from 'angular/clang-format' are not included in this package. Specifically `check-clang-format` and `git-clang-format` are not used. There are a few reasons for this. Both commands **rely on Python**, so if you haven't installed Python, they cannot be executed. Many people would prefer if this package worked without dependencies beyond Node.js. **So, this package relies only on Node.js.** See the [Migration](#migration-from-angularclang-format) for alternative methods to `check-clang-format` and `git-clang-format`.

## Supported

### OS Platforms and Architectures

It supports **ALL** [**Tier1**](https://github.com/nodejs/node/blob/main/BUILDING.md#strategy) and some [**Tier2**](https://github.com/nodejs/node/blob/main/BUILDING.md#strategy) platforms of Node.js. *Note that the functionality cannot be guaranteed on platforms which is not mentioned below*.

(To see the full list of platforms supported by Node.js, click [here](<https://github.com/nodejs/node/blob/main/BUILDING.md#platform-list>).)

<br> | Operating System | Architectures    | Support Type |
---- | ---------------- | ---------------- | ------------ |
1    | macOS            | arm64            | Tier 1       |
2    | macOS            | x64              | Tier 1       |
3    | GNU/Linux        | armv7            | Tier 1       |
4    | GNU/Linux        | arm64            | Tier 1       |
5    | GNU/Linux        | ppc64le >=power8 | Tier 2       |
6    | GNU/Linux        | s390x            | Tier 2       |
7    | GNU/Linux        | x64              | Tier 1       |
8    | Windows          | x64              | Tier 1       |

> [!TIP]
>
> 1. If your platform isn't yet supported, you can build the `clang-format` native binary from the latest upstream clang sources. Refer to [`docs/llvm-build-linux.sh`](/docs/llvm-build-linux.sh) and [`.github/workflows/llvm-build-bump-pr.yml`](/.github/workflows/llvm-build-bump-pr.yml) for the build scripts for **Linux Shell** and **GitHub Actions**, respectively.
>
> 1. Or you can download `clang-format` native binary from [LLVM release assets](https://github.com/llvm/llvm-project/releases) that match your operating system platform and architecture like the lists below.
>
>     - `clang+llvm-18.1.7-aarch64-linux-gnu.tar.xz`
>     - `clang+llvm-18.1.7-armv7a-linux-gnueabihf.tar.gz`
>     - `clang+llvm-18.1.7-powerpc64-ibm-aix-7.2.tar.xz`
>     - `clang+llvm-18.1.7-x86_64-pc-windows-msvc.tar.xz`
>     - `and more...`

### Node.js

![Node Current](https://img.shields.io/node/v/clang-format-node)

The official support for <u>**Node.js version 16 and above**</u> has been confirmed through [testing](/.github/workflows/test-cross-platform.yml).

> [!NOTE]
>
> However, this package does not utilize the latest features of Node.js and is transpiled using Babel. Therefore, it is expected to work on versions significantly lower than the officially supported ones. (ex. `"node": ">= 0.7.10"`) Consequently, **if the current package operates on a version of Node.js that is lower than the officially supported version, it should be perfectly fine to use.**

### [GitHub Actions Runner Images](https://github.com/actions/runner-images?tab=readme-ov-file#available-images)

If you want to use `clang-format-node` in continuous integration (CI), You can use **GitHub Actions**. The following basic runner images are compatible(available) with `clang-format-node`.

Image                        | YAML Label                                                             | Included Software |
---------------------------- | ---------------------------------------------------------------------- | ----------------- |
macOS 15                     | `macos-15-large`                                                       | macOS-15          |
macOS 15 Arm64               | `macos-15` or `macos-15-xlarge`                                        | macOS-15-arm64    |
macOS 14                     | `macos-latest-large` or `macos-14-large`                               | macOS-14          |
macOS 14 Arm64               | `macos-latest`, `macos-14`, `macos-latest-xlarge` or `macos-14-xlarge` | macOS-14-arm64    |
macOS 13                     | `macos-13` or `macos-13-large`                                         | macOS-13          |
macOS 13 Arm64               | `macos-13-xlarge`                                                      | macOS-13-arm64    |
macOS 12                     | `macos-12` or `macos-12-large`                                         | macOS-12          |
Ubuntu 24.04                 | `ubuntu-latest` or `ubuntu-24.04`                                      | ubuntu-24.04      |
Ubuntu 22.04                 | `ubuntu-22.04`                                                         | ubuntu-22.04      |
Windows Server 2022          | `windows-latest` or `windows-2022`                                     | windows-2022      |

However, the following basic runner images are **NOT** compatible(available) with `clang-format-node`. It's because the ***dependencies*** for LLVM's latest release version are not compatible with the following images.

Image                   | YAML Label     | Included Software |
----------------------- | -------------- | ----------------- |
~~Ubuntu 20.04~~        | `ubuntu-20.04` | [ubuntu-20.04]    |
~~Windows Server 2019~~ | `windows-2019` | [windows-2019]    |

### Docker(Build) Images

I used the following Images to build `clang-format` excuatable binaries.

> [!TIP]
>
> If you want to see which software is included in **GitHub Actions runner**, click [here](https://github.com/actions/runner-images?tab=readme-ov-file#available-images) and refer to the 'Included Software' column.

Binary Folder Name | Docker(Build) Image                                                |
------------------ | ------------------------------------------------------------------ |
`darwin-arm64`     | GitHub Actions runner `macos-14`                                   |
`darwin-x64`       | GitHub Actions runner `macos-12`                                   |
`linux-arm`        | [`arm32v7/ubuntu:22.04`](https://hub.docker.com/r/arm32v7/ubuntu/) |
`linux-arm64`      | [`arm64v8/ubuntu:22.04`](https://hub.docker.com/r/arm64v8/ubuntu/) |
`linux-ppc64`      | [`ppc64le/ubuntu:22.04`](https://hub.docker.com/r/ppc64le/ubuntu/) |
`linux-s390x`      | [`s390x/ubuntu:22.04`](https://hub.docker.com/r/s390x/ubuntu/)     |
`linux-x64`        | GitHub Actions runner `ubuntu-22.04`                               |
`win32-x64`        | GitHub Actions runner `windows-2022`                               |

## Installation

### global

```bash
npm install -g clang-format-node
```

```bash
yarn global add clang-format-node
```

### local(devDependencies)

```bash
npm install --save-dev clang-format-node
```

```bash
yarn add --dev clang-format-node
```

## Usages

If you want to learn more about `clang-format` itself, see the [`clang-format style options`](https://clang.llvm.org/docs/ClangFormatStyleOptions.html).

> [!TIP]
>
> `clang-format` can take multiple files as arguments.
>
> ```bash
> npx clang-format -n -Werror file1.cpp file2.cpp src/file3.cpp
> ```

### Basic

#### Global

```bash
clang-format [options] [@<file>] [<file> ...]
```

#### Local

Use `npx` to run a locally installed package.

```bash
npx clang-format [options] [@<file>] [<file> ...]
```

#### Frequently used commands

1. `--version`: Check the version of `clang-format`.

    ``` bash
    npx clang-format --version
    ```

    Output example

    ```bash
    clang-format version 18.1.8 (https://github.com/llvm/llvm-project 3b5b5c1ec4a3095ab096dd780e84d7ab81f3d7ff)
    ```

    - `https://github.com/llvm/llvm-project`: Git repository URL for the LLVM project, which includes Clang.
    - `3b5b5c1ec4a3095ab096dd780e84d7ab81f3d7ff`: The commit hash of the Git repository where the source code for that version is stored. This hash allows you to precisely trace which source code version was used to generate `clang-format`.

1. `--help`: Help view additional options.

    ```bash
    npx clang-format --help
    ```

1. `--dry-run` or `-n`: Makes an **WARNING** when `example.cpp` is not correctly formatted.

    `--dry-run` and `-n` options are equivalent.

    ```bash
    npx clang-format --dry-run example.cpp
    ```

    ```bash
    npx clang-format -n example.cpp
    ```

1. `-Werror --dry-run` or `-Werror -n`: Makes an **ERROR** when `example.cpp` is not correctly formatted.

    > Similar to `eslint` or `prettier --check` commands.

    `--dry-run` and `-n` options are equivalent.

    ```bash
    npx clang-format -Werror --dry-run example.cpp
    ```

    ```bash
    npx clang-format -Werror -n example.cpp
    ```

1. `-i`: Automatically fix unformatted files.

    > Similar to `eslint --fix` or `prettier --write` commands.

    ```bash
    npx clang-format -i example.cpp
    ```

### Glob patterns

Unfortunately, there is no way to apply `clang-format` recursively. `*.cpp` will only match files in the current directory, not subdirectories. Even `**/*` doesn't work.

**So, you need to use the `find` command in Linux.** If you are a Windows user, use ***git bash***. then you can use the `find` command. The `find` command recursively searches through directories.

It is simple but can produce an error if the [**Argument list is too long**](https://stackoverflow.com/questions/11289551/argument-list-too-long-error-for-rm-cp-mv-commands). In that case, use `xargs`

#### Basic

To recursively search for all `.cpp` files in the current directory, use:

```bash
npx clang-format $(find . -name "*.cpp")
```

If the argument list is too long, use `xargs`. And if file names contain spaces or special characters, use `-print0` and `-0` options. `-print0` makes `find` output file names separated by null characters (`\0`), and `-0` tells `xargs` to correctly handle these null-separated file names.

```bash
find . -name "*.cpp" -print0 | xargs -0 npx clang-format
```

#### With regular expressions

To recursively search for all `.cpp` and `.h` files in the current directory using a regular expression, use:

```bash
npx clang-format $(find . -regex ".*\.\(cpp\|h\)")
```

#### With negation patterns

To exclude `excluded_file.cpp` from the `.cpp` files, use:

```bash
npx clang-format $(find . -name "*.cpp" ! -name "excluded_file.cpp")
```

### [`.clang-format-ignore`](https://clang.llvm.org/docs/ClangFormat.html#clang-format-ignore)

You can create `.clang-format-ignore` files to make `clang-format` ignore certain files. A `.clang-format-ignore` file consists of patterns of file path names. It has the following format:

- A blank line is skipped.
- Leading and trailing spaces of a line are trimmed.
- A line starting with a hash (`#`) is a comment.
- A non-comment line is a single pattern.
- The slash (`/`) is used as the directory separator.
- A pattern is relative to the directory of the `.clang-format-ignore` file (or the root directory if the pattern starts with a slash). Patterns containing drive names (e.g. `C:`) are not supported.
- Patterns follow the rules specified in [**POSIX 2.13.1, 2.13.2, and Rule 1 of 2.13.3.**](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html#tag_18_13)
- A pattern is negated if it starts with a bang (`!`).

To match all files in a directory, use e.g. `foo/bar/*`. To match all files in the directory of the `.clang-format-ignore` file, use `*`. Multiple `.clang-format-ignore` files are supported similar to the `.clang-format` files, with a lower directory level file voiding the higher level ones.

### Use with `husky` and `lint-staged`

Ensuring that changes to your code are properly formatted is an important part of your development workflow. Use `husky` and `lint-staged` for your continuous integration process.

#### `husky` (v8.x)

```bash
# .husky/pre-commit

npx lint-staged
```

#### `lint-staged` (v15.x)

1. Check

    ```jsonc
    /* package.json */

    {
      // ...
      "lint-staged": {
        "*.{c,cpp,h}": "npx clang-format -Werror -n",
      }
      // ...
    }
    ```

1. Fix

    ```jsonc
    /* package.json */

    {
      // ...
      "lint-staged": {
        "*.{c,cpp,h}": "npx clang-format -i",
      }
      // ...
    }
    ```

> [!TIP]
>
> If `example1.cpp` and `example2.c` are staged, then `npx clang-format -Werror -n example1.cpp example2.c` will be excuted.

## Migration from 'angular/clang-format'

### `check-clang-format`

This package only uses native `clang-format` features to check formatting. The following commands will produce an error if the target files are not correctly formatted. So use them with `husky` and `lint-staged`. (`--dry-run` and `-n` options are equivalent.)

```bash
npx clang-format -Werror --dry-run example.cpp
```

```bash
npx clang-format -Werror -n example.cpp
```

### `git-clang-format`

Use [`husky`](https://typicode.github.io/husky/) and [`lint-staged`](https://github.com/lint-staged/lint-staged) for the `pre-commit` hook instead. See [Use with `husky` and `lint-staged`](#use-with-husky-and-lint-staged) for details.

## Contributing

Thanks for having attention to this package.🙇‍♂️ Issues and PRs are always welcome.🎉

I recommend you to read the guides on [LLVM and clang-format mentioned in issues tab](https://github.com/lumirlumir/npm-clang-format-node/issues/new/choose) before contributing.

### Installation

1. Fork it.

1. Clone it to your local directory. ([Git](https://git-scm.com/downloads) is required.)

    ```bash
    git clone https://github.com/lumirlumir/npm-clang-format-node.git
    ```

1. Move to the `npm-clang-format-node` directory.

    ```bash
    cd npm-clang-format-node
    ```

1. Install npm packages. ([Node.js](https://nodejs.org/en) is required.)

    ```bash
    npm install
    ```

1. Edit codes.

1. Create `my-branch` branch.

    ```bash
    git switch -c my-branch
    ```

1. Commit your changes. (`husky` and `lint-staged` will lint and test your changed files!)

    ```bash
    git commit -am "commit type: title"
    ```

1. Push them to your remote branch.

1. Submit a pull request.👍

### About `os.platform()` and `os.arch()` in Node.js

#### [os.platform()](https://nodejs.org/docs/v20.17.0/api/os.html#osplatform)

The return value is equivalent to `process.platform`.

OS      | Return value of `os.platform()`    |
------- | ---------------------------------- |
macOS   | `darwin`                           |
Linux   | `linux`                            |
Windows | `win32`                            |

#### [os.arch()](https://nodejs.org/docs/v20.17.0/api/os.html#osarch)

The return value is equivalent to `process.arch`.

Architecture       | Return value of `os.arch()`    | LLVM      | Docker Platform | Docker Ubuntu Image |
------------------ | ------------------------------ | --------- | --------------- | ------------------- |
arm(armv7, armv7l) | `arm`                          | `ARM`     | `arm/v7`        | `arm32v7`           |
arm64              | `arm64`                        | `AArch64` | `arm64/v8`      | `arm64v8`           |
ppc64le[^1]        | `ppc64`                        | `PowerPC` | `ppc64le`       | `ppc64le`           |
s390x              | `s390x`                        | `SystemZ` | `s390x`         | `s390x`             |
x64                | `x64`                          | `X86`     | `amd64`         | `amd64`             |

[^1]: `le` stands for little-endian, but the `os.arch()` function does not distinguish between endianness and returns a single value.

### Build process

Some packages for **cross-compilation** have been deprecated, making it difficult to make build processes directly, so **cross-compilation** is not used. Instead, I utilize **QEMU** and **Docker** to build cross-compiled binaries.

If you want to learn more about the images I used, see [Docker(Build) Images](#dockerbuild-images)

## Versioning

This project adheres to [Semantic Versioning](https://semver.org/).

The BREAKING CHANGES, features and bug fixes from [LLVM](https://github.com/llvm/llvm-project/releases) will be reflected in this package.

The release title includes the LLVM version, like `v1.0.0 (llvmorg-18.1.8)`. See [`.clang-format-version`](/.clang-format-version) to check the exact current LLVM version.

## Change Log

See [`CHANGELOG.md`](/CHANGELOG.md)

## License

[MIT](/LICENSE) under [LLVM Apache License 2.0](https://github.com/llvm/llvm-project/blob/main/LICENSE.TXT)
