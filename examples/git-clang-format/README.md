# `examples-git-clang-format`

This example demonstrates the features of `git-clang-format` command (same as `git clang-format` command).

Follow the guidelines below to see how `git-clang-format` works.

## Getting Started

Take a look at the `src/main.c` file in the `examples/git-clang-format` directory.

Note that this file is not formatted according to the coding style configured in the `.clang-format` file at the root.

In this scenario, what would happen if I add a space to line 9 of the `src/main.c` file, run `git add src/main.c`, and then execute `npx git-clang-format` (same as running `git clang-format`)?

```c
/* src/main.c */

#include <stdio.h>

int main(void) {
  printf("Line 4");
  printf("Line 5");
  printf("Line 6");
      printf("Line 7");
  printf("Line 8");
            printf("Line 9");
  printf("Line 10");

  return 0;
}
```

### Step 1

Run the following command to add a space to line 9 of the `src/main.c` file.

#### Run from the Root

```sh
npm run add-a-space-to-line-9-of-main-c-file -w examples/git-clang-format
```

#### Navigate to the Directory and Run

```sh
cd examples/git-clang-format

npm run add-a-space-to-line-9-of-main-c-file
```

---

Now, you can see that the `src/main.c` file has been modified as shown below.

```diff
-            printf("Line 9");
+             printf("Line 9");
```

### Step 2

Run the following command to add the modified `src/main.c` file to the staging area of Git.

#### Run from the Root

```sh
npm run git-add -w examples/git-clang-format
```

#### Navigate to the Directory and Run

```sh
# cd examples/git-clang-format (You are already in the directory.)

npm run git-add
```

---

Now, you can see that the `src/main.c` file has been added to the staging area of Git.

```txt
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   src/main.c
```

### Step 3

Run the following command to run `git-clang-format` and check the result.

#### Run from the Root

```sh
npm run git-clang-format -w examples/git-clang-format
```

#### Navigate to the Directory and Run

```sh
# cd examples/git-clang-format (You are already in the directory.)

npm run git-clang-format
```

---

If you run the command, it should produce an **error message** like the one below, since the modified `src/main.c` file is not formatted according to the coding style configured in the `.clang-format` file.

```txt
> examples-git-clang-format@1.2.3 git-clang-format
> npx git-clang-format

changed files:
    examples/git-clang-format/src/main.c
Process exited with code: 1
```

Check the 'Changes not staged for commit' section in Git using the `git status` command in the CLI and review the `src/main.c` file. The `git-clang-format` command should have fixed the code formatting according to the coding style configured in the `.clang-format` file.

So, it is now properly formatted according to the configured coding style.

```diff
-             printf("Line 9");
+  printf("Line 9");
```

## Notable Points

If you run the `npx clang-format src/main.c` command, it will format the entire `src/main.c` file according to the coding style configured in the `.clang-format` file.

However, if you run the `npx clang-format src/main.c` command on a modified file, it will only format the changed lines of code. This is known as **Surgical Formatting**.
