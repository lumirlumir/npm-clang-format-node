# Why we started this project

['angular/clang-format'](https://github.com/angular/clang-format) is no longer maintained (See [#79](https://github.com/angular/clang-format/issues/79) [#82](https://github.com/angular/clang-format/issues/82) [#83](https://github.com/angular/clang-format/pull/83)). Nevertheless, new versions of `clang-format` continue to be released. Bugs are fixed, and new features are added. However, using `clang-format` directly in a Node.js environment without any support can be somewhat cumbersome. So we decided to make a new, maintained version of it.

And also, `git-clang-format` relies on **Python3**, so if you haven't installed Python, they cannot be executed. Many people would prefer if this package worked without dependencies beyond Node.js. **So, this package relies only on Node.js.** However, for the compatability with previous users of [angular/clang-format](https://github.com/angular/clang-format) and those who prefer to use this package with Python3, alternative options for using `git-clang-format` are also provided.

To add a bit more explanation, one package is [`clang-format-git`](https://www.npmjs.com/package/clang-format-git), which works without a Python3 dependency, while the other is [`clang-format-git-python`](https://www.npmjs.com/package/clang-format-git-python), which requires Python3. The only difference between them is the size. `clang-format-git` package is larger.

Note that certain feautures from 'angular/clang-format' are not included in this package. Specifically `check-clang-format` is not used. For alternative methods to `check-clang-format`, See the [Migration Guide](../03-others/01-migration-from-angular-clang-format.md).
