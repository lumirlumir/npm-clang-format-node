# clang-format-node

![GitHub Release](https://img.shields.io/github/v/release/lumirlumir/npm-clang-format-node?label=release%20(LLVM%20version)&color=83ba63&display_name=release)
[![NPM Version](https://img.shields.io/npm/v/clang-format-node?color=83ba63)](https://www.npmjs.com/package/clang-format-node)
![NPM Downloads](https://img.shields.io/npm/dm/clang-format-node?color=83ba63)
![Node Current](https://img.shields.io/node/v/clang-format-node?color=83ba63)

[![lint](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/lint.yml/badge.svg)](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/lint.yml)
[![test](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test.yml/badge.svg)](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test.yml)
[![test-cross-platform](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test-cross-platform.yml/badge.svg)](https://github.com/lumirlumir/npm-clang-format-node/actions/workflows/test-cross-platform.yml)
[![codecov](https://codecov.io/gh/lumirlumir/npm-clang-format-node/graph/badge.svg?token=69BF05THA2)](https://codecov.io/gh/lumirlumir/npm-clang-format-node)

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

See the [supported](https://clang-format-node.lumir.page/docs/get-started/supported) section of the documentation, which lists the following:

- OS Platforms and Architectures
- Node.js Version
- GitHub Actions Runner Images
- Docker Build Images

## Releases

Each package intends to release a new npm package for every **latest** release of `clang-format` and `git-clang-format`. Automated GitHub Actions check for the latest LLVM release every week, builds all packages using their own pipeline, and makes a pull request. **All processes are automated**. If you are interested in the build process, take a look at [`.github/workflows/llvm-build-bump-pr.yml`](https://github.com/lumirlumir/npm-clang-format-node/blob/main/.github/workflows/llvm-build-bump-pr.yml).

## Contributing (Issues & Pull Requests)

Thanks for having attention to this package🙇‍♂️. We appreciate you spending the time to work on these things. Every issue and pull request about bugs, suggestions and the other topics is always welcome!

Please read our [Code of Conduct](https://github.com/lumirlumir/npm-clang-format-node/blob/main/CODE_OF_CONDUCT.md) and [Contributing](https://github.com/lumirlumir/npm-clang-format-node/blob/main/CONTRIBUTING.md) Guides before you work on these things. We also recommend you to read the [Guides on LLVM `clang-format`](http://clang-format-node.lumir.page/docs/further-reading/guides-on-llvm-clang-format) mentioned in the documentation before contributing.

## Code of Conduct

See [Code of Conduct](https://github.com/lumirlumir/npm-clang-format-node/blob/main/CODE_OF_CONDUCT.md).

## Change Log

See [Change Log](https://github.com/lumirlumir/npm-clang-format-node/blob/main/CHANGELOG.md).

## Versioning

See [Versioning](http://clang-format-node.lumir.page/docs/community/versioning).

## Security

See [Security](https://github.com/lumirlumir/npm-clang-format-node/blob/main/SECURITY.md).

## License

[MIT](https://github.com/lumirlumir/npm-clang-format-node/blob/main/LICENSE.md) under [LLVM Apache License 2.0](https://github.com/llvm/llvm-project/blob/main/LICENSE.TXT).
