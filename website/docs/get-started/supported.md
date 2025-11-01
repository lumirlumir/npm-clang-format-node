---
description: "Comprehensive support for platforms, architectures, and Node.js versions, with CI integration options for `clang-format-node` across GitHub Actions and Docker images."
---

# Supported

The following content applies to all packages within [`clang-format-node`](https://github.com/lumirlumir/npm-clang-format-node) repository.

## OS Platforms and Architectures

Each package supports **ALL** [**Tier1**](https://github.com/nodejs/node/blob/main/BUILDING.md#strategy) and some [**Tier2**](https://github.com/nodejs/node/blob/main/BUILDING.md#strategy) platforms of Node.js. *Note that the functionality cannot be guaranteed on platforms which is not mentioned below*.

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
> 1. If your platform isn't yet supported, you can build the `clang-format` native binary from the latest upstream Clang sources. Refer to [Build Process](../further-reading/build-process.md) and [`.github/workflows/llvm-build-bump-pr.yml`](https://github.com/lumirlumir/npm-clang-format-node/blob/main/.github/workflows/llvm-build-bump-pr.yml) for the build scripts for **Linux Shell** and **GitHub Actions**, respectively.
>
> 1. Or you can download `clang-format` native binary from [LLVM release assets](https://github.com/llvm/llvm-project/releases) that match your operating system platform and architecture like the lists below.
>
>     - `clang+llvm-18.1.8-aarch64-linux-gnu.tar.xz`
>     - `clang+llvm-18.1.8-armv7a-linux-gnueabihf.tar.gz`
>     - `clang+llvm-18.1.8-powerpc64-ibm-aix-7.2.tar.xz`
>     - `clang+llvm-18.1.8-x86_64-pc-windows-msvc.tar.xz`
>     - and more...

## Node.js Version

![Node Current](https://img.shields.io/node/v/clang-format-node)

The official support for <u>**Node.js version 16 and above**</u> has been confirmed through [testing](https://github.com/lumirlumir/npm-clang-format-node/blob/main/.github/workflows/test-cross-platform.yml).

However, this package does not utilize the latest features of Node.js and is transpiled using Babel. Therefore, it is expected to work on versions significantly lower than the officially supported ones. (ex. `"node": ">= 0.7.10"`) Consequently, **if the current package operates on a version of Node.js that is lower than the officially supported version, it should be perfectly fine to use.**

## [GitHub Actions Runner Images](https://github.com/actions/runner-images?tab=readme-ov-file#available-images)

If you want to use `clang-format-node` or `clang-format-git` in continuous integration (CI), You can use **GitHub Actions**. The following basic runner images are compatible(available) with `clang-format-node`.

Image                        | YAML Label                                                             | Included Software |
---------------------------- | ---------------------------------------------------------------------- | ----------------- |
macOS 15                     | `macos-15-large`                                                       | macOS-15          |
macOS 15 Arm64               | `macos-15` or `macos-15-xlarge`                                        | macOS-15-arm64    |
macOS 14                     | `macos-latest-large` or `macos-14-large`                               | macOS-14          |
macOS 14 Arm64               | `macos-latest`, `macos-14`, `macos-latest-xlarge` or `macos-14-xlarge` | macOS-14-arm64    |
Ubuntu 24.04                 | `ubuntu-latest` or `ubuntu-24.04`                                      | ubuntu-24.04      |
Ubuntu 22.04                 | `ubuntu-22.04`                                                         | ubuntu-22.04      |
Windows Server 2022          | `windows-latest` or `windows-2022`                                     | windows-2022      |

However, the following basic runner images are **NOT** compatible(available) with `clang-format-node`. It's because the ***dependencies*** for LLVM's latest release version are not compatible with the following images.

Image                   | YAML Label     | Included Software |
----------------------- | -------------- | ----------------- |
~~Ubuntu 20.04~~        | `ubuntu-20.04` | ubuntu-20.04      |
~~Windows Server 2019~~ | `windows-2019` | windows-2019      |

## Docker Build Images

We used the following Images to build `clang-format` excuatable binaries.

> [!TIP]
>
> If you want to see which software is included in **GitHub Actions runner**, click [here](https://github.com/actions/runner-images?tab=readme-ov-file#available-images) and refer to the 'Included Software' column.

Binary Folder Name | Docker **Build** Image                                             | Docker **Test** Image                                              |
------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
`darwin-arm64`     | GitHub Actions runner `macos-14`                                   | GitHub Actions runner `macos-14`                                   |
`darwin-x64`       | GitHub Actions runner `macos-15-intel`                             | GitHub Actions runner `macos-15-intel`                             |
`linux-arm`        | [`python:3.10.18-bullseye`](https://hub.docker.com/_/python)       | [`arm32v7/ubuntu:22.04`](https://hub.docker.com/r/arm32v7/ubuntu/) |
`linux-arm64`      | [`python:3.10.18-bullseye`](https://hub.docker.com/_/python)       | [`arm64v8/ubuntu:22.04`](https://hub.docker.com/r/arm64v8/ubuntu/) |
`linux-ppc64`      | [`buildpack-deps:jammy`](https://hub.docker.com/_/buildpack-deps/) | [`ppc64le/ubuntu:22.04`](https://hub.docker.com/r/ppc64le/ubuntu/) |
`linux-s390x`      | [`buildpack-deps:jammy`](https://hub.docker.com/_/buildpack-deps/) | [`s390x/ubuntu:22.04`](https://hub.docker.com/r/s390x/ubuntu/)     |
`linux-x64`        | GitHub Actions runner `ubuntu-22.04`                               | GitHub Actions runner `ubuntu-22.04`                               |
`win32-x64`        | GitHub Actions runner `windows-2022`                               | GitHub Actions runner `windows-2022`                               |
