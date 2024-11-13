# Security

Some may have concerns about the security of binary files, but the following points should provide assurance about this project:

1. **First and foremost, we have no intention of harming anyone’s project.**

1. **Second, our build process is fully transparent.** You can review exactly how these binaries are built and track the pull requests showing their origins.

    - See [`llvm-build-bump-pr.yml`](https://github.com/lumirlumir/npm-clang-format-node/blob/main/.github/workflows/llvm-build-bump-pr.yml).
    - See the [pull request list](https://github.com/lumirlumir/npm-clang-format-node/pulls?q=is%3Apr+is%3Aclosed+llvm+build%28deps%29%3A+bump+LLVM).

1. **Third,** when you run the command `clang-format --version`, you can verify the current **LLVM version**, **repository URL**, and **commit SHA**, as shown below:

    ```bash
    clang-format version 18.1.8 (https://github.com/llvm/llvm-project 3b5b5c1ec4a3095ab096dd780e84d7ab81f3d7ff)
    ```

    - `https://github.com/llvm/llvm-project`: The Git repository URL for the LLVM project, which includes Clang.
    - `3b5b5c1ec4a3095ab096dd780e84d7ab81f3d7ff`: The commit hash for the specific version used to build `clang-format`, allowing you to trace the source code exactly.
