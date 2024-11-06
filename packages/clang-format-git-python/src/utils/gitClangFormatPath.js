const { resolve } = require('path');

/**
 * The ABSOLUTE path to the [`git-clang-format`](../script/git-clang-format) Python script.
 *
 * @alias `gitClangFormatPath`({@link gitClangFormatPath})
 */
const clangFormatGitPath = resolve(__dirname, `..`, `script`, `git-clang-format`);

/**
 * The ABSOLUTE path to the [`git-clang-format`](../script/git-clang-format) Python script.
 *
 * @alias `clangFormatGitPath`({@link clangFormatGitPath})
 */
const gitClangFormatPath = clangFormatGitPath;

module.exports = {
  clangFormatGitPath,
  gitClangFormatPath,
};
