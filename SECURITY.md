# Security

## Binary Files

Some may have concerns about the security of binary files, but the following points should provide assurance about this project:

1. First and foremost, we have no intention of harming anyone's project.

1. Second, our build processes are fully transparent. You can review exactly how these binaries are built and track the pull requests showing their origins.

    - See [`llvm-build-bump-pr.yml`](https://github.com/lumirlumir/npm-clang-format-node/blob/main/.github/workflows/llvm-build-bump-pr.yml).
    - See the [Pull Request list on GitHub](https://github.com/lumirlumir/npm-clang-format-node/pulls?q=is%3Apr+%28deps%29%3A+bump+LLVM+from+label%3Adependencies).

1. Third, when you run the command `clang-format --version`, you can verify the current **LLVM version**, **repository URL**, and **commit SHA**, as shown below:

    ```sh
    clang-format version 18.1.8 (https://github.com/llvm/llvm-project 3b5b5c1ec4a3095ab096dd780e84d7ab81f3d7ff)
    ```

    - `18.1.8`: The current LLVM version.
    - `https://github.com/llvm/llvm-project`: The Git repository URL for the LLVM project, which includes Clang.
    - `3b5b5c1ec4a3095ab096dd780e84d7ab81f3d7ff`: The commit hash for the specific version used to build `clang-format`, allowing you to trace the source code exactly.

## Reporting a Vulnerability

If you discover any security vulnerabilities in this package, please report them immediately. We take security seriously and will address all legitimate reports in a timely manner.

### How to Report

To report a vulnerability, please email us at <rpfos@naver.com>. Provide as much detail as possible about the vulnerability, including:

- The nature of the vulnerability.
- Steps to reproduce the issue.
- Any potential risks or impacts on users.
- Your contact information for further clarification.

### Response Process

1. We will acknowledge receipt of your report promptly and begin investigating the issue.
1. After validating the report, we will work to fix the vulnerability and release an update as soon as possible.
1. You will be informed of the resolution once the fix is deployed.
1. Security patches will be communicated through GitHub releases and other relevant channels.

## Security Best Practices

We recommend following these best practices to help maintain the security of your application when using this package:

- Always use the latest version.
- Regularly update your dependencies to include the latest security fixes.
- Review and monitor your own usage for potential security issues.

If you have any questions or need further information, please don't hesitate to contact us.

## Supported Versions

Security updates are applied only to the most recent releases.
