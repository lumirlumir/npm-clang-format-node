# Getting Started

This page explains how to get started with packages related to `clang-format` and highlights their common features.

For more detailed information, please refer to each package's individual documentation.

## Installation

### `clang-format-node`

See the [Installation section of `clang-format-node`](../02-packages/01-clang-format-node.md#installation).

### `clang-format-git`

See the [Installation section of `clang-format-git`](../02-packages/02-clang-format-git.md#installation).

### `clang-format-git-python`

See the [Installation section of `clang-format-git-python`](../02-packages/03-clang-format-git-python.md#installation).

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

## APIs

Each package also supports JSDoc type hints with the following APIs, so you’ll see more detailed information directly in your code editor.

### `clang-format-node`

See the [APIs section of `clang-format-node`](../02-packages/01-clang-format-node.md#apis).

### `clang-format-git`

See the [APIs section of `clang-format-git`](../02-packages/02-clang-format-git.md#apis).

### `clang-format-git-python`

See the [APIs section of `clang-format-git-python`](../02-packages/03-clang-format-git-python.md#apis).

## [`.clang-format-ignore`](https://clang.llvm.org/docs/ClangFormat.html#clang-format-ignore)

You can create `.clang-format-ignore` files to make `clang-format` ignore certain files. A `.clang-format-ignore` file consists of patterns of file path names. It has the following format:

- A blank line is skipped.
- Leading and trailing spaces of a line are trimmed.
- A line starting with a hash (`#`) is a comment.
- A non-comment line is a single pattern.
- The slash (`/`) is used as the directory separator.
- A pattern is relative to the directory of the `.clang-format-ignore` file (or the root directory if the pattern starts with a slash). Patterns containing drive names (e.g. `C:`) are not supported.
- Patterns follow the rules specified in [**POSIX 2.13.1, 2.13.2, and Rule 1 of 2.13.3.**](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html#tag_18_13)
- A pattern is negated if it starts with a bang (`!`).

To match all files in a directory, use e.g. `foo/bar/*`. To match all files in the directory of the `.clang-format-ignore` file, use `*`. Multiple `.clang-format-ignore` files are supported similar to the `.clang-format` files, with a lower directory level file voiding the higher level ones.

## Use with `husky` and `lint-staged`

Ensuring that changes to your code are properly formatted is an important part of your development workflow. Use `husky` and `lint-staged` for your continuous integration process.

### `husky` (v8.x)

```bash
# .husky/pre-commit

npx lint-staged
```

### `lint-staged` (v15.x)

1. Check

    ```jsonc
    /* package.json */

    {
      // ...
      "lint-staged": {
        "*.{c,cpp,h}": "npx clang-format -Werror -n",
      }
      // ...
    }
    ```

1. Fix

    ```jsonc
    /* package.json */

    {
      // ...
      "lint-staged": {
        "*.{c,cpp,h}": "npx clang-format -i",
      }
      // ...
    }
    ```

> [!TIP]
>
> If `example1.cpp` and `example2.c` are staged, then `npx clang-format -Werror -n example1.cpp example2.c` will be excuted.
