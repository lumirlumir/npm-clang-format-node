# Migration from 'angular/clang-format'

## `check-clang-format`

This package only uses native `clang-format` features to check formatting. The following commands will produce an error if the target files are not correctly formatted. So use them with `husky` and `lint-staged`. (`--dry-run` and `-n` options are equivalent.)

```bash
npx clang-format -Werror --dry-run example.cpp
```

```bash
npx clang-format -Werror -n example.cpp
```

## `git-clang-format`

> `v1.2.0 (llvmorg-19.1.3)` - latest

This feature has been supported since `v1.2.0 (llvmorg-19.1.3)`, so migration is no longer necessary. Instead, you can use the [`clang-format-git`](../02-packages/02-clang-format-git.md) or [`clang-format-git-python`](../02-packages/03-clang-format-git-python.md) package.

> `v1.0.0 (llvmorg-18.1.8)` - `v1.1.3 (llvmorg-19.1.3)`

Use [`husky`](https://typicode.github.io/husky/) and [`lint-staged`](https://github.com/lint-staged/lint-staged) for the `pre-commit` hook instead. See [Use with `husky` and `lint-staged`](/docs/01-introduction/04-getting-started.md#use-with-husky-and-lint-staged) for details.
