const { platform, arch } = require('os');

const { getClangFormatPath } = require('./getClangFormatPath');

/**
 * The ABSOLUTE path to the `clang-format` executable binary based on the OS platform and architecture.
 *
 * @alias `clangFormatNodePath`. See {@link clangFormatNodePath}.
 * @version `v1.2.0` Initial release.
 */
const clangFormatPath = getClangFormatPath(platform(), arch());

/**
 * Alias for `clangFormatPath`.
 *
 * @alias `clangFormatPath`. See {@link clangFormatPath}.
 * @version `v1.2.0` Initial release.
 */
const clangFormatNodePath = clangFormatPath;

module.exports = {
  clangFormatPath,
  clangFormatNodePath,
};
