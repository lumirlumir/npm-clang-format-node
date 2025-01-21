# Difference Between `myscript || exit 0` and `myscript || true` {#difference-between-myscript-exit-0-and-myscript-true}

> [!NOTE]
>
> I've referred to the [A Clean Exit](https://remysharp.com/2018/01/08/a-clean-exit) blog post, [#170](https://github.com/lumirlumir/npm-clang-format-node/issues/170) and [#171](https://github.com/lumirlumir/npm-clang-format-node/pull/171).

When writing or running shell scripts, the `||` operator is commonly used to handle cases where a specific command fails. The `||` operator is designed to execute the command on its right **only when the preceding command fails**. At first glance, `myscript || exit 0` and `myscript || true` might seem similar, but they have subtle differences, especially regarding the behavior of `|| true` across different platforms.

## 1. `myscript || exit 0` {#1-some-script-exit-0}

`exit 0` immediately terminates the script while returning a **successful exit code (`0`)**.

> [!TIP]
>
> - `exit 0` → success
> - `exit 1` → failure

In this case, if `myscript` fails (i.e., returns a non-zero exit code), `exit 0` is executed, marking the script as **"successfully terminated" despite the failure**. This approach can be useful in scenarios like CI/CD pipelines where errors need to be ignored, and the process should continue or be logged as successful.

```sh
sh -c "myscript || exit 0"
```

The above command ensures that even if `myscript` fails, the script returns exit code `0`, allowing subsequent processes to treat it as a success.

## 2. `myscript || true` {#2-some-script-true}

`true` is a command in Linux/Unix(POSIX) systems that always returns a **successful exit code (`0`)**. When using `myscript || true`, even if `myscript` fails, `true` will execute and return a **successful exit code (`0`)**.

However, unlike `exit 0`, `true` does **not terminate the current script**; it merely returns a success status, allowing the rest of the script to continue execution.

```sh
sh -c "myscript || true"
```

In this case, if `myscript` fails, `true` is executed, ensuring an exit code of `0`, but the script continues running.

## 3. Cross-Platform Behavior {#3-cross-platform-behavior}

`|| true` works as expected on POSIX-compliant shells (e.g., bash, zsh) and Git Bash. However, it does **not work in Windows PowerShell or CMD**.

For Windows environments using PowerShell or CMD, the `|| true` syntax is unsupported, and you should use alternatives like `|| exit 0`.

## 4. Key Differences Summary {#4-key-differences-summary}

| Aspect                  | `myscript \|\| exit 0`                                 | `myscript \|\| true`                                       |
|-------------------------|--------------------------------------------------------|------------------------------------------------------------|
| **On Failure**          | Terminates the script (exit) with a success code (`0`) | Returns a success code (`0`) and continues execution       |
| **Script Flow Control** | The script immediately stops                           | The script continues running                               |
| **Compatibility**       | Works in both POSIX and Windows environments           | Works only in POSIX and Git Bash; not in PowerShell or CMD |
| **Use Case**            | Ignoring errors and terminating execution              | Ignoring errors and proceeding to the next command         |

## 5. Practical Examples {#5-practical-examples}

- **`myscript || exit 0`**:

  ```sh
  nodemon --exec "mocha bad.test.js || exit 0"
  ```

  In this example, if the tests fail, `exit 0` ensures the script exits successfully, allowing nodemon to continue restarting. This approach works in all POSIX and Windows environments.

- **`myscript || true`**:

  ```sh
  npm install || true
  ```

  This command ensures that even if some errors occur during the installation, the script will continue executing. However, this approach works **only in Git Bash or Linux environments** and **will not work in Windows PowerShell or CMD**.

## 6. Conclusion {#6-conclusion}

`myscript || exit 0` terminates the script on failure but treats it as a success, while `myscript || true` ignores the failure and allows the script to proceed. However, since `|| true` is **specific to POSIX-compliant environments**, Windows users must find suitable alternatives like `|| exit 0` for compatibility.

Choosing the right approach for your environment is key to ensuring proper script behavior. I hope this explanation helps you understand the differences between `|| exit 0` and `|| true`!
