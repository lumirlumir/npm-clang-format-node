/**
 * @fileoverview Entry file for the `clang-format-git` package.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const {
  getGitClangFormatPath,
  getClangFormatGitPath,
} = require('./utils/getGitClangFormatPath');
const { gitClangFormatPath, clangFormatGitPath } = require('./utils/gitClangFormatPath');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  getGitClangFormatPath,
  getClangFormatGitPath,
  gitClangFormatPath,
  clangFormatGitPath,
};
