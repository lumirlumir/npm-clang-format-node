const { resolve } = require('path');

/**
 * The ABSOLUTE path to the [`git-clang-format`](../script/git-clang-format) Python script.
 *
 * @alias `clangFormatGitPythonPath`({@link clangFormatGitPythonPath})
 */
const gitClangFormatPath = resolve(__dirname, `..`, `script`, `git-clang-format`);

/**
 * The ABSOLUTE path to the [`git-clang-format`](../script/git-clang-format) Python script.
 *
 * @alias `gitClangFormatPath`({@link gitClangFormatPath})
 */
const clangFormatGitPythonPath = gitClangFormatPath;

module.exports = {
  gitClangFormatPath,
  clangFormatGitPythonPath,
};
