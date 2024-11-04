const { platform, arch } = require('os');

const { getClangFormatPath } = require('./getClangFormatPath');

/**
 * The ABSOLUTE path to the `clang-format` executable binary based on the OS platform and architecture.
 */
const clangFormatPath = getClangFormatPath(platform(), arch());

module.exports = {
  clangFormatPath,
};
