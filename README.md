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

[![Maintainability](https://api.codeclimate.com/v1/badges/4bcedf673457b80b9b18/maintainability)](https://codeclimate.com/github/lumirlumir/npm-clang-format-node/maintainability)
[![Static Badge](https://img.shields.io/badge/Official_Documentation-skyblue?style=flat&logo=gitbook&labelColor=gray)](https://clang-format-node.lumir.page)

Node wrapper for LLVM Clang's `clang-format` and `git-clang-format` native binaries inspired by [angular/clang-format](https://github.com/angular/clang-format).🐉

<!-- markdownlint-disable-next-line -->
</div>

> [!IMPORTANT]
>
> Please participate in the issue regarding the introduction of a **glob pattern**. Click [here](https://github.com/lumirlumir/npm-clang-format-node/issues/14).

## Included Packages

This repository is maintained as a **monorepo** and includes the following **three** packages.

### `clang-format-node` [![NPM Version](https://img.shields.io/npm/v/clang-format-node)](https://www.npmjs.com/package/clang-format-node)

> [Docs](/docs/02-packages/01-clang-format-node.md) | [Repository](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-node) | [npm](https://www.npmjs.com/package/clang-format-node)

Node wrapper for `clang-format` native binary inspired by angular/clang-format. (The **CORE** package.)

### `clang-format-git` [![NPM Version](https://img.shields.io/npm/v/clang-format-git)](https://www.npmjs.com/package/clang-format-git)

> [Docs](/docs/02-packages/02-clang-format-git.md) | [Repository](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-git) | [npm](https://www.npmjs.com/package/clang-format-git)

Node wrapper for `git-clang-format` Python script as a standalone native binary to **allow execution without a Python dependency**.

### `clang-format-git-python` [![NPM Version](https://img.shields.io/npm/v/clang-format-git-python)](https://www.npmjs.com/package/clang-format-git-python)

> [Docs](/docs/02-packages/03-clang-format-git-python.md) | [Repository](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-git-python) | [npm](https://www.npmjs.com/package/clang-format-git-python)

Node wrapper for `git-clang-format` Python script. **This package requires Python3 as a dependency**.

## Supported

See the [supported](/docs/01-introduction/05-supported.md) section of the documentation, which lists the following:

- OS Platforms and Architectures
- Node.js Version
- GitHub Actions Runner Images
- Docker Build Images

## Releases

Each package intends to release a new npm package for every **latest** release of `clang-format` and `git-clang-format`. Automated GitHub Actions check for the latest LLVM release every week, builds all packages using their own pipeline, and makes a pull request. **All processes are automated**. If you are interested in the build process, take a look at [`.github/workflows/llvm-build-bump-pr.yml`](/.github/workflows/llvm-build-bump-pr.yml).

## Documentation

For full documentation, see the [official documentation of the `clang-format-node`](https://clang-format-node.lumir.page) or [`docs` directory of `clang-format-node` repository](https://github.com/lumirlumir/npm-clang-format-node/tree/main/docs).

## Contributing (Issues & Pull Requests)

Thanks for having attention to this package🙇‍♂️. We appreciate you spending the time to work on these things. Every issue and pull request about bugs, suggestions and the other topics is always welcome!

Please read our [Contributing](/CONTRIBUTING.md) Guides and [Code of Conduct](/CODE_OF_CONDUCT.md) before you work on these things. We also recommend you to read the [Guides on LLVM and `clang-format`](docs/03-others/04-guides-on-llvm-and-clang-format.md) mentioned in the documentation before contributing.

## Code of Conduct

See [Code of Conduct](/CODE_OF_CONDUCT.md).

## Change Log

See [Change Log](/CHANGELOG.md).

## Versioning

See [Versioning](/docs/04-community/02-versioning.md).

## Security

See [Security](/SECURITY.md).

## License

[MIT](/LICENSE.md) under [LLVM Apache License 2.0](https://github.com/llvm/llvm-project/blob/main/LICENSE.TXT).
