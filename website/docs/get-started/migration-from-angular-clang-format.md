---
description: "Guide to migrating from 'angular/clang-format,' including alternatives for `check-clang-format` and `git-clang-format` with Node.js support and integration with tools like Husky and lint-staged."
---

# Migration from 'angular/clang-format'

## `check-clang-format`

This package only uses native `clang-format` and `git-clang-format` features to check formatting. The following commands will produce an error if the target files are not correctly formatted. So use them with [`husky`](https://typicode.github.io/husky/) and [`lint-staged`](https://github.com/lint-staged/lint-staged).

> [!TIP]
>
> `--dry-run` and `-n` options are equivalent.

```sh
npx clang-format -Werror --dry-run example.cpp
```

```sh
npx clang-format -Werror -n example.cpp
```

## `git-clang-format`

> `v1.2.0 (llvmorg-19.1.3)` - latest

This feature has been supported since [`v1.2.0 (llvmorg-19.1.3)`](https://github.com/lumirlumir/npm-clang-format-node/releases/tag/v1.2.0), so migration is no longer necessary. Instead, you can use the [`clang-format-git`](../apis/clang-format-git.md) or [`clang-format-git-python`](../apis/clang-format-git-python.md) package.

> `v1.0.0 (llvmorg-18.1.8)` - `v1.1.3 (llvmorg-19.1.3)`

Use [`husky`](https://typicode.github.io/husky/) and [`lint-staged`](https://github.com/lint-staged/lint-staged) for the `pre-commit` hook instead. See [Use with `husky` and `lint-staged`](use-with-husky-and-lint-staged.md) for more details.
