# clang-format-node

![GitHub Release](https://img.shields.io/github/v/release/lumirlumir/npm-clang-format-node?label=release%20(LLVM%20version)&color=417f38&display_name=release)
[![NPM Version](https://img.shields.io/npm/v/clang-format-node?color=417f38)](https://www.npmjs.com/package/clang-format-node)
![NPM Downloads](https://img.shields.io/npm/dm/clang-format-node?color=417f38)
![Node Current](https://img.shields.io/node/v/clang-format-node?color=417f38)

[![lint](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/lint.yml/badge.svg)](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/lint.yml)
[![test](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test.yml/badge.svg)](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test.yml)
[![test-cross-platform](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test-cross-platform.yml/badge.svg)](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test-cross-platform.yml)
[![codecov](https://codecov.io/gh/lumirlumir/npm-clang-format-node/graph/badge.svg?token=69BF05THA2)](https://codecov.io/gh/lumirlumir/npm-clang-format-node)
[![Maintainability](https://api.codeclimate.com/v1/badges/4bcedf673457b80b9b18/maintainability)](https://codeclimate.com/github/lumirlumir/npm-clang-format-node/maintainability)

> [!IMPORTANT]
>
> If you like this package, please give it a star on [GitHub](https://github.com/lumirlumir/npm-clang-format-node)!⭐<br/>
> Your support helps us improve and maintain the project.

Node wrapper for LLVM Clang's `clang-format` and `git-clang-format` native binaries inspired by [angular/clang-format](https://github.com/angular/clang-format).🐉

## Documentation

For full documentation, see the [official documentation of the `clang-format-node`](https://clang-format-node.lumir.page).

## Included Packages

This repository is maintained as a **monorepo** and includes the following **three** packages.

### `clang-format-node` - <small>[Repository](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-node) | [npm](https://www.npmjs.com/package/clang-format-node)</small>

[![NPM Version](https://img.shields.io/npm/v/clang-format-node)](https://www.npmjs.com/package/clang-format-node)
![Node Current](https://img.shields.io/node/v/clang-format-node)

Node wrapper for `clang-format` native binary inspired by angular/clang-format. (The **CORE** package.)

### `clang-format-git` - <small>[Repository](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-git) | [npm](https://www.npmjs.com/package/clang-format-git)</small>

[![NPM Version](https://img.shields.io/npm/v/clang-format-git)](https://www.npmjs.com/package/clang-format-git)
![Node Current](https://img.shields.io/node/v/clang-format-git)

Node wrapper for `git-clang-format` Python script as a standalone native binary to **allow execution without a Python dependency**.

### `clang-format-git-python` - <small>[Repository](https://github.com/lumirlumir/npm-clang-format-node/tree/main/packages/clang-format-git-python) | [npm](https://www.npmjs.com/package/clang-format-git-python)</small>

[![NPM Version](https://img.shields.io/npm/v/clang-format-git-python)](https://www.npmjs.com/package/clang-format-git-python)
![Node Current](https://img.shields.io/node/v/clang-format-git-python)

Node wrapper for `git-clang-format` Python script. **This package requires Python3 as a dependency**.

## Supported

See the [supported](/docs/01-introduction/05-supported.md) section of the documentation, which lists the following: <!--TODO: fix link-->

- OS Platforms and Architectures
- Node.js Version
- GitHub Actions Runner Images
- Docker Build Images

## Releases

Each package intends to release a new npm package for every **latest** release of `clang-format` and `git-clang-format`. Automated GitHub Actions check for the latest LLVM release every week, builds all packages using their own pipeline, and makes a pull request. **All processes are automated**. If you are interested in the build process, take a look at [`.github/workflows/llvm-build-bump-pr.yml`](/.github/workflows/llvm-build-bump-pr.yml).

## Contributing (Issues & Pull Requests)

Thanks for having attention to this package🙇‍♂️. We appreciate you spending the time to work on these things. Every issue and pull request about bugs, suggestions and the other topics is always welcome!

Please read our [Code of Conduct](/CODE_OF_CONDUCT.md) and [Contributing](/CONTRIBUTING.md) Guides before you work on these things. We also recommend you to read the [Guides on LLVM and `clang-format`](docs/03-others/04-guides-on-llvm-and-clang-format.md) mentioned in the documentation before contributing. <!-- TODO: fix link -->

## Code of Conduct

See [Code of Conduct](/CODE_OF_CONDUCT.md).

## Change Log

See [Change Log](/CHANGELOG.md).

## Versioning

See [Versioning](/docs/04-community/02-versioning.md). <!-- TODO: fix link -->

## Security

See [Security](/SECURITY.md).

## License

[MIT](/LICENSE.md) under [LLVM Apache License 2.0](https://github.com/llvm/llvm-project/blob/main/LICENSE.TXT).
