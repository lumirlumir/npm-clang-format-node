# Surgical formatting with `git-clang-format`

> [!NOTE] Reference
>
> - [Surgical formatting with `git-clang-format`](https://offlinemark.com/surgical-formatting-with-git-clang-format/)

::: warning `git clang-format` vs `git-clang-format`

- You can use the `git-clang-format` command (when installed **globally**) as an alternative to `git clang-format` in Node.js by leveraging the [`clang-format-git`](../apis/clang-format-git.md) or [`clang-format-git-python`](../apis/clang-format-git-python.md) package.

- In this document, all instances of the `git clang-format` command will be uniformly referred to as the `git-clang-format` command.

:::

If you’re already a 10x engineer, this article might not be for you. But for the rest of us, here’s what I wish I knew as an inexperienced C++ programmer: how to format only the changes in your pull request using `clang-format`.

You’ve probably heard of `clang-format`. It’s a tool that auto-formats source files for languages like C and C++. You can apply it to an entire file with a simple command like [`clang-format -i file.cpp`](/docs/get-started/cli#frequently-used-commands).

If you’re working on a project that’s already 100% `clang-format` compliant, this workflow works perfectly. However, some projects like [LLVM](https://github.com/llvm/llvm-project), [osquery](https://github.com/osquery/osquery), or [Electron](https://github.com/electron/electron) aren’t entirely formatted. In these cases, formatting the whole file isn’t practical because it inadvertently affects parts of the code unrelated to your changes. This adds unnecessary noise to your diffs, making code reviews more difficult.

In this case, you need a way to surgically format only the lines changed in your contribution. To do this, you can use the `clang-format` Git extension named `git-clang-format`.

## `git-clang-format`

The `clang-format` Git extension is often included with the `clang-format` package on Ubuntu. If it’s not available on your system, you can manually download the [`git-clang-format`](https://github.com/llvm/llvm-project/blob/main/clang/tools/clang-format/git-clang-format) Python script from the LLVM source tree and add it to your `PATH`. Make sure the script is executable, and you’ll be able to run `git-clang-format` from your shell.

## Formatting a Single Commit

`git-clang-format` operates on staged changes. The workflow is simple:

1. Write and edit your files however you like (it’s okay to be messy).
1. Stage your changes using `git add`.
1. Format your staged changes with `git-clang-format`.

Here’s an example:

1. I’ve added a new file, `x.cpp`, and staged it:

   ```sh
   $ git diff --staged
   diff --git a/x.cpp b/x.cpp
   new file mode 100644
   index 0000000..af14ed5
   --- /dev/null # [!code --]
   +++ b/x.cpp # [!code ++]
   @@ -0,0 +1,3 @@
   +int main() { # [!code ++]
   + # [!code ++]
   +} # [!code ++]
   ```

1. Running `git-clang-format` results in this output:

   ```sh
   $ git-clang-format
   changed files:
       x.cpp
   ```

1. Now, `git status` shows both staged and unstaged changes:

   ```sh
   $ git status
   On branch master
   Changes to be committed:
     (use "git restore --staged <file>..." to unstage)
       new file:   x.cpp

   Changes not staged for commit:
     (use "git add <file>..." to update what will be committed)
     (use "git restore <file>..." to discard changes in working directory)
       modified:   x.cpp
   ```

1. `git diff` will show the unstaged changes – the changes created by `clang-format`.

   ```sh
   $ git diff
   diff --git a/x.cpp b/x.cpp
   index af14ed5..237c8ce 100644
   --- a/x.cpp # [!code --]
   +++ b/x.cpp # [!code ++]
   @@ -1,3 +1 @@
   -int main() { # [!code --]
   - # [!code --]
   -} # [!code --]
   +int main() {} # [!code ++]
   ```

This workflow allows you to review `clang-format`’s changes independently of your development changes. If you don’t like them, you can discard them by purging your working tree using `git checkout`. If you’re satisfied, simply stage the formatting changes with `git add`.

## Specifying a Formatting Style

You can customize the formatting style using the `--style` option. Predefined styles include `LLVM`, `Google`, `Chromium`, `Mozilla`, and `WebKit`. If your project has a `.clang-format` file, you can use it by specifying `file` as the style:

```sh
$ git-clang-format --style=WebKit
$ git-clang-format --style=file  # Uses the `.clang-format` file.
```

## Conclusion

`clang-format` is a powerful tool, but its real-world application often requires more than just running `clang-format -i`. For most developers, the practical approach is to use `git-clang-format` to format only the specific changes in your pull request.

Since `git-clang-format` works on the staging tree, it’s easy to review formatting changes separately from development changes. This makes code reviews smoother and helps you maintain a clean, professional codebase without sacrificing flexibility during development. Whether you’re tidying up a single commit or an entire branch, a few additional Git commands can go a long way toward keeping your formatting clean and reviewers happy.
