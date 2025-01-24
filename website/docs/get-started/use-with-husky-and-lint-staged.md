---
description: "Guide to integrating `clang-format` with `husky` and `lint-staged` for code formatting in continuous integration workflows."
---

# Use with `husky` and `lint-staged`

Ensuring that changes to your code are properly formatted is an important part of your development workflow. Use [`husky`](https://typicode.github.io/husky/) and [`lint-staged`](https://github.com/lint-staged/lint-staged) for your continuous integration process.

## `husky` <Badge type="warning" text="v8.x" />

```sh [.husky/pre-commit]
npx lint-staged
```

## `lint-staged` <Badge type="warning" text="v15.x" />

1. Check

    > [!TIP]
    >
    > If `example1.cpp` and `example2.c` are staged, then `npx clang-format -Werror -n example1.cpp example2.c` will be excuted.

    ```json [package.json] {3-5}
    {
      // ...
      "lint-staged": {
        "*.{c,cpp,h}": "npx clang-format -Werror -n",
      }
      // ...
    }
    ```

1. Fix

    ```json [package.json] {3-5}
    {
      // ...
      "lint-staged": {
        "*.{c,cpp,h}": "npx clang-format -i",
      }
      // ...
    }
    ```
