const { existsSync } = require('fs');
const { resolve } = require('path');

/**
 * Returns the ABSOLUTE path to the `clang-format` executable binary based on the OS platform and architecture.
 *
 * The possible combinations are `darwin-arm64`, `darwin-x64`, `linux-arm`, `linux-arm64`, `linux-ppc64`, `linux-s390x`, `linux-x64`, `win32-x64`.
 *
 * Throws an error if the executable is not found.
 *
 * @param {string} osPlatform The current operating system platform. (e.g., `darwin`, `linux`, `win32`)
 * @param {string} architecture The current system architecture. (e.g., `arm`, `arm64`, `ppc64`, `s390x`, `x64`)
 * @returns {string} The ABSOLUTE path to the `clang-format` executable binary.
 * @throws `Error` Throws an error if the executable binary is not found for the specified OS platform and architecture.
 * @alias `getClangFormatNodePath`. See {@link getClangFormatNodePath}.
 * @version `v1.2.0` Initial release.
 */
function getClangFormatPath(osPlatform, architecture) {
  const clangFormatPath = resolve(
    __dirname,
    `..`,
    `bin`,
    `cfn-${osPlatform}-${architecture}`,
    `clang-format${osPlatform === 'win32' ? '.exe' : ''}`,
  );

  if (!existsSync(clangFormatPath))
    throw new Error(
      `No executable found for '${osPlatform}(OS platform)-${architecture}(architecture)'\nThe possible combinations are 'darwin-arm64', 'darwin-x64', 'linux-arm', 'linux-arm64', 'linux-ppc64', 'linux-s390x', 'linux-x64', 'win32-x64'`,
    );

  return clangFormatPath;
}

/**
 * Alias for `getClangFormatPath`.
 *
 * @alias `getClangFormatPath`. See {@link getClangFormatPath}.
 * @version `v1.2.0` Initial release.
 */
const getClangFormatNodePath = getClangFormatPath;

module.exports = {
  getClangFormatPath,
  getClangFormatNodePath,
};
