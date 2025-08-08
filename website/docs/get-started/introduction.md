---
description: 'This page introduces the concepts and provides guidance on how to format your code with `clang-format` and `git-clang-format`.'
---

# Formatting with `clang-format` and `git-clang-format`

::: danger Target Audience

**This page introduces the concepts and provides guidance on how to format your code with `clang-format` and `git-clang-format`.** It's designed for newcomers, so If you're already a senior engineer with experience in Clang, this page might not be for you. You can skip this page and go directly to the [Installation](installation.md) page.

:::

::: warning `git clang-format` vs `git-clang-format`

- You can use the `git-clang-format` command (when installed **globally**) as an alternative to `git clang-format` in Node.js by leveraging the [`clang-format-git`](../apis/clang-format-git.md) or [`clang-format-git-python`](../apis/clang-format-git-python.md) package.
- In this document, all instances of the `git clang-format` command will be uniformly referred to as the `git-clang-format` command.

:::

> [!NOTE] References
>
> - [Format your code - all the time](https://ortogonal.github.io/cpp/git-clang-format/)
> - [Surgical formatting with `git-clang-format`](https://offlinemark.com/surgical-formatting-with-git-clang-format/)

Formatting source code is something that, at least I think, is crucial for improving code quality. The reason why formatting your code is important is that it ensures a uniform appearance, making it easier to read and understand.

This page is not about debates like whether the `{` should be on the same line as the `if` statement or on the line below. Instead, it focuses on the tools and methods you can use to consistently apply the same formatting.

## `clang-format`

You've probably heard of `clang-format`, a tool that automatically formats source files for languages like C and C++. It was created as part of the LLVM Clang open-source project. The concept behind `clang-format` is simple. [You setup a configuration file](/docs/get-started/configuration) that defines the formatting style you want for your code, and then you run `clang-format`. It will automatically reformat your code to follow the rules specified in the configuration file.

`clang-format` offers options for customizing almost everything. Typically, your settings are stored in a file called [`.clang-format`](/docs/get-started/configuration), which `clang-format` will then use. It can handle code written in C, C++, Java, JavaScript, Objective-C, Protobuf, and C#. You can apply it to an entire file with a simple command like [`clang-format -i my_source.cpp`](/docs/get-started/cli#frequently-used-commands).

### Example

```cpp [my_source.cpp]
void test(QString&data, bool extraString) {
    int i=0;
    for (i=0;i<3;i++) {
        data+="reallylongstringtoproducealonglineasanexample" + QString::number(i * 1000) + "/filetoload.html";
        if (extraString)
        {
            data += "some-extra";
        }
    }
}
```

To format your code, run:

```sh
$ clang-format -i my_source.cpp
```

After running `clang-format`, the code will be formatted as follows:

```cpp [my_source.cpp]
void test(QString &data, bool extraString)
{
    int i = 0;
    for (i = 0; i < 3; i++) {
        data += "reallylongstringtoproducealonglineasanexample" + QString::number(i * 1000)
                + "/filetoload.html";
        if (extraString) {
            data += "some-extra";
        }
    }
}
```

The code above is entirely trivial, but it illustrates what `clang-format` can do for your code. Whether you like this formatting or not isn't the point here, because you can set up any rules that suit you and your team!

## Problems with `clang-format`

`clang-format` is a great tool to use but it has one major issue - **legacy code** and your **commit history**. The problem is simple. When you reformat a source file, you end up with tons of changes that mess up the commit history, making branch merging more difficult. It also complicates code reviews and code archaeology, because you have to figure out if the changes are actual code modifications or just formatting changes that don't affect functionality. Another issue is maintaining the code format when adding new code to already formatted section.

If you're working on a project that's already fully (100%) `clang-format` compliant, using `clang-format` alone for the workflow works perfectly. However, some projects like [LLVM](https://github.com/llvm/llvm-project), [osquery](https://github.com/osquery/osquery), or [Electron](https://github.com/electron/electron) aren't fully formatted. In these cases, formatting the entire file isn't practical because it inadvertently affects parts of the code unrelated to your changes. This adds unnecessary noise to your diffs, making code reviews more difficult.

In such cases, you need a way to surgically format only the lines changed in your contribution. To do this, you can use the `clang-format` Git extension called `git-clang-format`.

## `git-clang-format`

`git-clang-format` is a simple Python script that's often included with the `clang-format` package on Ubuntu. If it's not available on your system, you can manually download the [`git-clang-format`](https://github.com/llvm/llvm-project/blob/main/clang/tools/clang-format/git-clang-format) Python script from the LLVM source tree and add it to your `PATH`. Just ensure the script is executable, and you'll be able to run `git-clang-format` from your shell.

What `git-clang-format` solves is that it runs `clang-format` only on the changes you've made. This helps address the problems I mentioned earlier. It formats only the changes in your pull requests, meaning every time we modify code, it can be formatted with `clang-format`. As a result, our legacy code base will gradually become better formatted without loosing the readability during code reviews.

The workflow using `git-clang-format` is quite straightforward.

- Develop your code.
- Run `git-clang-format`.

This ensures that the changes you've made are properly formatted!

### Formatting a Single Commit

`git-clang-format` operates on staged changes. The workflow is simple:

1. Write and edit your files however you like (it's okay to be messy).
1. Stage your changes using `git add`.
1. Format your staged changes with `git-clang-format`.

Here's an example:

1. I've added a new file, `x.cpp`, and staged it:

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

1. `git diff` will show the unstaged changes - the changes created by `clang-format`:

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

This workflow allows you to review `clang-format`'s changes independently of your development changes. If you don't like them, you can discard them by purging your working tree using `git checkout`. If you're satisfied, simply stage the formatting changes with `git add`.

### Specifying a Formatting Style

You can customize the formatting style using the `--style` option. Predefined styles include `LLVM`, `Google`, `Chromium`, `Mozilla`, and `WebKit`. If your project has a `.clang-format` file, you can use it by specifying `file` as the style:

```sh
$ git-clang-format --style=WebKit
$ git-clang-format --style=file  # Uses the `.clang-format` file.
```

### Using with a `pre-commit` hook

You can use `git-clang-format` with a `pre-commit` hook to format your code before committing. This ensures that your code is always formatted correctly. This part is well documented in the [Use with `husky` and `lint-staged`](use-with-husky-and-lint-staged.md) page. Take a look at it if you want to know more about it.

## Conclusion

`clang-format` is a powerful tool, but its real-world application often requires more than just running `clang-format -i`. For most developers, the practical approach is to use `git-clang-format` to format only the specific changes in your pull request.

Since `git-clang-format` works on the staging tree, it's easy to review formatting changes separately from development changes. This makes code reviews smoother and helps you maintain a clean, professional codebase without sacrificing flexibility during development. Whether you're tidying up a single commit or an entire branch, a few additional Git commands can go a long way toward keeping your formatting clean and reviewers happy.
