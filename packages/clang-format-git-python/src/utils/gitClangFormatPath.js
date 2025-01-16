/**
 * @fileoverview `gitClangFormatPath` and `clangFormatGitPythonPath` APIs.
 */

/* eslint-disable n/prefer-node-protocol */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { resolve } = require('path');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

/**
 * The ABSOLUTE path to the [`git-clang-format`](https://github.com/lumirlumir/npm-clang-format-node/blob/main/packages/clang-format-git-python/src/script/git-clang-format) Python script.
 *
 * @type string
 * @alias `clangFormatGitPythonPath`. See {@link clangFormatGitPythonPath}.
 * @version `v1.2.0` Initial release.
 */
const gitClangFormatPath = resolve(__dirname, `..`, `script`, `git-clang-format`);

/**
 * Alias for `gitClangFormatPath`.
 *
 * @alias `gitClangFormatPath`. See {@link gitClangFormatPath}.
 * @version `v1.2.0` Initial release.
 */
const clangFormatGitPythonPath = gitClangFormatPath;

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  gitClangFormatPath,
  clangFormatGitPythonPath,
};
