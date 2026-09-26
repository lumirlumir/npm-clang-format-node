---
description: "Instructions for using `clang-format` and `git-clang-format` CLI tools, including common commands and options."
---

# CLI

> [!IMPORTANT]
>
> The CLI examples in this page only cover the most common options and do not cover all the available options. To see the full list of options, check the [Clang-Format CLI](https://clang.llvm.org/docs/ClangFormat.html) page which covers `clang-format` and `git-clang-format`.

## `clang-format`

> [!NOTE]
>
> This feature is included in the [`clang-format-node`](../apis/clang-format-node.md) package.

If you want to learn more about `clang-format` itself, see the [Clang-Format Style Options](https://clang.llvm.org/docs/ClangFormatStyleOptions.html).

> [!TIP]
>
> `clang-format` can take multiple files as arguments.
>
> ```sh
> npx clang-format -n -Werror file1.cpp file2.cpp src/file3.cpp
> ```

### Basic

1. Global

    ```sh
    clang-format [options] [@<file>] [<file> ...]
    ```

1. Local

    Use `npx` (when using npm) to run a locally installed package.

    ```sh
    npx clang-format [options] [@<file>] [<file> ...]
    ```

### Frequently used commands

1. `--version`: Check the version of `clang-format`.

    ```sh
    npx clang-format --version
    ```

    Output example

    ```sh
    clang-format version 22.1.8 (https://github.com/llvm/llvm-project ca7933e47d3a3451d81e72ac174dcb5aa28b59d1)
    ```

    - `https://github.com/llvm/llvm-project`: The Git repository URL for the LLVM project, which includes Clang.
    - `ca7933e47d3a3451d81e72ac174dcb5aa28b59d1`: The commit hash for the specific version used to build `clang-format`, allowing you to trace the source code exactly.

1. `--help`: Help view additional options.

    ```sh
    npx clang-format --help
    ```

1. `--dry-run` or `-n`: Reports a **warning** when `example.cpp` is not correctly formatted.

    `--dry-run` and `-n` options are equivalent.

    ```sh
    npx clang-format --dry-run example.cpp
    ```

    ```sh
    npx clang-format -n example.cpp
    ```

1. `-Werror --dry-run` or `-Werror -n`: Reports an **error** when `example.cpp` is not correctly formatted.

    > [!TIP]
    >
    > Similar to `eslint` or `prettier --check` commands.

    `--dry-run` and `-n` options are equivalent.

    ```sh
    npx clang-format -Werror --dry-run example.cpp
    ```

    ```sh
    npx clang-format -Werror -n example.cpp
    ```

1. `-i`: Automatically fix unformatted files.

    > [!TIP]
    >
    > Similar to `eslint --fix` or `prettier --write` commands.

    ```sh
    npx clang-format -i example.cpp
    ```

### Glob patterns

`clang-format` itself does not search for files recursively. `*.cpp` will only match files in the current directory, not subdirectories. Whether `**/*` works depends on your shell and its settings.

**So, you can use the `find` command in POSIX.** If you are a Windows user, use ***Git Bash***. Then you can use the `find` command. The `find` command recursively searches through directories.

Using command substitution is simple but can produce an [**Argument list is too long**](https://stackoverflow.com/questions/11289551/argument-list-too-long-error-for-rm-cp-mv-commands) error. In that case, use `xargs`.

1. Basic

    To recursively search for all `.cpp` files in the current directory, use:

    ```sh
    npx clang-format $(find . -name "*.cpp")
    ```

    If the argument list is too long, use `xargs`. And if file names contain spaces or special characters, use `-print0` and `-0` options. `-print0` makes `find` output file names separated by null characters (`\0`), and `-0` tells `xargs` to correctly handle these null-separated file names.

    ```sh
    find . -name "*.cpp" -print0 | xargs -0 npx clang-format
    ```

1. With regular expressions

    To recursively search for all `.cpp` and `.h` files in the current directory using a regular expression, use:

    ```sh
    npx clang-format $(find . -regex ".*\.\(cpp\|h\)")
    ```

1. With negation patterns

    To exclude `excluded_file.cpp` from the `.cpp` files, use:

    ```sh
    npx clang-format $(find . -name "*.cpp" ! -name "excluded_file.cpp")
    ```

## `git-clang-format`

> [!NOTE]
>
> This feature is included in the [`clang-format-git`](../apis/clang-format-git.md) and [`clang-format-git-python`](../apis/clang-format-git-python.md) package.

`clang-format-git` and `clang-format-git-python` are two options for using `git-clang-format`, so you can choose the one that best fits your setup. The usage is the same as [angular/clang-format](https://github.com/angular/clang-format), which is no longer maintained.

---

### Using Without the Python3 Dependency

This package provides a standalone executable version of `git-clang-format`, so you won't need to install Python3. But it's size is quite large.

See the [`clang-format-git` package](../apis/clang-format-git.md).

---

### Using with Python3 Dependency

This version has a smaller file size than `clang-format-git`, but it does require **Python3** to run.

See the [`clang-format-git-python` package](../apis/clang-format-git-python.md).

---

### How to use

#### Basic

1. Global

    ```sh
    git-clang-format [OPTIONS] [<commit>] [<commit>|--staged] [--] [<file>...]
    ```

1. Local

    Use `npx` (when using npm) to run a locally installed package.

    ```sh
    npx git-clang-format [OPTIONS] [<commit>] [<commit>|--staged] [--] [<file>...]
    ```

#### Frequently used commands

1. `--help`: Help view additional options.

    ```sh
    npx git-clang-format --help
    ```
