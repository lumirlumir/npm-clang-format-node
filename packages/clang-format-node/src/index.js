/**
 * @fileoverview Entry file for the `clang-format-node` package.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { clangFormatPath, clangFormatNodePath } = require('./utils/clangFormatPath');
const {
  getClangFormatPath,
  getClangFormatNodePath,
} = require('./utils/getClangFormatPath');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  clangFormatPath,
  clangFormatNodePath,
  getClangFormatPath,
  getClangFormatNodePath,
};
