const { resolve } = require('path');

/**
 * The ABSOLUTE path to the [`git-clang-format`](../script/git-clang-format) Python script.
 *
 * @alias `clangFormatGitPath`({@link clangFormatGitPath})
 */
const gitClangFormatPath = resolve(__dirname, `..`, `script`, `git-clang-format`);

/**
 * The ABSOLUTE path to the [`git-clang-format`](../script/git-clang-format) Python script.
 *
 * @alias `gitClangFormatPath`({@link gitClangFormatPath})
 */
const clangFormatGitPath = gitClangFormatPath;

module.exports = {
  gitClangFormatPath,
  clangFormatGitPath,
};
