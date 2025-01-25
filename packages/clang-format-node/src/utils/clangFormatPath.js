/**
 * @fileoverview `clangFormatPath` and `clangFormatNodePath` APIs.
 */

/* eslint-disable n/prefer-node-protocol -- DO NOT USE `node:` namespace for backward compatibility */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { platform, arch } = require('os');

const { getClangFormatPath } = require('./getClangFormatPath');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

/**
 * The ABSOLUTE path to the `clang-format` executable binary based on the OS platform and architecture.
 *
 * @alias `clangFormatNodePath`. See {@link clangFormatNodePath}.
 * @version `v1.2.0` Initial release.
 * @see https://clang-format-node.lumir.page/docs/apis/clang-format-node
 */
const clangFormatPath = getClangFormatPath(platform(), arch());

/**
 * Alias for `clangFormatPath`.
 *
 * @alias `clangFormatPath`. See {@link clangFormatPath}.
 * @version `v1.2.0` Initial release.
 * @see https://clang-format-node.lumir.page/docs/apis/clang-format-node
 */
const clangFormatNodePath = clangFormatPath;

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  clangFormatPath,
  clangFormatNodePath,
};
