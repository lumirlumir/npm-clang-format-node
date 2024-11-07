const { platform, arch } = require('os');

const { getGitClangFormatPath } = require('./getGitClangFormatPath');

/**
 * The ABSOLUTE path to the `git-clang-format` executable binary based on the OS platform and architecture.
 *
 * @alias `clangFormatGitPath`. See {@link clangFormatGitPath}.
 * @version `v1.2.0` Initial release.
 */
const gitClangFormatPath = getGitClangFormatPath(platform(), arch());

/**
 * Alias for `gitClangFormatPath`.
 *
 * @alias `gitClangFormatPath`. See {@link gitClangFormatPath}.
 * @version `v1.2.0` Initial release.
 */
const clangFormatGitPath = gitClangFormatPath;

module.exports = {
  gitClangFormatPath,
  clangFormatGitPath,
};
