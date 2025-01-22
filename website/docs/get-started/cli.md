# CLI

> [!IMPORTANT]
>
> The CLI examples in this page only cover the most common options and do not cover all the available options. To see the full list of options, check the [Clang-Format CLI](https://clang.llvm.org/docs/ClangFormat.html) page which covers `clang-format` and `git-clang-format`.

## Usage: `clang-format`

This feature is included in the `clang-format-node` package.

If you want to learn more about `clang-format` itself, see the [`clang-format style options`](https://clang.llvm.org/docs/ClangFormatStyleOptions.html).

> [!TIP]
>
> `clang-format` can take multiple files as arguments.
>
> ```bash
> npx clang-format -n -Werror file1.cpp file2.cpp src/file3.cpp
> ```

### Basic

1. Global

    ```bash
    clang-format [options] [@<file>] [<file> ...]
    ```

1. Local

    Use `npx` to run a locally installed package.

    ```bash
    npx clang-format [options] [@<file>] [<file> ...]
    ```

### Frequently used commands

1. `--version`: Check the version of `clang-format`.

    ``` bash
    npx clang-format --version
    ```

    Output example

    ```bash
    clang-format version 18.1.8 (https://github.com/llvm/llvm-project 3b5b5c1ec4a3095ab096dd780e84d7ab81f3d7ff)
    ```

    - `https://github.com/llvm/llvm-project`: The Git repository URL for the LLVM project, which includes Clang.
    - `3b5b5c1ec4a3095ab096dd780e84d7ab81f3d7ff`: The commit hash for the specific version used to build `clang-format`, allowing you to trace the source code exactly.

1. `--help`: Help view additional options.

    ```bash
    npx clang-format --help
    ```

1. `--dry-run` or `-n`: Makes an **WARNING** when `example.cpp` is not correctly formatted.

    `--dry-run` and `-n` options are equivalent.

    ```bash
    npx clang-format --dry-run example.cpp
    ```

    ```bash
    npx clang-format -n example.cpp
    ```

1. `-Werror --dry-run` or `-Werror -n`: Makes an **ERROR** when `example.cpp` is not correctly formatted.

    > Similar to `eslint` or `prettier --check` commands.

    `--dry-run` and `-n` options are equivalent.

    ```bash
    npx clang-format -Werror --dry-run example.cpp
    ```

    ```bash
    npx clang-format -Werror -n example.cpp
    ```

1. `-i`: Automatically fix unformatted files.

    > Similar to `eslint --fix` or `prettier --write` commands.

    ```bash
    npx clang-format -i example.cpp
    ```

### Glob patterns

Unfortunately, there is no way to apply `clang-format` recursively. `*.cpp` will only match files in the current directory, not subdirectories. Even `**/*` doesn't work.

**So, you need to use the `find` command in POSIX.** If you are a Windows user, use ***git bash***. then you can use the `find` command. The `find` command recursively searches through directories.

It is simple but can produce an error if the [**Argument list is too long**](https://stackoverflow.com/questions/11289551/argument-list-too-long-error-for-rm-cp-mv-commands). In that case, use `xargs`

1. Basic

    To recursively search for all `.cpp` files in the current directory, use:

    ```bash
    npx clang-format $(find . -name "*.cpp")
    ```

    If the argument list is too long, use `xargs`. And if file names contain spaces or special characters, use `-print0` and `-0` options. `-print0` makes `find` output file names separated by null characters (`\0`), and `-0` tells `xargs` to correctly handle these null-separated file names.

    ```bash
    find . -name "*.cpp" -print0 | xargs -0 npx clang-format
    ```

1. With regular expressions

    To recursively search for all `.cpp` and `.h` files in the current directory using a regular expression, use:

    ```bash
    npx clang-format $(find . -regex ".*\.\(cpp\|h\)")
    ```

1. With negation patterns

    To exclude `excluded_file.cpp` from the `.cpp` files, use:

    ```bash
    npx clang-format $(find . -name "*.cpp" ! -name "excluded_file.cpp")
    ```

## Usage: `git-clang-format`

This feature is included in the `clang-format-git` and `clang-format-git-python` package.

`clang-format-git` and `clang-format-git-python` are two options for using `git-clang-format`, so you can choose the one that best fits your setup. The usage is same to ['angular/clang-format'](https://github.com/angular/clang-format).

### Using Without the Python3 Dependency

This package provides a standalone executable version of `git-clang-format`, so you won’t need to install Python3. But it's size is quite large.

#### Usage

See the [Usage section of `clang-format-git`](../02-packages/02-clang-format-git.md#usage).

### Using with Python3 Dependency

This version has a smaller file size than `clang-format-git`, but it does require **Python3** to run.

#### Usage

See the [Usage section of `clang-format-git-python`](../02-packages/03-clang-format-git-python.md#usage).

### How to use

#### Basic

1. Global

    ```bash
    git-clang-format [OPTIONS] [<commit>] [<commit>|--staged] [--] [<file>...]
    ```

1. Local

    Use `npx` to run a locally installed package.

    ```bash
    npx git-clang-format [OPTIONS] [<commit>] [<commit>|--staged] [--] [<file>...]
    ```

#### Frequently used commands

1. `--help`: Help view additional options.

    ```bash
    npx git-clang-format --help
    ```
