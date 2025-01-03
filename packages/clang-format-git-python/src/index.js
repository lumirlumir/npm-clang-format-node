/**
 * @fileoverview Entry file for the `clang-format-git-python` package.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const {
  gitClangFormatPath,
  clangFormatGitPythonPath,
} = require('./utils/gitClangFormatPath');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  gitClangFormatPath,
  clangFormatGitPythonPath,
};
