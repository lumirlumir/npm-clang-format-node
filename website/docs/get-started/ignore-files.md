# Ignore Files

> [!IMPORTANT]
>
> To see the full list of options, check the [`.clang-format-ignore`](https://clang.llvm.org/docs/ClangFormat.html#clang-format-ignore) page.

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
