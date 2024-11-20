<!-- markdownlint-disable-next-line -->
# <div align="center"> clang-format-node </div>

<!-- markdownlint-disable-next-line -->
<div align="center">

⭐If you like this package, please give it a star on [GitHub](https://github.com/lumirlumir/npm-clang-format-node)!⭐<br>
Your support helps us improve and maintain the project.

<image src="https://llvm.org/img/LLVMWyvernSmall.png" width="350px" height="220px"/><br /><br />

![GitHub Release](https://img.shields.io/github/v/release/lumirlumir/npm-clang-format-node?label=release%20(LLVM%20version)&color=violet&display_name=release)
[![NPM Version](https://img.shields.io/npm/v/clang-format-node)](https://www.npmjs.com/package/clang-format-node)
![NPM Downloads](https://img.shields.io/npm/dm/clang-format-node)
![Node Current](https://img.shields.io/node/v/clang-format-node)

[![lint](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/lint.yml/badge.svg)](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/lint.yml)
[![test](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test.yml/badge.svg)](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test.yml)
[![test-cross-platform](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test-cross-platform.yml/badge.svg)](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test-cross-platform.yml)
[![codecov](https://codecov.io/gh/lumirlumir/npm-clang-format-node/graph/badge.svg?token=69BF05THA2)](https://codecov.io/gh/lumirlumir/npm-clang-format-node)

[![Static Badge](https://img.shields.io/badge/Official_Documentation-skyblue?style=flat&logo=gitbook&labelColor=gray)](https://clang-format-node.lumir.page)

Node repackaging(wrapping) of the **LLVM Clang's** `clang-format` and `git-clang-format` native binary inspired by ['angular/clang-format'](https://github.com/angular/clang-format).🐉

<!-- markdownlint-disable-next-line -->
</div>

> [!IMPORTANT]
>
> Please participate in the issue regarding the introduction of a **glob pattern**. Click [here](https://github.com/lumirlumir/npm-clang-format-node/issues/14).

## Included Packages

This repository is maintained as a **monorepo** and includes the following packages.

1. `clang-format-node` [![NPM Version](https://img.shields.io/npm/v/clang-format-node)](https://www.npmjs.com/package/clang-format-node):
Node repackaging of the `clang-format` native binary. (The **CORE** package.) [『Docs』](/docs/02-packages/01-clang-format-node.md), [『Repository』](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-node), [『npm』](https://www.npmjs.com/package/clang-format-node)

1. `clang-format-git` [![NPM Version](https://img.shields.io/npm/v/clang-format-git)](https://www.npmjs.com/package/clang-format-git): Node repackaging of the `git-clang-format` Python script as a standalone native binary to **allow execution without a Python dependency**. [『Docs』](/docs/02-packages/02-clang-format-git.md), [『Repository』](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-git), [『npm』](https://www.npmjs.com/package/clang-format-git)

1. `clang-format-git-python` [![NPM Version](https://img.shields.io/npm/v/clang-format-git-python)](https://www.npmjs.com/package/clang-format-git-python): Node repackaging of the `git-clang-format` Python script. **This package requires Python3 as a dependency**. [『Docs』](/docs/02-packages/03-clang-format-git-python.md), [『Repository』](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-git-python), [『npm』](https://www.npmjs.com/package/clang-format-git-python)

## Supported

See the [supported](/docs/01-introduction/05-supported.md) documentation, which lists the supported 'OS Platforms and Architectures', 'Node.js Versions', 'GitHub Actions Runner Images', and 'Docker(Build) Images'.

## Releases

Each package intends to release a new npm package for every **latest** release of the `clang-format` and `git-clang-format`. It **checks** for the latest LLVM release every week, builds all packages using its own pipeline, and makes a pull request. **All processes are run automatically**. If you are interested in the build process, take a look at [`.github/workflows/llvm-build-bump-pr.yml`](/.github/workflows/llvm-build-bump-pr.yml).

## Contributing (Issues & Pull Requests)

Thanks for having attention to this package🙇‍♂️. We appreciate you spending the time to work on these things. Every issue and pull request about bugs, suggestions and the other topics is always welcome!

Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) and [Contributing Guides](/CONTRIBUTING.md) before you work on these things. We also recommend you to read the [Guides on LLVM and `clang-format`](docs/03-others/04-guides-on-llvm-and-clang-format.md) mentioned in the documentation before contributing.

## Documentation

For full documentation, see the [official documentation of the `clang-format-node`](https://clang-format-node.lumir.page) or [`docs` directory of `clang-format-node` repository](https://github.com/lumirlumir/npm-clang-format-node/tree/main/docs).

## Versioning

See [Versioning](/docs/04-community/02-versioning.md).

## Change Log

See [Change Log](/CHANGELOG.md).

## Code of Conduct

See [Code of Conduct](/CODE_OF_CONDUCT.md).

## Security

See [Security](/SECURITY.md).

## License

[MIT](/LICENSE.md) under [LLVM Apache License 2.0](https://github.com/llvm/llvm-project/blob/main/LICENSE.TXT).
