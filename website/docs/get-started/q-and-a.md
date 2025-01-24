---
description: Questions and answers about clang-format-node.
---

# Q & A

## Why are the results of `clang-format` and `git-clang-format` different?

> [!NOTE] References
>
> - [Why are the results of `clang-format` and `git-clang-format` different?](https://stackoverflow.com/questions/76968316/why-are-the-results-of-clang-format-and-git-clang-format-different) on Stack Overflow.
> - [Git Intergration](https://clang.llvm.org/docs/ClangFormat.html#git-integration) on LLVM Clang.

`git-clang-format` only formats changes. `clang-format` formats the whole document.

The script [`clang/tools/clang-format/git-clang-format`](https://github.com/llvm/llvm-project/blob/main/clang/tools/clang-format/git-clang-format) can be used to format just the lines touched in git commits.
