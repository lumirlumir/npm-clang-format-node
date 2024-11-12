# About `os.platform()` and `os.arch()` in Node.js

## [os.platform()](https://nodejs.org/docs/v20.17.0/api/os.html#osplatform)

The return value is equivalent to `process.platform`.

OS      | Return value of `os.platform()`    |
------- | ---------------------------------- |
macOS   | `darwin`                           |
Linux   | `linux`                            |
Windows | `win32`                            |

## [os.arch()](https://nodejs.org/docs/v20.17.0/api/os.html#osarch)

The return value is equivalent to `process.arch`.

Architecture       | Return value of `os.arch()`    | LLVM      | Docker Platform | Docker Ubuntu Image |
------------------ | ------------------------------ | --------- | --------------- | ------------------- |
arm(armv7, armv7l) | `arm`                          | `ARM`     | `arm/v7`        | `arm32v7`           |
arm64              | `arm64`                        | `AArch64` | `arm64/v8`      | `arm64v8`           |
ppc64le[^1]        | `ppc64`                        | `PowerPC` | `ppc64le`       | `ppc64le`           |
s390x              | `s390x`                        | `SystemZ` | `s390x`         | `s390x`             |
x64                | `x64`                          | `X86`     | `amd64`         | `amd64`             |

[^1]: `le` stands for little-endian, but the `os.arch()` function does not distinguish between endianness and returns a single value.
