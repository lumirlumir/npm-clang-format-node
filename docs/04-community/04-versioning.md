# Versioning

This project adheres to [Semantic Versioning](https://semver.org/).

The BREAKING CHANGES, features and bug fixes from [LLVM](https://github.com/llvm/llvm-project/releases) will be reflected in this package.

In addition to version updates that correspond to the LLVM version upgrade, the version will also increment based on the BREAKING CHANGES, addition of new features or bug fixes in the package.

The release title includes the LLVM version, like `v1.0.0 (llvmorg-18.1.8)`. See [`.clang-format-version`](https://github.com/lumirlumir/npm-clang-format-node/blob/main/.clang-format-version) to check the exact current LLVM version.

---

Which Node.js versions does ESLint support?
ESLint updates the supported Node.js versions with each major release of ESLint. At that time, ESLint's supported Node.js versions are updated to be:

The most recent maintenance release of Node.js
The lowest minor version of the Node.js LTS release that includes the features the ESLint team wants to use.
The Node.js Current release
