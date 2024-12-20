# Security

Some may have concerns about the security of binary files, but the following points should provide assurance about this project:

1. First and foremost, we have no intention of harming anyone’s project.

1. Second, our build processes are fully transparent. You can review exactly how these binaries are built and track the pull requests showing their origins.

    - See [`llvm-build-bump-pr.yml`](https://github.com/lumirlumir/npm-clang-format-node/blob/main/.github/workflows/llvm-build-bump-pr.yml).
    - See the [Pull Request list on GitHub](https://github.com/lumirlumir/npm-clang-format-node/pulls?q=is%3Apr+is%3Aclosed+llvm+build%28deps%29%3A+bump+LLVM).

1. Third, when you run the command `clang-format --version`, you can verify the current **LLVM version**, **repository URL**, and **commit SHA**, as shown below:

    ```bash
    clang-format version 18.1.8 (https://github.com/llvm/llvm-project 3b5b5c1ec4a3095ab096dd780e84d7ab81f3d7ff)
    ```

    - `18.1.8`: The current LLVM version.
    - `https://github.com/llvm/llvm-project`: The Git repository URL for the LLVM project, which includes Clang.
    - `3b5b5c1ec4a3095ab096dd780e84d7ab81f3d7ff`: The commit hash for the specific version used to build `clang-format`, allowing you to trace the source code exactly.

## Reporting a Vulnerability

If you believe you have found a security vulnerability, we encourage you to let us know right away.

We will investigate all legitimate reports and do our best to quickly fix the problem.

Email <rpfos@naver.com> to disclose any security vulnerabilities.
