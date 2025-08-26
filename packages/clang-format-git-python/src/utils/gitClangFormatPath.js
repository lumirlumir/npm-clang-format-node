/**
 * @fileoverview `gitClangFormatPath` and `clangFormatGitPythonPath` APIs.
 */

/* eslint-disable n/prefer-node-protocol -- DO NOT USE `node:` namespace for backward compatibility */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { resolve } = require('path');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

/**
 * The ABSOLUTE path to the [`git-clang-format`](https://github.com/lumirlumir/npm-clang-format-node/blob/main/packages/clang-format-git-python/script/git-clang-format) Python script.
 * @type {string}
 * @alias `clangFormatGitPythonPath`. See {@link clangFormatGitPythonPath}.
 * @version `v1.2.0` Initial release.
 * @see https://clang-format-node.lumir.page/docs/apis/clang-format-git-python
 */
const gitClangFormatPath = resolve(__dirname, `..`, `..`, `script`, `git-clang-format`);

/**
 * Alias for `gitClangFormatPath`.
 * @alias `gitClangFormatPath`. See {@link gitClangFormatPath}.
 * @version `v1.2.0` Initial release.
 * @see https://clang-format-node.lumir.page/docs/apis/clang-format-git-python
 */
const clangFormatGitPythonPath = gitClangFormatPath;

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  gitClangFormatPath,
  clangFormatGitPythonPath,
};
