# Use with `husky` and `lint-staged`

Ensuring that changes to your code are properly formatted is an important part of your development workflow. Use `husky` and `lint-staged` for your continuous integration process.

## `husky` (v8.x)

```bash
# .husky/pre-commit

npx lint-staged
```

## `lint-staged` (v15.x)

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
