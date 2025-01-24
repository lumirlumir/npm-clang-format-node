---
description: "Guide for building the `clang-format` native binary on Linux and cross-platform build using QEMU and Docker."
---

# Build process

## How to build `clang-format` native binary on Linux

You can build `clang-format` native binary on Linux using the script below.

```bash
sudo apt update -y
sudo apt install -y git python3 g++ cmake ninja-build

# Replace llvmorg-18.1.8 with your desired version. Check the tags at https://github.com/llvm/llvm-project/tags
git clone --depth 1 --branch llvmorg-18.1.8 https://github.com/llvm/llvm-project.git
cd llvm-project

cmake -S llvm -B build-linux-x64 -G Ninja \
  -DLLVM_ENABLE_PROJECTS="clang" \
  -DCMAKE_BUILD_TYPE=MinSizeRel \

ninja -C build clang-format

# Check clang-format version
build/bin/clang-format --version
```

## Cross Platform Build

Some packages for **cross-compilation** have been deprecated, making it difficult to make build processes directly, so **cross-compilation** is not used. Instead, I utilize **QEMU** and **Docker** to build cross-compiled binaries.

If you want to learn more about the images I used, see [Docker Build Images](../get-started/supported.md#docker-build-images).
